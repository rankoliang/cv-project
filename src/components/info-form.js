import { Component } from 'react';
import Form, { InputField } from './form';

class InfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.info);

    this.inputFields = InputField.arrayOf.bind(this, [
      {
        id: 'first-name',
        label: 'First Name:',
        fields: ['name', 'first'],
        required: true,
      },
      {
        id: 'last-name',
        label: 'Last Name:',
        fields: ['name', 'last'],
        required: true,
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email:',
        fields: ['email'],
      },
      {
        id: 'phone',
        type: 'tel',
        label: 'Phone:',
        fields: ['phone'],
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

export default InfoForm;
