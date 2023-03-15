import React, {useState} from "react";
import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
import About from "./landingpage/About";
import Landingpage from "./landingpage/Landingpage";
import Cart from "./shop/Cart";
import Shop from "./shop/Shop";
import productsData from './landingpage/product.js'

function AppLayout() {

  return (
     <>
      <Navbar />
      <Outlet />
    </>
  );
}

const App = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element:
          <>
            <Landingpage/>
          </>,
      },
      {
        path: "/about",
        element:<About/>,
      },
      {
        path: "/shop",
        element:<Shop/>,
      },
      {
        path: "/contact",
        element:"</>",
      },
      {
        path: "/login",
        element:<LogIn/>,
      },
      {
        path: "/cart",
        element:<Cart/>,
      }
    ],
  },
]);

export default App;