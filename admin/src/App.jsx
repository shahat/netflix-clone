import SideBar from "./components/sideBar/SideBar";
import TopBar from "./components/topbar/TopBar";
import "./app.scss";
import Home from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList";
import UserList from "./pages/userList/UserList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Products",
      element: <ProductList />,
    },
  ]);
  return (
    <>
      <TopBar />
      <main className="main">
        <div className="sideBarContainer">
          <SideBar />
        </div>
        <div className="content">
          <RouterProvider router={router} />
        </div>
      </main>
    </>
  );
}

export default App;
