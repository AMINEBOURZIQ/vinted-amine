import { Link } from "react-router-dom";
const OfferMini = ({ offer }) => {
  //   console.log(offer._id);
  return (
    <Link to={`/offer/${offer._id}`} className="offermini">
      <div>
        <h2>{offer.owner.account.username}</h2>
        <img src={offer.product_image.secure_url} alt="" />
      </div>
    </Link>
  );
};

export default OfferMini;
