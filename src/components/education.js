import { Component } from 'react';
import Form, { InputField } from './form';

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

    this.inputFields = InputField.arrayOf.bind(this, [
      {
        id: 'school-name',
        label: 'School Name:',
        fields: ['schoolName'],
        required: true,
      },
      {
        id: 'title',
        label: 'Degree title:',
        fields: ['title'],
        required: true,
      },
    ]);
  }

  render() {
    const { info, ...props } = this.props;

    return (
      <Form subject={this.state} {...props}>
        {this.inputFields()}
      </Form>
    );
  }
}

export default Education;
export { EducationForm };
