import React from "react";
import Side from "./Components/Side/Side";
import Select from "./Components/Select";
import VectorUp from "./assets/icons/Vector-up.svg";
import Union from "./assets/icons/Union.svg";
import ProgressBar from "./Components/ProgressBar";
import BarChart from "./Components/BarChart";
import ChartComponent from "./Components/ChartComponent";

function App() {
  const count = 9999999;
  return (
    <main>
      <header>
        <button className="bell">
          <img src={Union} alt="Notfication" />
        </button>
      </header>
      <h1>Миний самбар</h1>
      <nav>
        <Select
          title={"Хайлт хэлбэр"}
          options={["Өнөөдрийг хүртэл", "1 Сар", "7 хоног", "Хоногоор"]}
        />
        <Select
          title={"Гарчиг"}
          options={["Өнөөдрийг хүртэл", "Гарчиг1", "Гарчиг1", "Гарчиг1"]}
        />
        <Select
          title={"Огноо"}
          options={["Өнөөдрийг хүртэл", "1 Сар", "7 хоног", "Хоногоор"]}
        />
        <button className="btn">Ангилах</button>
      </nav>
      <section>
        <div className="container1">
          <div className="block1">
            <h2>
              2023.04 <span>сарын сонсолт</span>
            </h2>
            <hr />
            <p className="hearing-count">
              {count.toLocaleString({
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              ₮
            </p>
            <div className="showp">
              <img src={VectorUp} alt="VectorUp" />
              <p className="vectorup">+12.4%</p>
            </div>
          </div>
          <div className="block1">
            <h2>Сонсолтын хувь</h2>
            <hr />
            <ProgressBar data="75" />
            <span>энэ 7 хоног</span>
          </div>
        </div>
        <ChartComponent />
      </section>
      <section>
        <BarChart />
        <aside>
          <h2>
            их сонсолттой дуу <span>2023.04</span>
          </h2>
          <hr />
          <Side />
        </aside>
      </section>
    </main>
  );
}

export default App;
