import { LOGO } from "../utils/constants";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [btmName,setBtmName] = useState("Login");
  const isOnline = useOnlineStatus(); // Move this hook call to the top
  const cart = useSelector((store)=> store.cart.item);
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <div>
          <img
            className="w-56"
            src = {LOGO}
            alt="logo" 
          />
        </div>
        <div className="flex items-center ">
          <ul className="flex p-4 m-4 ">
            <li className="px-2"><Link >Online status: {isOnline ? '✅' : '❌'}</Link></li>
            <li className="px-2"><Link to="/">Home</Link></li>
            <li className="px-2"><Link to="/about">About Us</Link></li>
            <li className="px-2"><Link to="/contact">Contact Us</Link></li>
            <li className="px-2"><Link to="/grocery">Grocery</Link></li>
            <li className="px-2 font-bold text-xl">Cart (0 items)</li>
            <button className="login" onClick={()=>btmName === "Login" ?setBtmName("Logout"): setBtmName("Login")}>{btmName }</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;