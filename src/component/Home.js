import React from "react";
import { useUserAuth } from "../context/authContext";
import Register from "./Register";
import Signin from "./Signin";
const Home = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      Home
      <Signin />
      <Register />
    </div>
  );
};

export default Home;
