import { Component } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import fullName from '../../helpers/full-name';
import styled from 'styled-components';
import InfoForm from './info-form';

const StyledInfo = styled.div`
  text-align: center;

  h1 {
    border-bottom: 1px solid black;
    margin: 0;
  }
`;

const StyledContact = styled.address`
  display: flex;
  justify-content: center;
  margin: 0.25em;

  a {
    color: inherit;
    font-style: normal;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    * {
      margin-right: 0.2em;
    }
  }

  & > *:not(:last-child):after {
    content: '|';
    margin: 0 0.25em;
  }
`;

class Info extends Component {
  render() {
    const {
      info: { name, email, phone },
    } = this.props;

    return (
      <StyledInfo>
        <h1>{fullName(name)}</h1>
        <Contact email={email} phone={phone} />
        <button onClick={this.props.toggleEdit}>Edit</button>
      </StyledInfo>
    );
  }
}

class Contact extends Component {
  render() {
    const { email, phone } = this.props;

    return (
      <StyledContact>
        {email && (
          <a href={`mailto:${email}`}>
            <AiOutlineMail />
            {email}
          </a>
        )}
        {phone && (
          <a href={`tel:${phone}`}>
            <AiOutlinePhone />
            {phone}
          </a>
        )}
      </StyledContact>
    );
  }
}

export default Info;
export { InfoForm };
