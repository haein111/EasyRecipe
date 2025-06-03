import "./SearchBar.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormClick = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = () => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={handleFormClick}>
        <label className="search-label">Enter Term</label>
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            className="search-input"
            value={term}
            onChange={handleChange}
            placeholder="Search your recipe..."
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
