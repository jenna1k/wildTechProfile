import React, { Component } from 'react';
import BigCard from './Component/CardGallery/BigCard';
import SearchBar from './Component/Header/SearchBar';
import Fuse from 'fuse.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentsInfo: [], // initial fetched student list
      search: '', // will be updated when user type according to searchChange()
      filteredBySearch: [], // will be updated by searchChange() & searchClick()
      typed: false  // to display filteredBySearch after fetching api
    };

    this.searchClick = this.searchClick.bind(this);
    this.searchChange = this.searchChange.bind(this);
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
      // test for getting unique value
      console.log('studentsInfo : ', this.state.studentsInfo.map(elem => elem))
      const uniqueCountry = [...new Set(this.state.studentsInfo.map(item => item.basics.location.country))];
      console.log('unique country : ', uniqueCountry)
  }

  searchClick(e){
    console.log('input is : ',this.state.search);
    
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
      keys: ['basics.name', 'basics.email', 'basics.website', 'basics.summary', 'basics.location.country',
      'basics.profiles.network', 'basics.profiles.username', 'basics.profiles.url',
      'projects.title', 'projects.date', 'projects.summary', 'projects.technologies',
      'favorite_programming_languages', 'interests.name', 'interests.keywords'],
    };
    let fuse = new Fuse(this.state.studentsInfo, options)    
    console.log(fuse.search(this.state.search));

    this.setState({ filteredBySearch : fuse.search(this.state.search) // update filtered list
    })

    console.log(this.state.filteredBySearch)

  }
  
  searchChange(e){
    let options = {
      tokenize: true,
      matchAllTokens: true,
      findAllMatches: true,
      threshold: 0, // 0 for exact match
      location: 0,
      distance: 0,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['basics.name', 'basics.email', 'basics.website', 'basics.summary', 'basics.location.country',
      'basics.profiles.network', 'basics.profiles.username', 'basics.profiles.url',
      'projects.title', 'projects.date', 'projects.summary', 'projects.technologies',
      'favorite_programming_languages', 'interests.name', 'interests.keywords'],
    };
    let fuse = new Fuse(this.state.studentsInfo, options)

    this.setState({ search: e.target.value, // update search value while user typing
      typed: e.target.value === '' ? false : true,  // if input is empty show initial student list otherwise sho filtered list
      filteredBySearch : fuse.search(this.state.search) // update filtered list
    });
    console.log(e.target.value);
  }

  render() {
    const typed = this.state.typed;
    return (
      <div>
        <h1>Discover the profiles of our Fullstack Junior Developers</h1>
        <SearchBar search={this.state.search} searchClick={this.searchClick} searchChange={this.searchChange}/>
        <h2>
          {typed ?
            this.state.filteredBySearch.map(filteredStudent => (
            <BigCard {...filteredStudent} />))
        : this.state.studentsInfo.map(studentInfo => (
          <BigCard {...studentInfo} />))
        }
        </h2>
      </div>
    );
  }
}

export default Home;
