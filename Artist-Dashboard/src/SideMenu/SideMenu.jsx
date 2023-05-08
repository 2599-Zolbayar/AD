import React, { useEffect, useState } from "react";
import labelPhoto from "../assets/side-content/Photo-sidemenu.svg";
import LabelBar from "../Components/LabelBar";
import ArtistBar from "../Components/ArtistBar";
import MenuItem from "../Components/MenuItem";
import ArtistPhoto from "../assets/side-content/Artist1.svg";
import Leave from "../assets/icons/Leave.svg";
import Dropdown from "../Components/Dropdown/Profile-dropdown";
import DropArtist from "../Components/DropArtist/DropArtist";
import Music from "../assets/icons/Music.svg";
import Stat from "../assets/icons/Stat.svg";
import Wallet from "../assets/icons/Wallet.svg";
import Contract from "../assets/icons/Contract.svg";
import user from "../assets/icons/user.svg";
import Vector1 from "../assets/icons/Vector-artist.svg";
import Vector from "../assets/icons/Vector-sidemenu.svg";
import data from "../data";
import "./sideMenu.css";

function SideMenu() {
  const [selectedArtistName, setSelectedArtistName] = useState(data[0].name);
  const [selectedArtistImg, setSelectedArtistImg] = useState(data[0].cover);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropArtistVisible, setDropArtistVisible] = useState(false);
  const [labelVisible, setLabelVisible] = useState(true);
  const [iconSrc, setIconSrc] = useState(Vector1);

  function Label(data) {
    if (data[0].label === "") setLabelVisible(false);
  }

  useEffect(() => {
    Label(data);
  }, []);

  return (
    <div id="Sidemenu">
      <div className="sidebar">
        <nav>
          {labelVisible ? (
            <div
              onClick={() => {
                setDropdownVisible(true);
              }}
              id="Navmenu"
            >
              <LabelBar image={labelPhoto} name="Ocean Grey" />

              <button id="Dropdown-btn">
                <img src={Vector} alt="vector" />
              </button>
            </div>
          ) : (
            ""
          )}
          {dropdownVisible ? (
            <Dropdown
              name="Ocean Grey"
              img={labelPhoto}
              mail="artist@oceangray.com"
              setDropdownVisible={setDropdownVisible}
            />
          ) : (
            ""
          )}
        </nav>
        <article id="Artistmenu">
          <ArtistBar
            labelVisible={labelVisible}
            iconSrc={iconSrc}
            setIconSrc={setIconSrc}
            selectedArtistImg={selectedArtistImg}
            setDropArtistVisible={setDropArtistVisible}
          />
          {dropArtistVisible ? (
            <DropArtist
              data={data}
              setIconSrc={setIconSrc}
              setSelectedArtistName={setSelectedArtistName}
              setSelectedArtistImg={setSelectedArtistImg}
              setDropArtistVisible={setDropArtistVisible}
            />
          ) : (
            ""
          )}
          <div className="artist-text">
            <h3 id="Artist-name">{selectedArtistName}</h3>
            <p>Уран бүтээлч</p>
          </div>
        </article>
        <section>
          <MenuItem icon={Stat} text="Статистик" />
          <MenuItem icon={Music} text="Уран бүтээлч" />
          <MenuItem icon={Wallet} text="Хэтэвч" />
          <MenuItem icon={user} text="Уран бүтээлчийн мэдээлэл" />
        </section>
      </div>
      <footer>
        <MenuItem icon={Contract} text="Гэрээний мэдээлэл" />
        <MenuItem icon={Leave} text="Системээс гарах" />
      </footer>
    </div>
  );
}

export default SideMenu;
