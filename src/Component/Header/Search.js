import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

 export default class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div>
            <InputGroup>
                <Input type="search" placeholder="username" />
            </InputGroup>
        </div>
      );
    }
  }
