import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ searchFor }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          name="searchTerm"
          placeholder="Enter Search Term..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
