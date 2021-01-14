import { Component } from 'react';

class Experience extends Component {
  render() {
    const {
      experience: { company, title, tasks, startDate, endDate },
    } = this.props;

    return (
      <div>
        <div>
          <h2>{company}</h2>
        </div>
        <div>
          {startDate} - {endDate}
        </div>
        <p>{title}</p>
        <ul>
          {Object.entries(tasks).map(([id, task]) => {
            return <li key={id}>{task}</li>;
          })}
        </ul>
        <button onClick={() => this.props.toggleEdit()}>Edit</button>
        <button onClick={() => this.props.deleteExperience()}>Delete</button>
      </div>
    );
  }
}

export default Experience;
