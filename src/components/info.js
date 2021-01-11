import { Component } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
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
        <h1>
          {name.first} {name.last}
        </h1>
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
        <a href={`mailto:${email}`}>
          <AiOutlineMail />
          {email}
        </a>
        <a href={`tel:${phone}`}>
          <AiOutlinePhone />
          {phone}
        </a>
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
    const { id, label, type = 'text', value = '', ...inputProps } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} defaultValue={value} {...inputProps} />
      </div>
    );
  }
}

class InfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        first: '',
        last: '',
        get full() {
          return `${this.first} ${this.last}`;
        },
      },
      email: '',
      phone: '',
    };

    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(...fields) {
    return (e) => {
      let value;

      if (fields.length > 1) {
        value = Object.assign(
          {},
          this.state[fields[0]],
          nestedObj(e.target.value, ...fields.slice(1))
        );
      } else {
        value = this.state[fields[0]];
      }

      this.setState({
        [fields[0]]: value,
      });
    };
  }

  render() {
    const { toggleEdit, submitForm } = this.props;
    const { name, email, phone } = this.state;
    const info = { name, email, phone };

    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm({ info });
          toggleEdit(e);
        }}
      >
        <h2>Info</h2>
        <FormField
          id="first-name"
          label="First Name:"
          value={name.first}
          onChange={this.onFieldChange('name', 'first')}
        />
        <FormField
          id="last-name"
          label="Last Name:"
          value={name.last}
          onChange={this.onFieldChange('name', 'last')}
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
          <button onClick={toggleEdit}>Cancel</button>
          <input type="submit" value="Submit" />
        </div>
      </Form>
    );
  }
}

function nestedObj(value, ...fields) {
  if (fields.length === 1) {
    return { [fields[0]]: value };
  } else {
    return { [fields[0]]: nestedObj(value, fields.slice(1)) };
  }
}

export { InfoDisplay, InfoForm };
