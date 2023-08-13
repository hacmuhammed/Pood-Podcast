import React from "react";
import "./populer.css";
import { arrowForward } from "../../assets";
import { Card } from "../../components";
import { cardsDetail } from "../../data/cardData";

const Cards = () => {
  const cards = cardsDetail.map((u) => {
    return (
      <Card
        key={u.id}
        name={u.name}
        specific={u.specific}
        avatar={u.avatar}
        gridPos={u.gridPos}
        bg={u.bg}
        podName={u.podName}
        podInfo={u.podInfo}
      />
    );
  });
  return cards;
};

const Populer = () => {
  return (
    <>
      <div className="pood__populer section__margin" id="podcast">
        <div className="pood__populer-title">
          <div className="pood_populer-title__main">
            <h2>En Popüler Podcast</h2>
            <p>Ayın en iyi 5 podcast'ini dinleyin 🔥</p>
          </div>
          <div className="pood__populer-title__link">
            <p className="gradient__text">
              <a href="#">Daha Fazla Göster</a>
            </p>
            <img src={arrowForward} alt="" />
          </div>
        </div>
        {/* Cards */}
        <div className="pood_populer-cards-container">
          <Cards />
        </div>
        {/* ======Cards===== */}
      </div>
    </>
  );
};

export default Populer;
