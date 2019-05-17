<<<<<<< HEAD
import React, { Component } from "react";
import Fuse from "fuse.js";
import SmallCard from "./Component/CardGallery/SmallCard";
import "./Home.css";
import Header from "./Component/Header/Header";
import CardDeck from "./Component/CardGallery/CardDeck";
import Footer from "./Component/Footer/Footer";
import BigCard from "../src/Component/CardGallery/BigCard";
=======
import React, { Component } from 'react';
import Fuse from 'fuse.js';
import SmallCard from './Component/CardGallery/SmallCard';
import './Home.css';
import Header from './Component/Header/Header';
import CardDeck from './Component/CardGallery/CardDeck';
import Footer from './Component/Footer/Footer';
import { Col, Row, Container } from 'reactstrap';
>>>>>>> d0d52a3ec7e3131e19a48d9bcde722c97bb8409a

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentsInfo: [], // initial fetched student list
      search: "", // will be updated when user type according to searchChange()
      filteredBySearch: [], // will be updated by searchChange() & searchClick()
      typed: false // to display filteredBySearch after fetching api
    };

    this.searchClick = this.searchClick.bind(this);
    this.searchChange = this.searchChange.bind(this);
  }

  componentDidMount() {
    console.log("[Home] ComponientDidMount");
    fetch("https://api-resume.herokuapp.com/api/v1/resume")
      .then(response => response.json())
      .then(data =>
        this.setState({
          studentsInfo: data
        })
      )
<<<<<<< HEAD
      .catch(() => alert("error api"));
    // test for getting unique value
    console.log("studentsInfo : ", this.state.studentsInfo.map(elem => elem));
    const uniqueCountry = [
      ...new Set(this.state.studentsInfo.map(item => item.basics.location.country))
    ];
    console.log("unique country : ", uniqueCountry);
  }

  searchClick(e) {
    console.log("input is : ", this.state.search);
=======
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
>>>>>>> d0d52a3ec7e3131e19a48d9bcde722c97bb8409a

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
<<<<<<< HEAD
        "basics.name",
        "basics.email",
        "basics.website",
        "basics.summary",
        "basics.location.country",
        "basics.profiles.network",
        "basics.profiles.username",
        "basics.profiles.url",
        "projects.title",
        "projects.date",
        "projects.summary",
        "projects.technologies",
        "favorite_programming_languages",
        "interests.name",
        "interests.keywords"
=======
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
>>>>>>> d0d52a3ec7e3131e19a48d9bcde722c97bb8409a
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
<<<<<<< HEAD
        "basics.name",
        "basics.email",
        "basics.website",
        "basics.summary",
        "basics.location.country",
        "basics.profiles.network",
        "basics.profiles.username",
        "basics.profiles.url",
        "projects.title",
        "projects.date",
        "projects.summary",
        "projects.technologies",
        "favorite_programming_languages",
        "interests.name",
        "interests.keywords"
=======
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
>>>>>>> d0d52a3ec7e3131e19a48d9bcde722c97bb8409a
      ]
    };
    let fuse = new Fuse(this.state.studentsInfo, options);

    this.setState({
      search: e.target.value, // update search value while user typing
<<<<<<< HEAD
      typed: e.target.value === "" ? false : true, // if input is empty show initial student list otherwise sho filtered list
=======
      typed: e.target.value === '' ? false : true, // if input is empty show initial student list otherwise sho filtered list
>>>>>>> d0d52a3ec7e3131e19a48d9bcde722c97bb8409a
      filteredBySearch: fuse.search(this.state.search) // update filtered list
    });
    console.log(e.target.value);
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
        <h1 className="home">Discover the profiles of our Fullstack Junior Developers</h1>
<<<<<<< HEAD
        <SmallCard />
        <CardDeck>
          {typed
            ? this.state.filteredBySearch.map(filteredStudent => <SmallCard {...filteredStudent} />)
            : this.state.studentsInfo.map(studentInfo => <SmallCard {...studentInfo} />)}
        </CardDeck>
=======
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
>>>>>>> d0d52a3ec7e3131e19a48d9bcde722c97bb8409a
        <Footer />
      </div>
    );
  }
}

export default Home;
