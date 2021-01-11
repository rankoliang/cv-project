import { Component } from 'react';
import Form, { BindableInputField } from './form';

class Education extends Component {
  render() {
    const {
      education: { schoolName, title },
    } = this.props;
    return (
      <div>
        {schoolName}
        {title}
        <button onClick={this.props.toggleEdit}>Edit</button>
      </div>
    );
  }
}

class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.education);
  }

  render() {
    const { education, ...props } = this.props;
    const InputField = BindableInputField.bind(this);

    return (
      <Form subject={this.state} {...props}>
        <InputField
          id="school-name"
          field="schoolName"
          label="School Name:"
          required
        />
        <InputField id="title" label="Degree title:" field="title" required />
      </Form>
    );
  }
}

export default Education;
export { EducationForm };
