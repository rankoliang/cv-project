import { Component } from 'react';
import styled from 'styled-components';
import nestedObj from '../helpers/nested-obj';
import dig from '../helpers/dig';
import PhoneInput from 'react-phone-number-input/input';

const StyledForm = styled.form`
  h2 {
    margin: 0;
  }

  input {
    padding: 0.25em;
    margin: 0 0.5em;
  }

  &:not(:first-child) {
    margin-top: 0.5em;
  }

  *:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

const Controls = styled.div`
  input {
    margin-left: 0;
    margin-right: 0.5em;
  }
`;

class Field extends Component {
  render() {
    const { id, label, children } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        {children}
      </div>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFormCancel = this.onFormCancel.bind(this);
  }

  static onFieldChange(...fields) {
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
    const { toggleEdit, submitForm, subject } = this.props;

    e.preventDefault();
    submitForm(subject);
    toggleEdit();
  }

  onFormCancel(e) {
    e.preventDefault();
    this.props.toggleEdit();
  }

  render() {
    return (
      <StyledForm onSubmit={this.onFormSubmit}>
        <h2>{this.props.title}</h2>
        {this.props.children}
        <Controls>
          <input type="button" onClick={this.onFormCancel} value="Cancel" />
          <input type="submit" value="Submit" />
        </Controls>
      </StyledForm>
    );
  }
}

class InputField extends Component {
  render() {
    const { id, label, ...inputProps } = this.props;

    return (
      <Field id={id} label={label}>
        <input id={id} {...inputProps} />
      </Field>
    );
  }
}

class PhoneInputField extends Component {
  render() {
    const { id, label, ...inputProps } = this.props;

    return (
      <Field id={id} label={label}>
        <PhoneInput id={id} {...inputProps} />
      </Field>
    );
  }
}

const bindField = function (FieldComponent, binding) {
  return ({ field, fields = [field], ...props }) => {
    return (
      <FieldComponent
        onChange={Form.onFieldChange.apply(binding, fields)}
        value={dig(binding.state, ...fields)}
        {...props}
      />
    );
  };
};

export default Form;
export { InputField, bindField as bindableField, bindField, PhoneInputField };
