import "./SearchBar.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleFormClick = (event) => {
    event.preventDefault();
    onSubmit(term);
    navigate(`/search?q=${term}`);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={handleFormClick}>
        <label className="search-label">
          <span>Search for your </span>
          <span style={{ color: "#FF8107" }}>recipe</span>
        </label>
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
