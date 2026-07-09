const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, costForTwo, avgRating, cuisine, image } = resData?.data;
  return (
    <div className="res-card">
      <img src={image} alt="restaurant-image" className="res-img" />
      <h4 className="res-name">{name}</h4>
      <div>Rs. {costForTwo}</div>
      <div>{avgRating} Star</div>
      <div>{cuisine}</div>
    </div>
  );
};

export default RestaurantCard;
