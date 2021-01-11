import { Component } from 'react';
import Form, { BindableInputField } from '../form';

class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.education);
    this.InputField = BindableInputField(this);
  }

  render() {
    const { education, ...props } = this.props;
    const { school } = this.state;
    const InputField = this.InputField;

    return (
      <Form subject={this.state} {...props}>
        <InputField
          id="school-name"
          label="School Name:"
          field="school"
          placeholder="Harvard University"
        />
        <InputField
          id="degree-type"
          label="Degree type:"
          fields={['degree', 'type']}
          placeholder="BS"
          required={school !== ''}
        />
        <InputField
          id="degree-field"
          label="Field of study"
          fields={['degree', 'field']}
          placeholder="Computer Science"
          required={school !== ''}
        />
      </Form>
    );
  }
}

export default EducationForm;
