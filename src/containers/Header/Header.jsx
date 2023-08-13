import React from "react";
import "./header.css";
import {
  mainpic,
  playBut,
  blobBlur,
  people,
  spotify,
  itunes,
} from "../../assets";


const Header = () => {
  return (
    <>
      <img className="bg__blob" src={blobBlur} alt="blobBlur" />
      <div className="pood__header section__margin" id="home">
        <div className="pood__header-container animate__animated animate__fadeIn   animate__slow">
          <div className="pood__header-container__title">
            <div className="pood__header-container__title-welcome">
              <div  />
              <p>Hoş Geldiniz</p>
              <div />
            </div>
            <h1>
              Harika Podcast Deneyimini Hemen <span>Keşfedin</span>.
            </h1>
            <p>
              En son bölümleri dinleyin ve Pood ailesine katılarak en güncel
              içeriklerden haberdar olun. Keyifli dinlemeler.
            </p>
          </div>
          <div className="pood__header-container__buttons">
            <button>
              <img src={playBut} alt="" />
              Ücretsiz denemeyi başlat
            </button>
            <button><a href="#podcast">Podcast’lerimizi Keşfet</a></button>
          </div>
          <div className="pood__header-container__info">
            <div className="pood__header-container__info-people">
              <img src={people} alt="" />
              <p>80,000+ Aktif Kullanıcı</p>
            </div>
            <div className="pood__header-container__info-brand">
              <img src={spotify} alt="" />
              <img src={itunes} alt="" />
            </div>
          </div>
        </div>
        <div className="pood__header-image animate__animated animate__fadeIn  animate__slow">
          <img src={mainpic} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
