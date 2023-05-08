import React from "react";
import { Line } from "react-chartjs-2";
import circle from "../assets/icons/circle.svg";
import circle1 from "../assets/icons/circle1.svg";

const ChartComponent = () => {
  const data = {
    labels: [
      "01 сар",
      "02 сар",
      "03 сар",
      "04 сар",
      "05 сар",
      "06 сар",
      "07 сар",
      "08 сар",
      "09 сар",
      "10 сар",
      "11 сар",
      "12 сар",
    ],
    datasets: [
      {
        data: [
          33000, 53000, 35000, 41000, 44000, 65000, 52034, 53060, 63000, 63000,
          50000, 42000,
        ],
        fill: true,
        borderColor: "rgba(243, 128, 45, 1)",
        backgroundColor: "rgba(243, 128, 45, 0.2)",
        tension: 0.5,
        datasetIndex: 0,
      },
      {
        data: [
          23000, 33023, 25030, 35006, 51001, 54020, 76450, 60012, 50000, 97000,
          80000, 72000,
        ],
        fill: true,
        borderColor: "rgba(58, 111, 248, 1)",
        backgroundColor: "rgba(58, 111, 248, 0.2)",
        tension: 0.5,
      },
    ],
  };
  function colorItems(tooltipItem) {
    const tooltipBgColor = tooltipItem.tooltip.labelColors[0].borderColor;
    return tooltipBgColor;
  }
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        backgroundColor: colorItems,

        yAlign: "bottom",
        padding: 10,
        titleFont: "bold",
        callbacks: {
          title: () => "Сонсолтын тоо",
        },
        titleAlign: "center",
        titleFont: {
          size: 12,
        },
        bodyFont: {
          size: 16,
          weight: "bold",
        },
        bodyAlign: "center",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20000,
          callback: function (value) {
            value = value / 1000;
            if (value === 0) {
              return 0;
            } else return value + "k";
          },
        },
        grid: {
          color: "#E5E7EB",
        },
        border: {
          dash: [10, 10],
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="graph-box">
      <div className="graph-title">
        <div>
          <h2>
            их сонсолттой дуу <span>2023.04</span>
          </h2>
          <div className="stat-title">
            <div>
              <img src={circle} alt="circle" />
              2023
            </div>
            <div>
              <img src={circle1} alt="circle" />
              2022
            </div>
          </div>
        </div>
        <hr />
      </div>
      <Line data={data} height={"35%"} width={"100%"} options={options} />
    </div>
  );
};

export default ChartComponent;
