import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Offer = ({ userToken }) => {
  const { id } = useParams();
  // console.log(id);
  const [offer, setOffer] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(id);
        setOffer(response.data);
        setIsLoading(false);
        // console.log("ici");
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);
  // console.log(offer);
  return (
    <div>
      {isLoading ? (
        <span>Data is Loading</span>
      ) : (
        <div>
          <h1>{offer.owner.account.username}</h1>
          <p>{offer.product_description}</p>
          <img src={offer.product_image.secure_url} alt="" />
          <ul>
            {offer.product_details.map((article, index) => {
              const keys = Object.keys(article);
              return (
                <li key={index}>
                  <span>{keys[0]} : </span>
                  <span>{article[keys[0]]}</span>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => {
              if (userToken) {
                history.push("/payment", {
                  sellerId: offer.owner._id,
                  title: offer.product_name,
                  price: offer.product_price,
                  buyerToken: userToken,
                });
              } else {
                history.push("/login");
              }
            }}
          >
            Acheter
          </button>
        </div>
      )}
    </div>
  );
};

export default Offer;
