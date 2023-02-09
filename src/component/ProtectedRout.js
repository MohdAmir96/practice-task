import { async } from "@firebase/util";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/authContext";
const ProtectedRout = ({ children }) => {
  const { user } = useUserAuth();
  console.log(user);

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRout;
