import Hero from "./Hero";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";

const Offer = (props) => {
  const { id } = useParams();
  console.log(id);
  const [offer, setOffer] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);
        setOffer(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  //   console.log(id);
  return (
    <div>
      {isLoading ? (
        <span>Data is Loading</span>
      ) : (
        <div>
          <Hero></Hero>
          <h1>{offer._id}</h1>
        </div>
      )}
    </div>
  );
};

export default Offer;
