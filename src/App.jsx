import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// JANAGAN LUPA IMPORT HALAMAN YANG SUDAH DIBUAT DI FOLDER PAGES
import Home from "./pages/home";
import Login from "./pages/login";
<<<<<<< HEAD
import Profile from "./pages/Profile";
=======
import Regis from "./pages/Regis";
import More from "./pages/more";
import Otp from "./pages/Otp";
import Article from "./pages/Article";
import Homelogin from "./pages/Homelogin";
>>>>>>> 84f092961c41611b9c515b82622f5791ae97524b

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
<<<<<<< HEAD
  {path:"/Profile", element:<Profile />}
=======
  {path:"/Regis", element:<Regis />},
  {path:"/More", element:<More />},
  {path:"/Otp", element:<Otp />},
  {path:"/Article", element:<Article />},
  {path:"/Homelogin", element:<Homelogin />}

>>>>>>> 84f092961c41611b9c515b82622f5791ae97524b
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
