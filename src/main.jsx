import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./layout/Index.jsx";
import ErrorPage from "./layout/ErrorPage.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Index />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
