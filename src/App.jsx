import React, { useState } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element:<Home />},
  {path:"/Login", element:<Login />}
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
