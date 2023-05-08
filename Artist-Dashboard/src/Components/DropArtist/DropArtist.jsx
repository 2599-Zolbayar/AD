import React from "react";
import Artists from "../Artists";
import "./DropArtist.css";
import Vector from "./Vector-artist.svg";

function DropArtist(props) {
  const setIconSrc = props.setIconSrc;
  const setSelectedArtistName = props.setSelectedArtistName;
  const setSelectedArtistImg = props.setSelectedArtistImg;
  const setDropArtistVisible = props.setDropArtistVisible;
  const data = props.data;
  const artistList = data.map((artist) => {
    return (
      <Artists
        style={{ zIndex: "3" }}
        name={artist.name}
        img={artist.cover}
        setSelectedArtistName={setSelectedArtistName}
        setSelectedArtistImg={setSelectedArtistImg}
        onClick={() => {
          setDropArtistVisible(true);
        }}
      />
    );
  });

  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: "0",
          zIndex: "1",
        }}
        onClick={() => {
          setDropArtistVisible(false);
          setIconSrc(Vector);
        }}
      ></div>
      <div id="DropArtist">{artistList}</div>
    </div>
  );
}

export default DropArtist;
