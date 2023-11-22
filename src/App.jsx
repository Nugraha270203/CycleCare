import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// JANAGAN LUPA IMPORT HALAMAN YANG SUDAH DIBUAT DI FOLDER PAGES
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Regis from "./pages/Regis";
import More from "./pages/more";
import Otp from "./pages/Otp";
import Article from "./pages/Article";
import Homelogin from "./pages/Homelogin";
import Menuarticle from "./pages/Menuarticle"; 
import Create from "./pages/Create";
import Lupa from "./pages/Lupa";
import Passo from "./pages/Passo";
import Otp2 from "./pages/Otp2";
import Komunitas from "./pages/Komunitas";

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
  {path:"/Profile", element:<Profile />},
  {path:"/ProfileEdit", element:<ProfileEdit />},
  {path:"/Regis", element:<Regis />},
  {path:"/More", element:<More />},
  {path:"/Otp", element:<Otp />},
  {path:"/Article", element:<Article />},
  {path:"/Homelogin", element:<Homelogin />},
  {path:"/Menuarticle", element:<Menuarticle />},
  {path:"/Create", element: <Create />},
  {path:"/Lupa", element: <Lupa />},
  {path:"/Passo", element: <Passo />},
  {path:"/Otp2", element: <Otp2 />},
  {path:"/Komunitas", element: <Komunitas />}

]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
