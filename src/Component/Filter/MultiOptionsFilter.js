import React from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

export default class MultiOptionsFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        { label: 'JavaScript', value: 1 },
        { label: 'React', value: 2 },
      ],
      selected: []
    }
  }
  render() {
    return (
      <div>
        <ReactMultiSelectCheckboxes options={this.state.options} />
        {/* <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}
      </div>
    )
  }
}
