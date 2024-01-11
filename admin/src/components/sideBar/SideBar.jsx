import "./sideBar.scss";
import { IoHomeOutline } from "react-icons/io5";
import { IoAnalyticsSharp } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaAppStore } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
// import { IoStatsChartSharp } from "react-icons/io5";

import SideBarItem from "../sideBarItem/SideBarItem";
import { TbReportSearch } from "react-icons/tb";

import { IoMailOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { BiMessageSquareDetail } from "react-icons/bi";

import { CgOrganisation } from "react-icons/cg";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdReportProblem } from "react-icons/md";

export default function SideBar() {
  const sideBarItems = [
    {
      title: "Dashboard",
      subTitle: [
        { icon: <IoHomeOutline className="sidebarIcon" />, title: "Home" },
        {
          icon: <RiMoneyDollarCircleFill className="sidebarIcon" />,
          title: "Analytics",
        },
        {
          icon: <IoAnalyticsSharp className="sidebarIcon" />,
          title: "Sales",
        },
      ],
    },
    {
      title: "Quick Menu",
      subTitle: [
        { icon: <FaRegUser className="sidebarIcon" />, title: "Users" },
        {
          icon: <FaAppStore className="sidebarIcon" />,
          title: "Products",
        },
        {
          icon: <FaMoneyBillTransfer className="sidebarIcon" />,
          title: "Transactions",
        },
        {
          icon: <TbReportSearch className="sidebarIcon" />,
          title: "Reports",
        },
      ],
    },
    {
      title: "Notifications",
      subTitle: [
        { icon: <IoMailOutline className="sidebarIcon" />, title: "Mail" },
        {
          icon: <VscFeedback className="sidebarIcon" />,
          title: "Feedback",
        },
        {
          icon: <BiMessageSquareDetail className="sidebarIcon" />,
          title: "Messages",
        },
      ],
    },
    {
      title: "Stuff",
      subTitle: [
        { icon: <CgOrganisation className="sidebarIcon" />, title: "Manage" },
        {
          icon: <MdOutlineAnalytics className="sidebarIcon" />,
          title: "Analytics",
        },
        {
          icon: <MdReportProblem className="sidebarIcon" />,
          title: "Reports",
        },
      ],
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <SideBarItem sideBarItems={sideBarItems} />
      </div>
    </div>
  );
}
