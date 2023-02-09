import Register from "./component/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./component/Admin";
import Home from "./component/Home";
import Signin from "./component/Signin";
import { UserAuthContextProvider } from "./context/authContext";
import ProtectedRout from "./component/ProtectedRout";
function App() {
  return (

    <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={
              <ProtectedRout>
                <Admin />
              </ProtectedRout>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>


  )
}
export default App