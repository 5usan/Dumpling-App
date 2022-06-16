import React from 'react';
import SearchBar from '../component/SearchBar';
import ScreenWrapper from '../containers/ScreenWrapper';

const Search = () => {
  return (
    <ScreenWrapper>
      <SearchBar
        placeholder={'Search by name, category here...'}
        value={''}
        valueSet={() => null}
      />
    </ScreenWrapper>
  );
};

export default Search;
