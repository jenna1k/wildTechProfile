import React from 'react';
import BigCard from './Component/CardGallery/BigCard';
import FilterLocation from './Component/Filter/FilterLocation';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.filterByLocation = this.filterByLocation.bind(this);

    this.state = {
      displayedResults: [],
      studentsInfo: [],
      location: 'Germany',
      filteredByLocation: []
    };
  }

  componentDidMount() {
    fetch('https://api-resume.herokuapp.com/api/v1/resume')
      .then(response => response.json())
      .then(data =>
        this.setState({
          studentsInfo: data,
          displayedResults: data
        })
      )
      .catch(() => alert('error api'));
  }

  filterByLocation(location) {
    this.setState({
      location: location
    });

    const filtered = this.state.studentsInfo.filter(studentInfo =>
      studentInfo.basics.location.country === this.state.location);
    this.setState({
      // need to understand why it doesn't work
      displayedResults: location.toLowerCase() === 'any' ? this.state.studentsInfo : filtered
    })
  }

  render() {
    return (
      <div>
        <div>
          <FilterLocation filterByLocation={this.filterByLocation} />
        </div>
        <h2>
          {this.state.displayedResults.map(studentInfo => (
            <BigCard {...studentInfo} />
          ))}
        </h2>
      </div>
    );
  }
}
