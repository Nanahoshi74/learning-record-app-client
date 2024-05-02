import { useNavigate, useParams } from "react-router-dom";
import "./Topbar.css";

const Topbar = () => {
  const navigate = useNavigate();
  const handlelogout = (e) => {
    navigate(`/select`);
    return;
  };

  const formatDateString = (inputDate) => {
    let date = new Date(inputDate);

    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();

    if (month.length === 1) {
      month = month.slice(-1);
    }
    if (day.length === 1) {
      day = day.slice(-1);
    }

    // YYYY年M月D日の形式で日付を返す
    return date.getFullYear() + " 年 " + month + " 月 " + day + " 日 ";
  };

  const selectedDate = useParams().date;

  return (
    <div className="topbarContainer">
      <button className="backhome" onClick={(e) => handlelogout(e)}>
        ホームに戻る
      </button>
      <span className="topbarCenter">
        {formatDateString(selectedDate)}の記録
      </span>
    </div>
  );
};

export default Topbar;
