import React, { Component } from 'react';
import BigCard from './Component/CardGallery/BigCard';
import SearchBar from './Component/Header/SearchBar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentsInfo: [],
      search: '',
      filteredBySearch: [],
      typed: false
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
      console.log('studentsInfo : ', this.state.studentsInfo.map(elem => console.log(elem)))
  }

  searchClick(e){
    console.log('input is : ',this.state.search);
    this.setState({ filteredBySearch: this.state.studentsInfo
      .filter(elem => {return elem.basics.name.toLowerCase().includes(this.state.search.toLowerCase()) || 
      elem.basics.email.toLowerCase().includes(this.state.search.toLowerCase())  ||
      // elem.basics.website.toLowerCase().includes(this.state.search.toLowerCase()) ||
      elem.basics.summary.toLowerCase().includes(this.state.search.toLowerCase()) ||
      elem.basics.location.country.toLowerCase().includes(this.state.search.toLowerCase()) ||
      elem.basics.profiles[0].username.toLowerCase().includes(this.state.search.toLowerCase()) ||
      elem.basics.profiles[0].url.toLowerCase().includes(this.state.search.toLowerCase()) ||
      elem.basics.profiles[1].username.toLowerCase().includes(this.state.search.toLowerCase()) ||
      elem.basics.profiles[1].url.toLowerCase().includes(this.state.search.toLowerCase()) ||
      elem.projects[0].title.toLowerCase().includes(this.state.search.toLowerCase()) ||
      elem.projects[0].summary.toLowerCase().includes(this.state.search.toLowerCase()) //||
      // elem.projects[0].technologies.map(tech=>tech.toLowerCase().includes(this.state.search.toLowerCase()) //||
      // elem.projects.toLowerCase().includes(this.state.search.toLowerCase())
    }
      )})
  }
  // SOF
  // const devReact = devs.filter(obj => obj.tech.includes("React"))
  // .map(obj => ({"name":obj.name, "tech":obj.tech}));

  // result = array.filter(a => a.users.some(u => u.tags.some(t => t.tag.includes(tag))));

  // const devReact = devs.reduce((acc, ele) =>  ele.tech.includes("React") ? acc.concat({"name": ele.name, "tech":ele.tech}): acc ,[]);
  
  searchChange(e){
    this.setState({ search: e.target.value,
      typed: true
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
