import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
    </>
  );
}

export default App;
