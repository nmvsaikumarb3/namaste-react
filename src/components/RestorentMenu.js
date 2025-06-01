
import React, { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCardMenu from "./RestaurantCardMenu";
import { useParams } from "react-router-dom";
import useRestraunMenu from "../components/useRestraunMenu";

const RestorentMenu = () => {
  const { id } = useParams(); // Retrieve 'id' first
  const resInfo = useRestraunMenu(id); // Then use 'id' here

  const [activeTab, setActiveTab] = useState(0);

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);

  const { text, headerStyling } = resInfo?.cards[0].card.card;
  const { tabs } = resInfo.cards[1].card.card;
  const RestorentMenu = resInfo?.cards[2].card.card.info;
  const OtherRestorentMenu = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

  return (
    <div className="restorent-menu">
      <div
        className="title"
        style={{
          color: headerStyling.textColor,
          fontVariant: headerStyling.textVariant,
        }}
      >
        <h1>{text}</h1>
      </div>
      <div className="tab-list">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`styled-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {activeTab === 0 && <RestaurantCardMenu restaurant={RestorentMenu} OtherRestorentMenu={OtherRestorentMenu} />}
        {activeTab === 1 && <div>Content for the second tab</div>}
        {/* Add more tab content as needed */}
      </div>
    </div>
  );
};

export default RestorentMenu;
