import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// JANAGAN LUPA IMPORT HALAMAN YANG SUDAH DIBUAT DI FOLDER PAGES
import Home from "./pages/home";
import Login from "./pages/login";
import Regis from "./pages/Regis";
import More from "./pages/more";
import Otp from "./pages/Otp";
import Article from "./pages/Article";
import Homelogin from "./pages/Homelogin";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// PANGGIL FUNCTION UNTUK ROUTER
const router = createBrowserRouter([
  {path:"/", element:<Home />},
  {path:"/Login", element:<Login />},
  {path:"/Regis", element:<Regis />},
  {path:"/More", element:<More />},
  {path:"/Otp", element:<Otp />},
  {path:"/Article", element:<Article />},
  {path:"/Homelogin", element:<Homelogin />}

]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
