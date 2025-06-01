import React, { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestorentCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const isOnline = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const data = await response.json();

    setListOfRestaurants(data.data.cards);
    setFilteredRestaurants(data.data.cards);
  };

  if (!isOnline) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 p-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filtered = listOfRestaurants?.filter((res) =>
                res.card.card.title
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="search flex m-4 p-4 items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filtered = listOfRestaurants.filter(
                (i) => i.card.card.avgRating > 4
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {/* <div className="search flex m-4 p-4 items-center">
        <label>UserName :</label>
        <input
          type="text"
          className="border border-black p-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div> */}
      <div className="restaurant-list flex flex-wrap justify-between">
        {filteredRestaurants?.map(
          (restaurant) =>
            restaurant.card.card.info && (
              <div
                className="flex-1 min-w-[300px] max-w-[400px] m-2"
                key={restaurant.card.card.info.id}
              >
                <RestaurantCard resData={restaurant.card.card.info} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Body;
