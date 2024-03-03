import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Index from "./layout/index.jsx";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Index />} />
        <Route path="artikel" element={<ArtikelPage />} />
        <Route path="shop" element={<PetCarePage />} />
        <Route path="cart" element={<AddShoppingCart />} />
      </Route>
      <Route path="chat" element={<NavigationChat />}>
        <Route index element={<ChatPage />} />
        <Route path="id1" element={<Chat />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
