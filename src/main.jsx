import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Index from "./layout/Index.jsx";
import ErrorPage from "./layout/ErrorPage.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import LoginPage from "./layout/LoginPage.jsx";
import RegisterPage from "./layout/RegisterPage.jsx";
import ArtikelPage from "./layout/ArtikelPage.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import PetCarePage from "./components/PetCarePage.jsx";
import Chat from "./components/Chat.jsx";
import NavigationChat from "./components/NavigationChat.jsx";
import ChatPage from "./layout/ChatPage.jsx";
import AddShoppingCart from "./components/AddShoppingCart.jsx";
import ListFavoritDoctor from "./components/ListFavoritDoctor.jsx";

export default function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<NavigationBar size={cart.length} />}>
          <Route index element={<Index handleClick={handleClick} />} />
          <Route path="artikel" element={<ArtikelPage />} />
          <Route path="favoritDoctor" element={<ListFavoritDoctor />} />
          <Route
            path="shop"
            element={<PetCarePage handleClick={handleClick} />}
          />
          <Route
            path="cart"
            element={
              <AddShoppingCart
                cart={cart}
                setCart={setCart}
                handleChange={handleChange}
              />
            }
          />
        </Route>
        <Route path="chat" element={<NavigationChat />}>
          <Route index element={<ChatPage />} />
          <Route path=":id" element={<Chat />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
