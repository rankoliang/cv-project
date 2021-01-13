import { Component } from 'react';
import Form, { bindField, InputField, PhoneInputField } from '../form';

class InfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.info);
    this.InputField = bindField(InputField, this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
  }

  onPhoneChange(phone) {
    this.setState({
      phone,
    });
  }

  render() {
    const { info, ...props } = this.props;
    const InputField = this.InputField;

    return (
      <Form subject={this.state} {...props}>
        <InputField
          id="first-name"
          label="First Name:"
          fields={['name', 'first']}
          placeholder="John"
          required
        />
        <InputField
          id="last-name"
          label="Last Name:"
          fields={['name', 'last']}
          placeholder="Smith"
          required
        />
        <InputField
          id="email"
          type="email"
          label="Email:"
          field="email"
          placeholder="jsmith@example.com"
        />
        <PhoneInputField
          id="phone"
          label="Phone:"
          defaultCountry="US"
          placeholder="Enter a phone number"
          onChange={this.onPhoneChange}
          value={this.state.phone}
        />
      </Form>
    );
  }
}

export default InfoForm;
