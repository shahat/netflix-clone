import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import "./outlet.scss";
export default function AppLayout() {
  return (
    <>
      <TopBar />
      <main className="main">
        <div className="sideBarContainer">
          <SideBar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  );
}
