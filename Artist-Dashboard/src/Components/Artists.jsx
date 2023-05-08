import check from "../assets/icons/Check.svg";
import arrow from "../assets/icons/arrow-circle-right.svg";
function Artists({ name, img, setSelectedArtistName, setSelectedArtistImg }) {
  const handleButtonClick = () => {
    setSelectedArtistName(name);
    setSelectedArtistImg(img);
  };

  return (
    <button className="artist-btn" onClick={handleButtonClick}>
      <div className="btn-container">
        <img src={img} />
        <div>
          <h3>{name}</h3>
          <p>Уран бүтээлч</p>
        </div>
      </div>
      <div id="arrow">
        <img src={arrow} />
      </div>
      <div id="check">
        <img src={check} />
      </div>
    </button>
  );
}

export default Artists;
