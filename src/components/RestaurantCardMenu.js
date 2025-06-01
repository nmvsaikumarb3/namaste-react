
const styleCard = {
  background: "#f0f0f0",
  padding: "10px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  maxWidth: "300px",
  margin: "10px",
};

const RestaurantCardMenu = ({ restaurant, OtherRestorentMenu }) => {
  const {
    name,
    locality,
    areaName,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    aggregatedDiscountInfo,
    labels,
  } = restaurant;

  const otherResto = OtherRestorentMenu?.[4]?.card?.card?.itemCards || [];


  return (
    <>
      <div className="res-card" style={styleCard}>
        <div className="restaurant-card">
          <h2 className="restaurant-name">{name}</h2>
          <p className="restaurant-location">{`${locality}, ${areaName}`}</p>
          <p className="restaurant-cost">{costForTwoMessage}</p>
          <p className="restaurant-rating">
            {`Rating: ${avgRatingString} (${totalRatingsString})`}
          </p>
          {aggregatedDiscountInfo && (
            <p className="restaurant-discount">
              {aggregatedDiscountInfo.header}
            </p>
          )}
          <div className="restaurant-labels">
            {labels.map((label, index) => (
              <div key={index} className="label">
                <strong>{label.title}:</strong> {label.message}
              </div>
            ))}
          </div>
        </div>
      </div>
      {otherResto.map((i) => (
        <div className="other-resto-card" style={styleCard} key={i.card.info.id}>
          <img src={`https://example.com/${i.card.info.imageId}`} alt={i.card.info.name} style={{ width: '100%', borderRadius: '8px' }} />
          <h3>{i.card.info.name}</h3>
          <p>{i.card.info.description}</p>
          <p>Category: {i.card.info.category}</p>
          <p>Price: {i.card.info.price / 100}</p>
          <p>Default Price: {i.card.info.defaultPrice / 100}</p>
          <p>Rating: {i.card.info.ratings?.aggregatedRating?.rating || 'N/A'} ({i.card.info.ratings?.aggregatedRating?.ratingCount || '0'} ratings)</p>
        </div>
      ))}
    </>
  );
};

export default RestaurantCardMenu;
