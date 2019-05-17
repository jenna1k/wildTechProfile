import React from 'react';
import { Input, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap';

const SearchBar = ({ search, searchClick, searchChange }) => {
  return (
    <div>
      {/* <Input type="search" placeholder="search" onChange={searchChange}/>
        <Button onClick={searchClick}> Go </Button> */}

      <InputGroup>
        <Input type="search" placeholder="search" onChange={searchChange} />
        <InputGroupAddon addonType="append" onClick={searchClick}>
          <InputGroupText>Go</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
