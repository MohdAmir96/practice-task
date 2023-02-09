import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { db, auth } from "../firebase/adminAuthConfig";
import { useNavigate } from "react-router-dom";
import { signUp } from "../functions/signUp";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const handleSumbit = async (e) => {
    e.preventDefault();
    setUsername(e.target[0].value);
    setPassword(e.target[1].value);
    setConfirmPassword(e.target[2].value);
    setRole(e.target[3].value);
    if (password === confirmPassword) {
      try {
        await signUp(username, password);
        await fetch(
          "https://e-commerce-project-2-7ee00-default-rtdb.asia-southeast1.firebasedatabase.app/auth.json",

          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              role: role,
            }),
          }
        );
        alert("success");
        // setTimeout(() => {
        //   navigate("/admin");
        // }, 4000);
        console.log(auth.currentUser.username);
        setUser(auth.currentUser.username);
      } catch (error) {
        console.log(error.message);
      }
    } else alert("password doesnt match");
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
        <input
          type="password"
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div>
          <label htmlFor="">Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Register;
