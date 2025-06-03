import axios from "axios";

const SearchImages = async (term) => {
  const response = await axios.get(
    "https://api.spoonacular.com/recipes/complexSearch",
    {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        query: term,
        apiKey: "640d900621054d9282345c026bdf3090",
      },
    }
  );

  return response.data.results;
};

export default SearchImages;
