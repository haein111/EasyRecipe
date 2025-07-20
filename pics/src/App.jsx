import React from "react";
import SearchImages from "./api/searchApi";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import { useState } from "react";
import Recipe from "./components/Recipe";
import { Routes, Route } from "react-router-dom";
import SearchResult from "./components/SearchResult";
import HomeButton from "./components/HomeButton.jsx";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await SearchImages(term);

    setImages(result);
  };

  return (
    <div>
      <HomeButton />
      <Routes>
        <Route path="/" element={<SearchBar onSubmit={handleSubmit} />} />
        <Route
          path="/search"
          element={
            <div>
              <SearchResult />
              {/* <RecipeList images={images} /> */}
            </div>
          }
        />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
