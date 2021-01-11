import { Component } from 'react';
import styled from 'styled-components';
import nestedObj from '../helpers/nested-obj';
import dig from '../helpers/dig';

const StyledForm = styled.form`
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

class InputField extends Component {
  static arrayOf(inputFields) {
    return inputFields.map(({ fields, ...props }) => {
      return (
        <InputField
          {...props}
          onChange={Form.onFieldChange.apply(this, fields)}
          value={dig(this.state, ...fields)}
          key={props.id}
        />
      );
    });
  }

  render() {
    const { id, label, ...inputProps } = this.props;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...inputProps} />
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
        <div>
          <button onClick={this.onFormCancel}>Cancel</button>
          <input type="submit" value="Submit" />
        </div>
      </StyledForm>
    );
  }
}

export default Form;
export { InputField };
