import SearchImages from "../api/searchApi";
import RecipeList from "./RecipeList";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SearchResult() {
  const [result, setResult] = useState([]);

  const location = useLocation();
  console.log(location);
  const term = new URLSearchParams(location.search).get("q");
  useEffect(() => {
    const fetchData = async () => {
      const results = await SearchImages(term);
      setResult(results);
    };

    fetchData();
  }, [term]);

  return <RecipeList images={result} />;
}

export default SearchResult;
