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
          first: '',
          last: '',
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
      isEditing: {
        info: true,
        education: true,
      },
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  toggleEdit(section) {
    return () => {
      this.setState((state) => {
        return {
          isEditing: Object.assign({}, state.isEditing, {
            [section]: !state.isEditing[section],
          }),
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
    const InfoComponent = isEditing.info ? InfoForm : Info;
    const EducationComponent = isEditing.education ? EducationForm : Education;

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
