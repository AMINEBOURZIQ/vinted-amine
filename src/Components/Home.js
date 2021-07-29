import Hero from "./Hero";
import banner from "../images/banner.jpeg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import OfferMini from "./OfferMini";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      {/* ici banner */}
      <div className="banner">
        <img src={banner} alt="" />
        <div className="message">
          <h1>Prêts à faire du tri dans vo placards ?</h1>
          <button className="sell">Vends maintenant</button>
          <div>
            <Link to="/">Découvrir comment ça marche</Link>
          </div>
        </div>
      </div>
      <div>ici les offers</div>
    </div>
  );
};

export default Home;
