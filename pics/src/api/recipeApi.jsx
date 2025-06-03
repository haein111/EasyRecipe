import axios from "axios";

const GetRecipeDetails = async (id) => {
  try {
    if (!id) throw new Error("Recipe ID is missing");

    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          apiKey: "640d900621054d9282345c026bdf3090",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching recipe details:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default GetRecipeDetails;
