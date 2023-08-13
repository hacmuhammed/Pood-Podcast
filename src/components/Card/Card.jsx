import React from "react";
import "./card.css";
import { cardOnePhoto, avatarOne, playBut } from "../../assets";
const Card = ({ name, specific, avatar, gridPos, bg, podName, podInfo }) => {

  return (
    <>
      <div
        style={{
          gridArea: gridPos,
          backgroundImage: `linear-gradient(45deg, #171717 0%, rgba(217, 217, 217, 0.00) 100%),url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat:"no-repeat"
        }}
        className="pood__card"
      >
        <div className="pood__card-title">
          <img src={avatar} alt="avatar" />
          <div className="pood__card-title__info">
            <h1>{name}</h1>
            <p>{specific}</p>
          </div>
        </div>
        <div className="pood__card-footer">
          <div className="pood__card-footer__info">
            <h1>{podName}</h1>
            <p>{podInfo}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
