import { Component } from 'react';
import Info, { InfoForm } from './info/info';
import Education, { EducationForm } from './education/education';
import uniqid from 'uniqid';
import Experiences from './experience/experiences';
import styled from 'styled-components';
import { format } from 'date-fns';

const StyledResume = styled.div`
  margin: 1em;
  padding: 1em;
  border: 1px solid black;
`;

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        name: {
          first: 'Your',
          last: 'Name',
        },
        email: '',
        phone: '',
      },
      education: {
        school: '',
        degree: {
          type: '',
          field: '',
        },
        date: format(new Date(), 'yyyy-MM-dd'),
      },
      experiences: new Map([
        [
          uniqid(),
          {
            company: 'Company 1',
            title: 'Role 1',
            tasks: ['Amet delectus?', 'Ipsum quibusdam.'],
            startDate: format(new Date(2020, 0, 1), 'yyyy-MM-dd'),
            endDate: format(new Date(2020, 0, 2), 'yyyy-MM-dd'),
          },
        ],
        [
          uniqid(),
          {
            company: 'Company 2',
            title: 'Role 2',
            tasks: ['Sit sequi?', 'Lorem et!'],
            startDate: format(new Date(2020, 0, 1), 'yyyy-MM-dd'),
            endDate: format(new Date(2020, 0, 2), 'yyyy-MM-dd'),
          },
        ],
      ]),
      isEditing: new Map([
        ['info', false],
        ['education', true],
        ['experience', true],
        ['experiences', new Map()],
      ]),
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  toggleEdit(section) {
    return (id) => {
      this.setState((state) => {
        const isEditing = state.isEditing.get(section);
        const isEditingValue = id
          ? new Map([...isEditing, [id, !isEditing.get(id)]])
          : !isEditing;

        return {
          isEditing: new Map([...state.isEditing, [section, isEditingValue]]),
        };
      });
    };
  }

  submitForm(field) {
    return (state) => {
      this.setState({ [field]: state });
    };
  }

  render() {
    const { education, info, isEditing } = this.state;
    const InfoComponent = isEditing.get('info') ? InfoForm : Info;
    const EducationComponent = isEditing.get('education')
      ? EducationForm
      : Education;

    return (
      <StyledResume>
        <InfoComponent
          title="Info"
          info={info}
          toggleEdit={this.toggleEdit('info')}
          submitForm={this.submitForm('info')}
        />
        <EducationComponent
          title="Education"
          education={education}
          toggleEdit={this.toggleEdit('education')}
          submitForm={this.submitForm('education')}
        />
        <Experiences
          title="Experience"
          experiences={[...this.state.experiences.entries()]}
        />
      </StyledResume>
    );
  }
}

export default Resume;
