import { Component } from 'react';
import styled from 'styled-components';
import EducationForm from './education-form';
import { format, parse, isPast, isValid } from 'date-fns';

const EducationHeader = styled.div`
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

const School = styled.h3`
  text-transform: uppercase;
  margin: 0.1em 0;
`;

class Education extends Component {
  render() {
    const {
      education: { school, degree, date },
    } = this.props;

    if (school) {
      return (
        <div>
          <EducationHeader>
            <h2>Education</h2>
            <button onClick={this.props.toggleEdit}>Edit</button>
          </EducationHeader>
          <School>{school}</School>
          <div>
            {degree.type && degree.field && (
              <div>
                {degree.type} in {degree.field}
              </div>
            )}
            <GraduationDate date={date} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <EducationHeader>
            <button onClick={this.props.toggleEdit}>Edit</button>
          </EducationHeader>
        </div>
      );
    }
  }
}

class GraduationDate extends Component {
  constructor(props) {
    super(props);
    this.date = parse(props.date, 'yyyy-MM-dd', new Date());
  }

  get formattedDate() {
    return format(this.date, 'MMM dd, yyyy');
  }

  get dateContext() {
    if (isPast(this.date)) {
      return 'Graduated';
    } else {
      return 'Expected graduation';
    }
  }

  render() {
    if (isValid(this.date)) {
      return (
        <span>
          {this.dateContext}: {this.formattedDate}
        </span>
      );
    } else {
      return null;
    }
  }
}

export default Education;
export { EducationForm };
