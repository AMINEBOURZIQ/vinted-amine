import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ price, title, sellerId, buyerToken }) => {
  const stripe = useStripe();
  const elements = useElements();
  const buyerProtection = (price * 10) / 100;
  const shipping = (price * 20) / 100;
  const total = buyerProtection + shipping;
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElements = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, {
        Seller: sellerId,
        Buyer: buyerToken,
      });
      console.log(stripeResponse);
      const response = await axios.post("https://vintedback.herokuapp.com/payment", {
        stripeToken: stripeResponse.token.id,
        price: price,
      });
      if (response.statusText === "OK") {
        alert("paiement réussi");
      } else {
        alert("problème lors du paiement");
      }
    } catch (error) {
            console.log(error.response.data.message); // au lieu de error.message

    }
  };
  return (
    <div className="checkform">
      <div className="descPayment">
        <span>Commande</span> <span>{`${price}€`}</span>
      </div>
      <div className="descPayment">
        <span>Frais protection acheteurs</span>
        <span>{`${buyerProtection}€`}</span>
      </div>
      <div className="descPayment">
        <span>Frais de port</span>
        <span>{`${shipping}€`}</span>
      </div>
      <div className="descPayment">
        <span>Total</span>
        <span>{`${total}€`}</span>
      </div>
      <div className="descPayment">
        <span>{`Il ne vous reste plus qu'un étape pour vous offrir ${title.toFixed(2)}. Vous allez payer ${total} € (frais de protection et frais de port inclus).
`}</span>
      </div>

      <form onSubmit={handleSubmit}>
        <CardElement />
        <input type="submit" value="Payer" />
      </form>
    </div>
  );
};

export default CheckoutForm;
