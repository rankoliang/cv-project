import { Component } from 'react';
import Info from './info';
import styled from 'styled-components';

const StyledResume = styled.div`
  margin: 1em;
  padding: 1em;
  border: 1px solid black;
`;

class Resume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        name: 'John Smith',
        email: 'john.smith@example.com',
        phone: '123-456-7890',
      },
    };
  }

  render() {
    const { info } = this.state;

    return (
      <StyledResume>
        <Info info={info} />
      </StyledResume>
    );
  }
}

export default Resume;
