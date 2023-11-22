import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// JANAGAN LUPA IMPORT HALAMAN YANG SUDAH DIBUAT DI FOLDER PAGES
import Home from "./pages/home";
import Login from "./pages/login";
import Regis from "./pages/Regis";
import More from "./pages/more";
<<<<<<< HEAD
import Otp from "./pages/Otp";
=======
import Article from "./pages/Article";
import Homelogin from "./pages/homelogin";
>>>>>>> 0af68b17a15845b7dd8f30a8e1d36109b847b895

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
<<<<<<< HEAD
  {path:"/Otp", element:<Otp />}
=======
  {path:"/Article", element:<Article />},
  {path:"/Homelogin", element:<Homelogin />}

>>>>>>> 0af68b17a15845b7dd8f30a8e1d36109b847b895
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
