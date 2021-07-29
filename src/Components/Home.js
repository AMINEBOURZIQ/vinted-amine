import Hero from "./Hero";
import banner from "../images/banner.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import OfferMini from "./OfferMini";

const Home = () => {
  const [offers, setOffers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers?page=1&limit=6"
        );
        console.log(response.data.offers);
        setOffers(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <span>Loading Data</span>
      ) : (
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
          <div className="offers">
            {offers.map((offer, index) => {
              console.log(offer._id);
              return <OfferMini key={offer._id} offer={offer}></OfferMini>;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
