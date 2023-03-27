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

function AppLayout() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  return (
     <>
      <Navbar />
      <Outlet 
      context={{ addToCart, removeFromCart, cartItems}}/>
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