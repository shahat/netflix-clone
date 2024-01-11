import "./topbar.scss";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <BsGlobe2 className="topIcon" />{" "}
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <IoNotificationsOutline className="topIcon" />{" "}
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer" role="setting">
            <IoSettingsOutline className="topIcon" />{" "}
            <span className="topIconBadge">2</span>
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
