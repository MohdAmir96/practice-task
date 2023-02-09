import { useState, useEffect } from "react";
import { logIn } from "../functions/signUp";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/authContext";
import { isAdmin } from "@firebase/util";
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useUserAuth();
  const { authData } = useUserAuth();
  console.log("user", user);

  const handleSumbit = async (e) => {
    e.preventDefault();
    await logIn(username, password);
    const isAdmin = () => {
      let flag = false;
      for (let i in authData) {
        if (username === authData[i].username && authData[i].role === "admin") {
          flag = true;
          console.log(authData[i].role);
        }
      }
      return flag;
    };
    if (isAdmin()) navigate("/admin");
    else navigate("/");
  };
  return (
    <div>
      <h1>signup form</h1>
      <form onSubmit={(e) => handleSumbit(e)}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Signin;
