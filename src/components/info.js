import { Component } from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
  text-align: center;

  h1 {
    border-bottom: 1px solid black;
    margin: 0;
  }

  a {
    color: inherit;
    font-style: normal;
    text-decoration: none;
  }
`;

const StyledContact = styled.address`
  & > *:not(:last-child):after {
    content: '|';
    margin: 0 0.25em;
  }
`;

class Info extends Component {
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
      <StyledInfo>
        <h1>{name}</h1>
        <Contact email={email} phone={phone} />
      </StyledInfo>
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
        <a href={`mailto:${email}`}>{email}</a>
        <a href={`tel:${phone}`}>{phone}</a>
      </StyledContact>
    );
  }
}

export default Info;
