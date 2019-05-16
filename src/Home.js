import React, { Component } from 'react';
import BigCard from './Component/CardGallery/BigCard';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentsInfo: []
    };
  }

  componentDidMount() {
    console.log('[Home] ComponientDidMount');
    fetch('https://api-resume.herokuapp.com/api/v1/resume')
      .then(response => response.json())
      .then(data =>
        this.setState({
          studentsInfo: data
        })
      )
      .catch(() => alert('error api'));
  }

  render() {
    return (
      <div>
        <h1>Discover the profiles of our Fullstack Junior Developers</h1>
        <h2>
          {this.state.studentsInfo.map(studentInfo => (
            <BigCard {...studentInfo} />
          ))}
        </h2>
      </div>
    );
  }
}

export default Home;
