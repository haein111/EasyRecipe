import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GetRecipeDetails from "../api/recipeApi";
import "./Recipe.css";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await GetRecipeDetails(id);
      setRecipe(data);
      console.log("Recipe ID:", id);
    };
    fetchDetails();
  }, [id]);

  return (
    <div className="recipe-page">
      <button className="home-button" onClick={() => navigate("/")}>
        Home
      </button>
      <h1 className="recipe-title">{recipe.title}</h1>
      <img className="recipe-image" src={recipe.image} alt={recipe.title} />
      <div className="recipe-content">
        <div className="ready-time">
          Ready in {recipe.readyInMinutes} minute
        </div>
        <div className="recipe-servings">servings : {recipe.servings}</div>
        {/* <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />   */}
        {recipe.extendedIngredients && (
          <div className="recipe-ingredient">
            <h3>Ingredients</h3>
            <ul>
              {recipe.extendedIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient.original}</li>
              ))}
            </ul>
          </div>
        )}
        {recipe.analyzedInstructions &&
          recipe.analyzedInstructions.length > 0 && (
            <div className="recipe-instructions">
              <h3>Instructions</h3>
              {recipe.analyzedInstructions.map((instructionSet, i) => (
                <div key={i} className="instruction-set">
                  {instructionSet.name && <h4>{instructionSet.name}</h4>}
                  {instructionSet.steps.map((step, j) => (
                    <div key={j} className="instruction-step">
                      <strong>Step {step.number}:</strong> {step.step}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}

export default Recipe;
