import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"; //rappel

const Offer = ({ userToken }) => {
  const { id } = useParams();
  // console.log(id);
  const [offer, setOffer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        console.log(id);
        setOffer(response.data);
        setIsLoading(false);
        console.log("ici");
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  console.log(offer);
  return (
    <div>
      {userToken ? (
        <div>
          {isLoading ? (
            <span>Data is Loading</span>
          ) : (
            <div>
              <h1>{offer.owner.account.username}</h1>
              <p>{offer.product_description}</p>
              <img src={offer.product_image.secure_url} alt="" />
            </div>
          )}
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Offer;
