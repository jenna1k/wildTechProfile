import React from 'react';
import { Input, Button } from 'reactstrap';

const SearchBar = ({search, searchClick, searchChange}) => {
  return (
    <div>
        <Input type="search" placeholder="search" onChange={searchChange}/>
        <Button onClick={searchClick}> Go </Button>
    </div>
  );
}

export default SearchBar;