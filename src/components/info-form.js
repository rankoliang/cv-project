import { Component } from 'react';
import Form, { BindableInputField } from './form';

class InfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.info);
  }

  render() {
    const { info, ...props } = this.props;
    const InputField = BindableInputField.bind(this);

    return (
      <Form subject={this.state} {...props}>
        <InputField
          id="first-name"
          label="First Name"
          fields={['name', 'first']}
          required
        />
        <InputField
          id="last-name"
          label="Last Name:"
          fields={['name', 'last']}
          required
        />
        <InputField id="email" type="email" label="Email:" field="email" />
        <InputField id="phone" type="tel" label="Phone:" field="phone" />
      </Form>
    );
  }
}

export default InfoForm;
