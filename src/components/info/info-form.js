import { Component } from 'react';
import Form, { bindField, InputField } from '../form';

class InfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.info);
    this.InputField = bindField(InputField, this);
  }

  render() {
    const { info, ...props } = this.props;
    const InputField = this.InputField;

    return (
      <Form subject={this.state} {...props}>
        <InputField
          id="first-name"
          label="First Name"
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
        <InputField
          id="phone"
          type="tel"
          label="Phone:"
          field="phone"
          placeholder="1-800-123-3456"
        />
      </Form>
    );
  }
}

export default InfoForm;
