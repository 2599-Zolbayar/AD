import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div className="graph-box">
      <div className="graph-title">
        <h2>7 хоногын сонсолтууд</h2>
        <hr></hr>
      </div>
      <Bar
        data={{
          labels: [
            "1 сар 1",
            "1 сар 8",
            "1 сар 15",
            "1 сар 22",
            "1 сар 29",
            "2 сар 7",
            "2 сар 20",
            "2 сар 27",
            "3 сар 6",
            "3 сар 13",
          ],
          datasets: [
            {
              data: [10, 19, 28, 26, 20, 10, 7, 12, 23, 18],
              backgroundColor: "#0061FF",
              borderSkipped: "bottom",
              borderRadius: 5,
              barPercentage: 0.5,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              displayColors: false,
              backgroundColor: "rgba(58, 111, 248, 1)",

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
              beginAtZero: false,
              grid: {
                color: "#E5E7EB",
              },
              border: {
                dash: [4, 4],
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        }}
        height={"35%"}
        width={"100%"}
      />
    </div>
  );
};

export default BarChart;
