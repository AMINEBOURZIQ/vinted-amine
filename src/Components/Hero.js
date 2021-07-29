import logo from "../images/logo.png";
const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <img src={logo} alt="" />
        <input type="text" placeholder="Recherche des articles" />
        <button>s'inscrire</button>
        <button>se connecter</button>
        <button className="sell">vends des articles</button>
      </div>
    </div>
  );
};

export default Hero;
