import React from 'react';
import { Input, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap';

const SearchBar = ({ searchClick, searchChange }) => {
  return (
    <div>
      {/* <Input type="search" placeholder="search" onChange={searchChange}/>
        <Button onClick={searchClick}> Go </Button>
        
        JENNA, 
        I HOPE i DID NOT BREAK ANYTHING, TELL ME TOMORROW
        ;D
        CAMILLE */}

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
