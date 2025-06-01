import { useState, useEffect } from "react";
import { CardMenuLink } from "../utils/constants";

const useRestraunMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${CardMenuLink}/${resId}`);
      const data = await response.json();
      setResInfo(data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return resInfo;
};

export default useRestraunMenu;