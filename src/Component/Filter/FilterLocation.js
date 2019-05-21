import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class FilterLocation extends React.Component {
  constructor(props) {
    super(props);

    this.setCountry = this.setCountry.bind(this);

    this.state = {
      countries: [],
      selected: ""
    }
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => {
        this.setState({
          countries: data.map(country => country.name)
        })
      })
      .catch(error => console.log(error));
  }

  setCountry(e) {
    this.setState({
      selected: e.currentTarget.value
    });

    if (this.props.filterByLocation != null) {
      this.props.filterByLocation(e.target.value);
    }
  }

  render() {
    return (
      <div className="select-country">
        <FormGroup>
          <Label for="select-country">Location:</Label>
          <Input
            type="select"
            name="select"
            id="select-country"
            onChange={this.setCountry}>
            <option key="any">Any</option>
            {this.state.countries.map(country => (
              <option key={country.toLowerCase()}>{country}</option>
            ))}
          </Input>
        </FormGroup>
      </div>
    )
  }
}