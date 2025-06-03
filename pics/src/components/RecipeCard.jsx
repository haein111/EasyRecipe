import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

// Function to extract all tags from the recipe information
const TAG_DEFINITIONS = [
  { key: "vegetarian", label: "Vegetarian" },
  { key: "vegan", label: "Vegan" },
  { key: "glutenFree", label: "Gluten-Free" },
  { key: "dairyFree", label: "Dairy-Free" },
  { key: "veryHealthy", label: "Healthy" },
  { key: "veryPopular", label: "Popular" },
  { key: "cheap", label: "Budget" },
  { key: "sustainable", label: "Sustainable" },
];

const extractTags = (info) =>
  TAG_DEFINITIONS.filter((tag) => info[tag.key]).map((tag) => tag.label);

// RecipeCard component to display individual recipe information
function RecipeCard({ image }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/${image.id}/information?apiKey=640d900621054d9282345c026bdf3090`
        );
        const data = await res.json();
        setTags(extractTags(data));
      } catch (err) {
        console.error("태그 가져오기 실패", err);
      }
    };

    fetchTags();
  }, [image.id]);

  return (
    <Link to={`/recipe/${image.id}`} className="image-link">
      <div className="image-show">
        <img className="image-img" src={image.image} alt={image.title} />
        <h3 className="image-title">{image.title}</h3>
        <div className="image-tags">
          {tags.map((tag) => (
            <span className="image-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
