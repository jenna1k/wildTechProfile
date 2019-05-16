import React from 'react';
import data from './data.json';
import Card from './Card'

 export default class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div>
          <Card name={data.basics.name} email={data.basics.email}/>
        </div>
      );
    }
  }
