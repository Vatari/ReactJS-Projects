import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { query, setQuery } = useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Search movies</h2>
    </form>
  );
};

export default SearchForm;
