import { Component } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import styled from 'styled-components';

const StyledInfoDisplay = styled.div`
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

  *:not(:last-child):after {
    content: '|';
    margin: 0 0.25em;
  }
`;

class InfoDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign(
      {
        name: 'John Smith',
        email: 'john.smith@example.com',
        phone: '123-456-7890',
      },
      this.props
    );
  }

  render() {
    const { name, email, phone } = this.state;

    return (
      <StyledInfoDisplay>
        <h1>{name}</h1>
        <Contact email={email} phone={phone} />
      </StyledInfoDisplay>
    );
  }
}

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { email, phone } = this.props;

    return (
      <StyledContact>
        <a href={`mailto:${email}`}>
          <AiOutlineMail />
          {email}
        </a>
        <a href={`tel:${phone}`}>
          <AiOutlinePhone />
          {phone}
        </a>
      </StyledContact>
    );
  }
}

export default InfoDisplay;
