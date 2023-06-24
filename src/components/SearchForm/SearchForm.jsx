import PropTypes from "prop-types";
import { useState } from "react";
import { StyledSearchForm } from "./StyledSearchForm";


export default function SearchForm({ onSubmit }) {
    const [searchValue, setSearchValue] = useState('');
    const [isSearchButtonDisable, setIsSearchButtonDisable] = useState(true);

    const heandleChange = e => {
      setIsSearchButtonDisable(false);
      if (!e.target.value.trim()) {
        setIsSearchButtonDisable(true);
      }

      setSearchValue(e.target.value);
    };

    const heandleSubmit = e => {
      e.preventDefault();
      onSubmit(searchValue);
      setSearchValue('');
      setIsSearchButtonDisable(true);
    };

    return (
      <StyledSearchForm onSubmit={heandleSubmit}>
        <input type="text" placeholder="Type your favourite film" value={searchValue} onChange={heandleChange} />
        <button type="submit" disabled={isSearchButtonDisable}>
          Search Movies
        </button>
      </StyledSearchForm>
    );
  }

  SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };