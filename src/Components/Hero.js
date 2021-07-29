import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <img src={logo} alt="" />
        <input type="text" placeholder="Recherche des articles" />
        <button>
          <Link to="/signup">s'inscrire</Link>
        </button>
        <button>se connecter</button>
        <button className="sell">vends des articles</button>
      </div>
    </div>
  );
};

export default Hero;
