import React from 'react';
import { Row } from 'reactstrap';
import SmallCard from './Component/CardGallery/SmallCard';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import FilterLocation from './Component/Filter/FilterLocation';
import Fuse from 'fuse.js';
import './Home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.filterByLocation = this.filterByLocation.bind(this);
    this.searchClick = this.searchClick.bind(this);
    this.searchChange = this.searchChange.bind(this);

    this.state = {
      studentsInfo: [], // initial fetched student list
      search: '', // will be updated when user type according to searchChange()
      filteredBySearch: [], // will be updated by searchChange() & searchClick()
      typed: false, // to display filteredBySearch after fetching api
      displayedResults: [],
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
    // test for getting unique value
    console.log('studentsInfo : ', this.state.studentsInfo.map(elem => elem));
    const uniqueCountry = [
      ...new Set(this.state.studentsInfo.map(item => item.basics.location.country))
    ];
    console.log('unique country : ', uniqueCountry);
  }

  searchClick(e) {
    console.log('input is : ', this.state.search);

    // fuse.js library setting
    let options = {
      tokenize: true,
      matchAllTokens: true,
      findAllMatches: true,
      threshold: 0,
      location: 0,
      distance: 0,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        'basics.name',
        'basics.email',
        'basics.website',
        'basics.summary',
        'basics.location.country',
        'basics.profiles.network',
        'basics.profiles.username',
        'basics.profiles.url',
        'projects.title',
        'projects.date',
        'projects.summary',
        'projects.technologies',
        'favorite_programming_languages',
        'interests.name',
        'interests.keywords'
      ]
    };
    let fuse = new Fuse(this.state.studentsInfo, options);
    console.log(fuse.search(this.state.search));

    this.setState({
      filteredBySearch: fuse.search(this.state.search) // update filtered list
    });

    console.log(this.state.filteredBySearch);
  }

  searchChange(e) {
    let options = {
      tokenize: true,
      matchAllTokens: true,
      findAllMatches: true,
      threshold: 0, // 0 for exact match
      location: 0,
      distance: 0,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        'basics.name',
        'basics.email',
        'basics.website',
        'basics.summary',
        'basics.location.country',
        'basics.profiles.network',
        'basics.profiles.username',
        'basics.profiles.url',
        'projects.title',
        'projects.date',
        'projects.summary',
        'projects.technologies',
        'favorite_programming_languages',
        'interests.name',
        'interests.keywords'
      ]
    };

    let fuse = new Fuse(this.state.studentsInfo, options);

    this.setState({
      search: e.target.value, // update search value while user typing
      typed: e.target.value === '' ? false : true, // if input is empty show initial student list otherwise sho filtered list
      filteredBySearch: fuse.search(this.state.search) // update filtered list
    });
    console.log(e.target.value);
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
    const typed = this.state.typed;
    return (
      <div>
        <Header
          search={this.state.search}
          searchClick={this.searchClick}
          searchChange={this.searchChange}
        />
        <FilterLocation filterByLocation={this.filterByLocation} />
        <h1 className="home">Discover the profiles of our Fullstack Junior Developers</h1>
        <section>
          {typed
            ? this.state.filteredBySearch.map(filteredStudent => (
              <Row>
                <SmallCard {...filteredStudent} />
              </Row>
            ))
            : this.state.studentsInfo.map(studentInfo => (
              <Row>
                <SmallCard {...studentInfo} />
              </Row>
            ))}
        </section>
        <Footer />
      </div>
    );
  }
}
