import { Component } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import nestedObj from '../helpers/nestedObj';
import fullName from '../helpers/full-name';
import styled from 'styled-components';

const StyledInfo = styled.div`
  text-align: center;

  h1 {
    border-bottom: 1px solid black;
    margin: 0;
  }
`;

const StyledContact = styled.address`
  display: flex;
  justify-content: center;
  margin: 0.25em;

  a {
    color: inherit;
    font-style: normal;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    * {
      margin-right: 0.2em;
    }
  }

  *:not(:last-child):after {
    content: '|';
    margin: 0 0.25em;
  }
`;

class InfoDisplay extends Component {
  render() {
    const {
      info: { name, email, phone },
    } = this.props;

    return (
      <StyledInfo>
        <h1>{fullName(name)}</h1>
        <Contact email={email} phone={phone} />
        <button onClick={this.props.toggleEdit}>Edit</button>
      </StyledInfo>
    );
  }
}

class Contact extends Component {
  render() {
    const { email, phone } = this.props;

    return (
      <StyledContact>
        {email && (
          <a href={`mailto:${email}`}>
            <AiOutlineMail />
            {email}
          </a>
        )}
        {phone && (
          <a href={`tel:${phone}`}>
            <AiOutlinePhone />
            {phone}
          </a>
        )}
      </StyledContact>
    );
  }
}

const Form = styled.form`
  h2 {
    margin: 0;
  }

  *:not(:last-child) {
    margin-bottom: 0.5em;
  }

  input {
    margin: 0 0.5em;
  }
`;

class FormField extends Component {
  render() {
    const { id, label, type = 'text', ...inputProps } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} {...inputProps} />
      </div>
    );
  }
}

class InfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.info);

    this.onFieldChange = this.onFieldChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFieldChange(...fields) {
    const stateField = fields[0];
    const nestedFields = fields.slice(1);

    return (e) => {
      let value;

      if (fields.length > 1) {
        value = Object.assign(
          {},
          this.state[stateField],
          nestedObj(e.target.value, nestedFields)
        );
      } else {
        value = e.target.value;
      }

      this.setState({
        [stateField]: value,
      });
    };
  }

  onFormSubmit(e) {
    const { toggleEdit, submitForm } = this.props;
    const { name, email, phone } = this.state;

    e.preventDefault();
    submitForm({ name, email, phone });
    toggleEdit();
  }

  onFormCancel(e) {
    e.preventDefault();
    this.props.toggleEdit();
  }

  render() {
    const { name, email, phone } = this.state;

    return (
      <Form onSubmit={this.onFormSubmit}>
        <h2>Info</h2>
        <FormField
          id="first-name"
          label="First Name:"
          value={name.first}
          onChange={this.onFieldChange('name', 'first')}
          required
        />
        <FormField
          id="last-name"
          label="Last Name:"
          value={name.last}
          onChange={this.onFieldChange('name', 'last')}
          required
        />
        <FormField
          id="email"
          type="email"
          label="Email:"
          value={email}
          onChange={this.onFieldChange('email')}
        />
        <FormField
          id="phone"
          type="tel"
          label="Phone:"
          value={phone}
          onChange={this.onFieldChange('phone')}
        />
        <div>
          <button onClick={this.onFormCancel}>Cancel</button>
          <input type="submit" value="Submit" />
        </div>
      </Form>
    );
  }
}

export { InfoDisplay, InfoForm };
