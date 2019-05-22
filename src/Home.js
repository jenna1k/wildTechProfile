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
    console.log('[Home] ComponientDidMount');
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
      keys: ['favorite_programming_languages']
    };
    let fuse = new Fuse(this.state.studentsInfo, options);
    console.log(fuse.search(this.state.search));

    this.setState({
      filteredBySearch: fuse.search(this.state.search) // update filtered list
    });

    console.log(this.state.filteredBySearch);
  }

  searchChange(e) {
    // debugger
    // console.log(e.target)
    // return
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
    console.log(e.target.value);

    // let options1  ={
    //   keys: ['projects.technologies']
    // };
    // let fuse1 = new Fuse(this.state.studentsInfo, options1)

    // console.log("tech",fuse1.search('material ui'))
  }

  filterBy(filterName = 'programmingSkills', value = 'any') {
    switch (filterName) {
      case 'programmingSkills':
        //to do:
        console.log('filter:programmingSkills', value);
        this.createDeckHandler(value);
        break;

      default:
        break;
    }
  }

  createDeckHandler(searchValue) {
    console.log('filter:createDeckHandler', searchValue);
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
    console.log(fuse.search(searchValue));

    this.setState({
      filteredBySearch: fuse.search(searchValue),
      applyFilter: true
    });
  }

  render() {
    const listSkills = this.state.listProgrammingSkills;

    console.log('render...');
    const applyFilter = this.state.applyFilter;
    const locationOptions = {
      keys: ['basics.location.country']
    };
    const locationFuse = new Fuse(this.state.studentsInfo, locationOptions);
    console.log('locationFuse', locationFuse);
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
                    <Col>
                      <SmallCard {...filteredStudent} />
                    </Col>
                  ))
                : this.state.studentsInfo.map(studentInfo => (
                    <Col>
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
