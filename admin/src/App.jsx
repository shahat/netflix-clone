import Home from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList";
import UserList from "./pages/userList/UserList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import AppLayout from "./pages/appLayout/AppLayout";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <ProductList />,
        },
        {
          path: "/product/:productId",
          element: <Product />,
        },
        {
          path: "/newproduct",
          element: <NewProduct />,
        },
        {
          path: "/users",
          element: <UserList />,
        },
        {
          path: "/newuser",
          element: <NewUser />,
        },
        {
          path: "/users/:userId",
          element: <User />,
        },
        {
          path: "/listproduct",
          element: <ProductList />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
