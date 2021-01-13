import { Component } from 'react';
import Info, { InfoForm } from './info/info';
import Education, { EducationForm } from './education/education';
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
      experience: new Map(),
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
          title={'Info'}
          info={info}
          toggleEdit={this.toggleEdit('info')}
          submitForm={this.submitForm('info')}
        />
        <EducationComponent
          title={'Education'}
          education={education}
          toggleEdit={this.toggleEdit('education')}
          submitForm={this.submitForm('education')}
        />
      </StyledResume>
    );
  }
}

export default Resume;
