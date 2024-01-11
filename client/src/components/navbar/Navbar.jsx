import "./navbar.scss";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ArrowDropDown } from "@mui/icons-material";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };

  console.log("offset", isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <div className="logoContainer">
            <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" />
          </div>
          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My list </span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>KID</span>
          <NotificationsIcon className="icon" />
          <img
            src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png"
            alt="profileImage"
          />
          <div className="profile">
            {" "}
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Setings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
