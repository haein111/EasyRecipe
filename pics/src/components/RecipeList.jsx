import "./RecipeList.css";
import RecipeCard from "./RecipeCard";

function RecipeList({ images }) {
  const renderedImage = images.map((image) => {
    return <RecipeCard key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImage}</div>;
}

export default RecipeList;
