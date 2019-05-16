import React from 'react';

export default class SingleOptionFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: this.props.options,
      selected: ""
    }
  }
}