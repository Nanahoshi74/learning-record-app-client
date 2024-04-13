import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "./state/AuthContext";
import { Navigate } from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  return (
    <Router>
      <Routes>
        {/* <Route path={`/:date`} element={user ? <Home /> : <Register />} />
        <Route
          path="/login"
          element={user ? <Navigate to={`/` + getTodayDate()} /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        /> */}
        <Route
          path="/"
          element={user ? <Navigate to={`/${getTodayDate()}`} /> : <Register />}
        />
        <Route
          path={`/:date`}
          element={user ? <Home /> : <Navigate to="/register" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to={`/${getTodayDate()}`} /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to={`/${getTodayDate()}`} /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
