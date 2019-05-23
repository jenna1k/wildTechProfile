import React from 'react';
import { FormGroup, FormText, Input } from 'reactstrap';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

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
    if (state.skills !== props.filter) {
      return {
        skills: props.filter
      };
    }
  }
// <ReactMultiSelectCheckboxes options={options} />
  componentDidMount() {
    //to do:
  }

  setFilter(options) {

    this.setState({
      selected: options
    });

    this.props.filterBy('programmingSkills', options);
  }

  render() {
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
        <ReactMultiSelectCheckboxes options={this.state.skills } onChange={this.setFilter} />
      </div>
    );
  }
}
