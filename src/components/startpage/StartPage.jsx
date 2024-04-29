import StartPageSidebar from "../startpagesidebar/StartPageSidebar";
import Calendar from "../calendar/Calendar";
import "./StartPage.css";
import { useNavigate, useParams } from "react-router-dom";
import Statistics from "../statistics/Statistics";

const StartPage = () => {
  const mode = useParams().mode;

  const navigate = useNavigate();

  const handlelogout = (e) => {
    localStorage.removeItem("user");
    localStorage.removeItem("selectedDate");
    navigate("/register");
    window.location.reload();
  };

  if (mode === "logout") {
    handlelogout();
  }

  return (
    <div>
      <div className="startpage">
        <StartPageSidebar />
        {mode === "select" && <Calendar />}
        {mode === "statistics" && <Statistics />}
      </div>
    </div>
  );
};

export default StartPage;
