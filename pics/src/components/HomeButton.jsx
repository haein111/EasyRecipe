import { useNavigate } from "react-router-dom";
import { FiHome } from "react-icons/fi";
// import "./HomeButton.css";

function HomeButton() {
  const navigate = useNavigate();

  return (
    <button className="home-button" onClick={() => navigate("/")}>
      <FiHome size={30} />
    </button>
  );
}

export default HomeButton;
