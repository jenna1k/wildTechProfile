import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export default class FilterProgrammingLanguages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: props.filter,
      selected: null
    };
    // props.filter

    this.setFilter = this.setFilter.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (state.skills != props.filter) {
      return {
        skills: props.filter
      };
    }
  }

  componentDidMount() {
    //to do:
  }

  setFilter(e) {
    const result = e.target.value.toLowerCase();

    this.setState({
      selected: result
    });

    this.props.filterBy('programmingSkills', result);
  }

  render() {
    return (
      <div className="select-filter">
        <FormGroup>
          <Label for="select-filter">Programming Language:</Label>
          <Input type="select" name="select" id="select-filter" onChange={this.setFilter}>
            <option key="any">Any</option>
            {this.state.skills.map(skill => (
              <option key={skill.toLowerCase()}>{skill}</option>
            ))}
          </Input>
        </FormGroup>
      </div>
    );
  }
}
