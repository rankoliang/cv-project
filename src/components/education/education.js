import { Component } from 'react';
import Form, { BindableInputField } from '../form';
import styled from 'styled-components';
import EducationForm from './education-form';

const School = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;

  & > *:not(:last-child) {
    margin-right: 0.25em;
  }

  h2 {
    margin: 0.1em 0;
  }
`;

const Degree = styled.div`
  margin: 0.25em 0;

  *:not(:last-child):after {
    content: '|';
    margin: 0 0.25em;
  }
`;

class Education extends Component {
  render() {
    const {
      education: { school, degree },
    } = this.props;

    if (school) {
      return (
        <div>
          <School>
            <h2>{school}</h2>
            <button onClick={this.props.toggleEdit}>Edit</button>
          </School>
          <Degree>
            {degree.type && degree.field && (
              <span>
                {degree.type} in {degree.field}
              </span>
            )}
          </Degree>
        </div>
      );
    } else {
      return (
        <div>
          <School>
            <h2>Education</h2>
            <button onClick={this.props.toggleEdit}>Edit</button>
          </School>
        </div>
      );
    }
  }
}

export default Education;
export { EducationForm };
