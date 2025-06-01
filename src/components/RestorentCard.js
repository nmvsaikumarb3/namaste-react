import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const styleCard = {
  background: "#f0f0f0",
  padding: "10px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "300px",
  margin: "10px",
};

RestaurantCard = (props) => {
  const { resData } = props;

  if (!resData) {
    return <div>Loading...</div>;
  }

  const {
    id,
    name,
    description,
    cloudinaryImageId,
    locality,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
    sla: { deliveryTime } = {},
    badges: { imageBadges } = {},
  } = resData;

  return (
    <Link key={name} to={"/restorent/" + id}>
      <div className="m-2 p-2 w-50 rounded-lg hover:bg-gray-400">
        <img
          className="res-logo rounded-lg w-40 h-40 object-cover"
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt="food"
        />
        <div className="p-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <h4>{description}</h4>
          <h4>Locality: {locality}</h4>
          <h4>Area: {areaName}</h4>
          <h4>Cost for Two: {costForTwo}</h4>
          <h4>Cuisines: {cuisines.join(", ")}</h4>
          <h4>Average Rating: {avgRating}</h4>
          <h4>Delivery Time: {deliveryTime} mins</h4>
          <div>
            {imageBadges?.map((badge, index) => (
              <img
                key={index}
                src={`${badge.imageId}`}
                alt={badge.description}
                title={badge.description}
                className="w-5 mr-1"
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const withPromotedLabel = (RestaurantCard) =>{
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard />
      </div>
    );
  };
}

export default RestaurantCard;