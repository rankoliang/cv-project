import { Component } from 'react';
import InfoForm from './info-form';
import Info from './info';
import Education from './education';
import styled from 'styled-components';

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
        schoolName: '',
        title: '',
        date: '',
      },
      isEditing: {
        info: true,
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
    const { info, isEditing } = this.state;
    const InfoComponent = isEditing.info ? InfoForm : Info;

    return (
      <StyledResume>
        <InfoComponent
          title={'Info'}
          info={info}
          toggleEdit={this.toggleEdit('info')}
          submitForm={this.submitForm('info')}
        />
        <Education />
      </StyledResume>
    );
  }
}

export default Resume;
