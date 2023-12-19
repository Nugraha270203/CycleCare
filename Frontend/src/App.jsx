import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// JANAGAN LUPA IMPORT HALAMAN YANG SUDAH DIBUAT DI FOLDER PAGES
import Home from "./pages/home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Regis from "./pages/Regis";
import More from "./pages/more";
import Otp from "./pages/Otp";
import Article from "./pages/Article";
import Homelogin from "./pages/homelogin";
import Menuarticle from "./pages/Menuarticle"; 
import Create from "./pages/Create";
import Lupa from "./pages/Lupa";
import Passo from "./pages/Passo";
import Otp2 from "./pages/Otp2";
import Komunitas from "./pages/Komunitas";
import Video from "./pages/Video";
import Tips from "./pages/Tips";
import Dashboard from "./pages/Admin/Dashboard";
import Artikel from "./pages/Admin/Artikel";
import Tambahrtikel from "./pages/Admin/tambahartikel";
import DashNav from "./pages/Admin/DashNav";
import Tvid from "./pages/Admin/Tvid";
import Tambahvideo from "./pages/Admin/tambahvideo";
import Motor from "./pages/Admin/Motor";
import Tipe from "./pages/Admin/Tipe";
import Seri from "./pages/Admin/Seri";
import Tambahmotor from "./pages/Admin/tambahmotor";
import Tambahtipe from "./pages/Admin/Tambahtipe";
import Tambahserimotor from "./pages/Admin/Tambahserimotor";

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
  {path:"/Video", element: <Video />},
  {path:"/Tips", element: <Tips />},
  {path:"/Komunitas", element: <Komunitas />},
  {path:"/Home", element: <Home />},
  {path:"/Admin/Dashboard", element:<Dashboard />},
  {path:"/Admin/Artikel", element:<Artikel />},
  {path:"/Admin/tambahartikel", element:<Tambahrtikel />},
  {path:"/Admin/DashNav", element:<DashNav />},
  {path:"/Admin/Tvid", element: <Tvid />},
  {path:"/Admin/Tambahvideo", element: <Tambahvideo />},
  {path:"/Admin/Motor", element: <Motor />},
  {path:"/Admin/Tipe", element: <Tipe />},
  {path:"/Admin/Seri", element: <Seri />},
  {path:"/Admin/Tambahmotor", element: <Tambahmotor />},
  {path:"/Admin/Tambahtipe", element: <Tambahtipe />},
  {path:"/Admin/Tambahserimotor", element: <Tambahserimotor />},





]);


function App() {
  
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
