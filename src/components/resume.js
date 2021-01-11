import { Component } from 'react';
import { InfoDisplay, InfoForm } from './info';
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
          first: 'John',
          last: 'Smith',
          get full() {
            return `${this.first} ${this.last}`;
          },
        },
        email: 'john.smith@example.com',
        phone: '123-456-7890',
      },
      isEditing: {
        info: true,
      },
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  toggleEdit(section) {
    return (e) => {
      e.preventDefault();
      this.setState((state) => {
        return {
          isEditing: Object.assign({}, state.isEditing, {
            [section]: !state.isEditing[section],
          }),
        };
      });
    };
  }

  submitForm(state) {
    this.setState(state);
  }

  render() {
    const { info, isEditing } = this.state;
    const Info = isEditing.info ? InfoForm : InfoDisplay;

    return (
      <StyledResume>
        <Info
          info={info}
          toggleEdit={this.toggleEdit('info')}
          submitForm={this.submitForm}
        />
      </StyledResume>
    );
  }
}

export default Resume;
