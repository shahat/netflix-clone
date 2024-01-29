import React from "react";
import "./user.scss";
import { MdOutlinePermIdentity } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import { FcPhoneAndroid } from "react-icons/fc";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";
import { MdOutlinePublish } from "react-icons/md";
import { Link } from "react-router-dom";
export default function User() {
  return (
    <div className="user">
      {/* ========== Add User =========== */}
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton"><Link to="/newUser" className="link" >Create</Link></button>
      </div>
      {/* ==========  User container =========== */}

      <div className="userContainer">
        {/* ==========  User Show =========== */}
        <section className="userShow">
          <div className="userShowTop">
            <img
              loading="lazy"
              src="https://assets.rbl.ms/25582750/origin.jpg"
              alt="userShow Image "
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername"> Mohamed Elshahat</span>
              <span className="userShowUserTitle"> Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <MdOutlinePermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99</span>
            </div>
            <div className="userShowInfo">
              <MdOutlineCalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <FcPhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MdOutlineMailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <FaSearchLocation className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </section>
        {/* ==========  User Update =========== */}
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            {/* =====  User UpdateLeft ===== */}
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            {/* =====  User UpdateLeft ===== */}
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://assets.rbl.ms/25582750/origin.jpg"
                  alt="user image"
                  loading="lazy"
                />
                <label htmlFor="file">
                  <MdOutlinePublish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
