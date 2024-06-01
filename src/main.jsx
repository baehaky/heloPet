import React, { useEffect, useState } from "react";
import { AuthContextProvider } from "./context/AuthContext.jsx";
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
import ChatDc from "./components/doctor/Chat.jsx";
import NavigationChat from "./components/NavigationChat.jsx";
import ChatPage from "./layout/ChatPage.jsx";
import AddShoppingCart from "./components/AddShoppingCart.jsx";
import ListFavoritDoctor from "./components/ListFavoritDoctor.jsx";
import ListDoctor from "./components/ListDoctor.jsx";
import SellerDashboard from "./components/seller/SellerDashboard.jsx";
import SellerSidebar from "./components/seller/SellerSidebar.jsx";
import DoctorSidebar from "./components/doctor/DoctorSidebar.jsx";
import DoctorDashboard from "./components/doctor/DoctorDashboard.jsx";
import CreateBlog from "./components/doctor/pages/CreateBlog.jsx";
import RegisterSeller from "./components/seller/RegistrasiSeller.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";
import PostPage from "./components/blog/PostPage.jsx";

export default function App() {
  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = "SB-Mid-client-uBscz0so8GOjZjh8";
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });
  const [cart, setCart] = useState([]);
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
          <Route path="listDoctor" element={<ListDoctor />} />
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
          <Route index element={<NavigationChat />} />
          <Route path=":id" element={<Chat />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="login/seller" element={<RegisterSeller />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="seller" element={<SellerSidebar />}>
          <Route index path="dashboard" element={<SellerDashboard />} />
        </Route>
        <Route path="doctor" element={<DoctorSidebar />}>
          <Route index path="dashboard" element={<DoctorDashboard />} />
          <Route path="create" element={<CreateBlog />} />
          <Route path="chat/:id" element={<ChatDc />} />
        </Route>
        <Route path="artikel/:id" element={<PostPage />} />
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
    <AuthContextProvider>
      <SocketContextProvider>
        <App />
      </SocketContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
