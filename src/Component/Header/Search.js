import React from 'react';
import { InputGroup, Input } from 'reactstrap';

const Search = ({searchfield, onClick}) => {

    return (
    <div>
        <InputGroup>
            <Input type="search" placeholder="username" />
        </InputGroup>
    </div>
    );
}
export default Search;