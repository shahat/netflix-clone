import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function SideBarItem({ sideBarItem }) {
  return (
    <div className="sidebarMenu">
      <h3 className="sidebarTitle">{sideBarItem.title}</h3>
      <ul className="sidebarList">
        {sideBarItem.subTitle.map((subTitle, index) => (
          <Link to={subTitle.link} key={index} className="link">
            <li className="sidebarListItem ">
              {subTitle.icon}
              {subTitle.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

SideBarItem.propTypes = {
  sideBarItem: PropTypes.object.isRequired,
};
