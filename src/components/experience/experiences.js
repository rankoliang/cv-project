import { Component } from 'react';
import Experience from './experience';

class Experiences extends Component {
  render() {
    const { experiences } = this.props;

    return (
      <div>
        {experiences.map(([id, experience]) => {
          return <Experience experience={experience} key={id} />;
        })}
      </div>
    );
  }
}

export default Experiences;
