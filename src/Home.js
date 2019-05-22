import React, { Component } from 'react';
import Fuse from 'fuse.js';
import SmallCard from './Component/CardGallery/SmallCard';
import './Home.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import { Col, Row, Container } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentsInfo: [], // initial fetched student list
      search: '', // will be updated when user type according to searchChange()
      filteredBySearch: [], // will be updated by searchChange() & searchClick()
      applyFilter: false, // to display filteredBySearch after fetching api,
      listProgrammingSkills: []
    };

    this.searchClick = this.searchClick.bind(this);
    this.searchChange = this.searchChange.bind(this);
    this.createDeckHandler = this.createDeckHandler.bind(this);
    this.filterBy = this.filterBy.bind(this);
  }

  componentDidMount() {
    fetch('https://api-resume.herokuapp.com/api/v1/resume')
      .then(response => response.json())
      .then(data => {
        this.setState({
          studentsInfo: data
        });

        //todo: update filterList
        this.setState({
          listProgrammingSkills: [
            'html',
            'css',
            'js',
            'react',
            'bootstrap',
            'git',
            'github',
            'npm',
            'reactstrap',
            'netlify',
            'vue',
            'material ui'
          ]
        });
      })
      .catch(() => alert('error api'));
  }

  searchClick(e) {
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
      keys: ['favorite_programming_languages']
    };
    let fuse = new Fuse(this.state.studentsInfo, options);

    this.setState({
      filteredBySearch: fuse.search(this.state.search) // update filtered list
    });
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
        'projects.technologies',
        'favorite_programming_languages',
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
        'interests.name',
        'interests.keywords'
      ]
    };
    let fuse = new Fuse(this.state.studentsInfo, options);

    this.setState({
      search: e.target.value, // update search value while user typing
      applyFilter: e.target.value === '' ? false : true, // if input is empty show initial student list otherwise sho filtered list
      filteredBySearch: fuse.search(this.state.search) // update filtered list
    });
  }

  filterBy(filterName = 'programmingSkills', value = 'any') {
    switch (filterName) {
      case 'programmingSkills':
        //to do:
        //console.log('filter:programmingSkills', value);
        this.createDeckHandler(value);
        break;

      default:
        break;
    }
  }

  createDeckHandler(searchValue) {
    let options = {
      tokenize: true,
      matchAllTokens: true,
      findAllMatches: true,
      threshold: 0,
      location: 0,
      distance: 0,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['favorite_programming_languages', 'projects.technologies']
    };
    let fuse = new Fuse(this.state.studentsInfo, options);

    this.setState({
      filteredBySearch: fuse.search(searchValue),
      applyFilter: true
    });
  }

  render() {
    const listSkills = this.state.listProgrammingSkills;

    const applyFilter = this.state.applyFilter;

    return (
      <div className="text-center">
        <Header
          listSkills={listSkills}
          search={this.state.search}
          searchClick={this.searchClick}
          searchChange={this.searchChange}
          filterBy={this.filterBy}
        />
        <h1 className="home">Discover the profiles of our Fullstack Junior Developers</h1>
        <section>
          <Container>
            <Row>
              {applyFilter
                ? this.state.filteredBySearch.map(filteredStudent => (
                  <Col key={filteredStudent.basics.name} sm="6" md="4" lg="3">
                    <SmallCard {...filteredStudent} />
                  </Col>
                ))
                : this.state.studentsInfo.map(studentInfo => (
                  <Col key={studentInfo.basics.name} sm="6" md="4" lg="3">
                    <SmallCard {...studentInfo} />
                  </Col>
                ))}
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
