import VectorDown from "../assets/icons/Vector-down.svg";

function ProgressBar(props) {
  const data = props.data;

  return (
    <div>
      <progress value={data} max="100" className="progress" />
      <div className="progressdown">
        <div className="showp">
          <img src={VectorDown} alt="VectorDown" />
          <p className="vectordown">-8.4%</p>
        </div>
        <p className="progress-text">{data}%</p>
      </div>
    </div>
  );
}

export default ProgressBar;
