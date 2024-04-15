import React, { useContext, useEffect, useRef, useState } from "react";
import "./EditHome.css";
import ShowRecord from "../showrecord/ShowRecord";
import axios from "axios";
import { AuthContext } from "../../state/AuthContext";
import { Chart } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import StudyDate from "../studydate/StudyDate";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const EditHome = ({ selectedDate, records, setItemRecords }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);

  const subject = useRef();
  const subject_time = useRef();
  const chartRef = useRef(null);
  var [chart, setChart] = useState(null);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${backendUrl}/records/record/${selectedDate}/?username=${user.username}&password=${user.password}`
        );
        if (response.data) setItemRecords(response.data);
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, [user, StudyDate]);

  useEffect(() => {
    createGraph();
  }, [records, user]);

  const createSubmit = async (e) => {
    e.preventDefault();

    try {
      const addstudy = {
        subject: subject.current.value,
        subject_time: subject_time.current.value,
      };

      //追加ボタン押したときに変更加える
      const res = await axios.put(
        `${backendUrl}/records/add/${selectedDate}/?username=${user.username}&password=${user.password}`,
        addstudy
      );
      if (!res.data) setItemRecords(res.data);
      subject.current.value = "";
      subject_time.current.value = "";
      window.location.reload();
      createGraph();
    } catch (err) {
      console.log(err);
    }
  };

  const createGraph = () => {
    const ctx = chartRef.current.getContext("2d");
    if (chart) {
      chart.destroy();
    }
    if (records && records["studyTime"]) {
      const studyTimeData = records["studyTime"];
      const labels = Object.keys(studyTimeData);
      const data = Object.values(studyTimeData);

      // グラデーションの色相を計算して配列に追加
      const startHue = 300; // 開始色相
      const endHue = 940; // 終了色相

      // グラデーションの段階数（データ数に合わせて調整）
      const steps = data.length;

      // グラデーションを保持する配列
      const gradientColors = [];

      // グラデーションの色相を計算して配列に追加
      for (let i = 0; i < steps; i++) {
        const hue = startHue + (endHue - startHue) * (i / steps);
        const saturation = 100; // 彩度を100%に設定
        const lightness = 50; // 明度を50%に設定
        const alpha = 0.8; // 透明度
        const color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
        gradientColors.push(color);
      }
      chart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              label: "学習時間",
              data: data,
              backgroundColor: gradientColors,
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        plugins: [ChartDataLabels],
        options: {
          plugins: {
            datalabels: {
              color: "#000",
              font: {
                weight: "bold",
                size: 15,
              },
              formatter: (value, context) => {
                const label = context.chart.data.labels[context.dataIndex];
                return `${label}: ${value}`; // Display label and value
              },

              anchor: "end",
              align: "start",
              offset: 10,
            },
          },
        },
      });
    }
    setChart(chart);
  };

  return (
    <div className="edithome">
      <div className="edithomeWrapper">
        <form action="" className="editform" onSubmit={(e) => createSubmit(e)}>
          <input
            type="text"
            className="editinput"
            required
            placeholder="ex: 数学"
            ref={subject}
          />
          <input
            type="number"
            className="editinput"
            required
            placeholder="ex: 2"
            min={1}
            ref={subject_time}
          />
          <span className="timetext">時間</span>
          <button className="addbutton" type="submit" onSubmit={createGraph}>
            追加
          </button>
          <button className="createbutton" type="button" onClick={createGraph}>
            グラフを再生成する
          </button>
        </form>
        <div className="imgWrapper">
          <canvas ref={chartRef}></canvas>
          {records ? (
            <></>
          ) : (
            <img src={PUBLIC_FOLDER + "/loading.jpg"} alt="" className="img" />
          )}
        </div>
        {loading && <span className="loading">取得中...</span>}
        {records && records["studyTime"] ? (
          Object.keys(records["studyTime"]).map((item) => (
            <ShowRecord
              key={item}
              item={item}
              time={records["studyTime"][item]}
              id={records._id}
              selectedDate={selectedDate}
              createGraph={createGraph}
            />
          ))
        ) : (
          <div>表示するデータがありません。データを追加して下さい。</div>
        )}
      </div>
      <div className="copywrite">©2024 Nanahoshi74</div>
    </div>
  );
};

export default EditHome;
