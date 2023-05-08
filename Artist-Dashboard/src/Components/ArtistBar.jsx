import React from "react";
import Vector2 from "../assets/icons/Vector-artist2.svg";

function ArtistBar(props) {
  const iconSrc = props.iconSrc;
  const setIconSrc = props.setIconSrc;
  const selectedArtistImg = props.selectedArtistImg;
  const setDropArtistVisible = props.setDropArtistVisible;
  const labelVisible = props.labelVisible;

  return (
    <div
      onClick={() => {
        setDropArtistVisible(true);
        setIconSrc(Vector2);
      }}
      id="container"
    >
      <img id="img" src={selectedArtistImg} alt="Artist photo" />

      {labelVisible ? (
        <button id="myButton" className="bottomright">
          <img id="myIcon" src={iconSrc} alt="vector1" />
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default ArtistBar;
