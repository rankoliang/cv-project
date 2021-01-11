import Form from './form';

class InfoForm extends Form {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.info);

    this.formFields = [
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
    ];
  }
}

export default InfoForm;
