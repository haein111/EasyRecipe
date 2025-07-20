import SearchImages from "../api/searchApi";
import RecipeList from "./RecipeList";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchResult.css";

function SearchResult() {
  const [result, setResult] = useState([]);

  const location = useLocation();

  const term = new URLSearchParams(location.search).get("q");
  useEffect(() => {
    const fetchData = async () => {
      const results = await SearchImages(term);
      setResult(results);
    };

    fetchData();
  }, [term]);

  return (
    <>
      <div className="search-result-keyword">Your recipe: {term}</div>
      <RecipeList images={result} />
    </>
  );
}

export default SearchResult;
