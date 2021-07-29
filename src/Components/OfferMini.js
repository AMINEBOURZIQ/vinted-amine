const OfferMini = ({ offer }) => {
  return (
    <div className="offermini">
      {}
      <h2>{offer.owner.account.username}</h2>
      <img src={offer.product_image.secure_url} alt="" />
    </div>
  );
};

export default OfferMini;
