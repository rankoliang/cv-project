import { Component } from 'react';
import Experience from './experience';
import ExperienceForm from './experience-form';
import { format } from 'date-fns';
import uniqid from 'uniqid';
import styled from 'styled-components';

const Title = styled.h2`
  border-bottom: 1px solid black;
`;

class Experiences extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.props.toggleFormShow();
  }

  render() {
    const {
      title,
      experiences,
      showForm,
      showEdit,
      deleteExperience,
      submitExperience,
      toggleEdit,
    } = this.props;

    return (
      <div>
        <Title>{title}</Title>
        {Object.entries(experiences).map(([id, experience]) => {
          if (showEdit.get(id)) {
            return (
              <ExperienceForm
                title="Edit Experience"
                experience={experience}
                key={id}
                toggler={() => toggleEdit(id)}
                submitForm={(experience) => submitExperience(id, experience)}
              />
            );
          } else {
            return (
              <Experience
                experience={experience}
                key={id}
                toggleEdit={() => toggleEdit(id)}
                deleteExperience={() => deleteExperience(id)}
              />
            );
          }
        })}
        <button onClick={this.handleAdd}>Add experience</button>
        {showForm && (
          <ExperienceForm
            title="New Experience"
            toggler={this.handleAdd}
            submitForm={(experience) => submitExperience(uniqid(), experience)}
            experience={{
              startDate: format(new Date(), 'yyyy-MM-dd'),
              endDate: format(new Date(), 'yyyy-MM-dd'),
              company: '',
              title: '',
              tasks: {},
            }}
          />
        )}
      </div>
    );
  }
}

export default Experiences;
