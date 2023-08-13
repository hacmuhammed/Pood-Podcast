import React from "react";
import "./recommendCard.css";
import { playButton, } from "../../assets";

const RecommendCard = ({name, title, views, photo, captures}) => {
  return (
    <>
      <div className="pood__recommend-card">
        <img src={photo} alt="cardImage" />
        <div className="pood__recommend-card__title">
          <h2>{title}</h2>
          <p>{name}</p>
        </div>
        <div className="pood__recommend-card__footer">
          <div className="pood__recommend-card__footer-text">
            <p>{views}</p>
            <p>{captures}</p>
          </div>
          <a href=""><img src={playButton} alt="playButton" /></a>
        </div>
      </div>
    </>
  );
};

export default RecommendCard;
