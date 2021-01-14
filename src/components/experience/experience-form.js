import { Component } from 'react';
import { StyledForm, Controls, InputField } from '../form';
import uniqid from 'uniqid';
import update from '../../helpers/update';
import objFilter from '../../helpers/obj-filter';
import maxDate from '../../helpers/max-date';

class ExperienceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: this.props.experience,
    };

    this.onChange = this.onChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.onChanger = Object.fromEntries(
      ['company', 'title', 'endDate'].map((prop) => {
        return [prop, this.onChange(prop)];
      })
    );
    this.onChanger['startDate'] = (e) => {
      const value = e.target.value;
      this.setState(({ experience }) => {
        return {
          experience: update(experience, {
            startDate: value,
            endDate: maxDate(experience.endDate, value),
          }),
        };
      });
    };
  }

  onChange(prop, callback = (value) => value) {
    return (e) => {
      this.setState({
        experience: update(this.state.experience, {
          [prop]: callback(e.target.value),
        }),
      });
    };
  }

  addTask() {
    this.setState({
      experience: update(this.state.experience, {
        tasks: update(this.state.experience.tasks, { [uniqid()]: '' }),
      }),
    });
  }

  deleteTask(id) {
    this.setState(({ experience }) => {
      const remainingTasks = objFilter(
        experience.tasks,
        ([taskId]) => taskId !== id
      );
      return {
        experience: update(experience, { tasks: remainingTasks }),
      };
    });
  }

  render() {
    const {
      experience,
      experience: { company, title, startDate, endDate, tasks },
    } = this.state;

    return (
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          this.props.submitForm(experience);
          this.props.toggler();
        }}
      >
        <h2>{this.props.title}</h2>

        <InputField
          id="company"
          onChange={this.onChanger.company}
          value={company}
          required
        />
        <InputField
          id="title"
          onChange={this.onChanger.title}
          value={title}
          required
        />
        <InputField
          id="start-date"
          type="date"
          label="Start Date:"
          onChange={this.onChanger.startDate}
          value={startDate}
          required
        />
        <InputField
          id="end-date"
          type="date"
          label="End Date:"
          min={startDate}
          onChange={this.onChanger.endDate}
          value={endDate}
          required
        />

        <fieldset>
          <legend>Tasks: </legend>
          {Object.entries(tasks).map(([id, task]) => {
            return (
              <TaskInput
                task={task}
                key={id}
                id={id}
                onChange={this.onChange('tasks', (value) => {
                  return update(tasks, { [id]: value });
                })}
                onDelete={(e) => {
                  e.preventDefault();
                  this.deleteTask(id);
                }}
                required
              />
            );
          })}
          <button
            onClick={(e) => {
              e.preventDefault();
              this.addTask();
            }}
          >
            Add task
          </button>
        </fieldset>
        <Controls>
          <input
            type="button"
            value="Cancel"
            onClick={(e) => {
              e.preventDefault();
              this.props.toggler();
            }}
          />
          <input type="submit" value="Submit" />
        </Controls>
      </StyledForm>
    );
  }
}

class TaskInput extends Component {
  render() {
    const { task, onChange, onDelete, ...props } = this.props;
    return (
      <InputField label="" value={task} onChange={onChange} {...props}>
        <button onClick={onDelete}>Delete</button>
      </InputField>
    );
  }
}

export default ExperienceForm;
