import { Component } from 'react';
import uniqid from 'uniqid';

class Experience extends Component {
  render() {
    const {
      experience: { company, title, tasks, startDate, endDate },
    } = this.props;

    return (
      <div>
        <h2>{company}</h2>
        <div>
          {startDate} - {endDate}
        </div>
        <p>{title}</p>
        <ul>
          {tasks.map((task) => {
            return <li key={uniqid()}>{task}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Experience;
