import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeButtonStyle = styled.button({
  backgroundColor: "#0D0D0D",
  color: "#ffffff",
  padding: "12px",
  margin: "24px 24px 24px 50px",
  border: "none",
  borderRadius: "20px",

  "&:hover": {
    backgroundColor: "#FF8107",
    cursor: "pointer",
  },
});

function HomeButton() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "left" }}>
      <HomeButtonStyle className="home-button" onClick={() => navigate("/")}>
        Home
      </HomeButtonStyle>
    </div>
  );
}

export default HomeButton;
