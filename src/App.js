import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "./state/AuthContext";
import { Navigate } from "react-router-dom";
import Maintenance from "./components/maintenance/Maintenance";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Maintenance />
      {/* <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to={"/"} /> : <Register />}
        />
      </Routes> */}
    </Router>
  );
}

export default App;
