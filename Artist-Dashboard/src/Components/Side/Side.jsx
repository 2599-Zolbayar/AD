import React from "react";
import SideCreate from "./SideCreate";
import ArtistPng from "./Photos/Photo.svg";
import ArtistPng1 from "./Photos/Photo1.svg";
import ArtistPng2 from "./Photos/Photo2.svg";
import "./Side.css";

function Side() {
  const data = [
    { id: "1", name: "Дуучин чамдаа", number: "999.999", img: ArtistPng },
    {
      id: "2",
      name: "Дуучин чамдаа",
      number: "532",
      img: ArtistPng1,
    },
    {
      id: "3",
      name: "Дуучин чамдаа",
      number: "231",
      img: ArtistPng2,
    },
    { id: "4", name: "Дуучин чамдаа", number: "92", img: ArtistPng },
    {
      id: "5",
      name: "Дуучин чамдаа",
      number: "4",
      img: ArtistPng,
    },
  ];
  const songList = data.map((songs) => {
    return (
      <SideCreate
        name={songs.name}
        img={songs.img}
        id={songs.id}
        number={songs.number}
      />
    );
  });
  return <div id="SideSongs">{songList}</div>;
}

export default Side;
