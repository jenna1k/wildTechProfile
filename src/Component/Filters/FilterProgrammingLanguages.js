import React from 'react';
import { FormGroup, FormText, Input } from 'reactstrap';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

export default class FilterProgrammingLanguages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: props.filter,
      selected: []
    };
    // props.filter

    this.setFilter = this.setFilter.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (state.skills !== props.filter) {
      return {
        skills: props.filter
      };
    }
  }

  componentDidMount() {
    //to do:
  }

  setFilter(e) {
    this.setState({
      selected: e
    });

    // this.props.filterBy('programmingSkills', options);
  }

  render() {
    const options = [];
    this.state.skills.forEach(function (skill) {
      options.push({ label: skill, value: skill });
    });
    return (
      <div className="select-filter">
        {/* <FormGroup>
          <Input type="select" name="select" id="select-filter" onChange={this.setFilter}>
            <option key="any">Any</option>
            {this.state.skills.map(skill => (
              <option key={skill.toLowerCase()}>{skill}</option>
            ))}
          </Input>
          <FormText>Programming Language</FormText>
        </FormGroup> */}
        <ReactMultiSelectCheckboxes options={options} onClick={this.setFilter} />
      </div>
    );
  }
}
