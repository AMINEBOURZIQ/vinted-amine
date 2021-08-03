import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Components/CheckoutForm";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  // console.log(location.state);
  const { price, title, sellerId, buyerToken } = location.state;
  const stripePromise = loadStripe(
    "pk_test_51JKOanDA2H7n1gl1nGhgzGGoe0xx8mCHtzGkDZEQOp7IZslpriW0xIQouxn8mcKKv87QykwQttSJBWf7gqkeYOsl006gn3Fep6"
  );

  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          price={price}
          title={title}
          sellerId={sellerId}
          buyerToken={buyerToken}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
