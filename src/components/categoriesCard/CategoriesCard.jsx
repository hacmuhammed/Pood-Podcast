import React from "react";
import "./categoriesCard.css";


const CategoriesCard = ({hours,image,capture,name}) => {
  return (
    <>
      <div className="pood__categories-card">
        <img src={image} alt="" />
        <div className="pood__categories-card__info">
          <h3>{name}</h3>
          <div className="pood__categories-card__footer">
            <p>{capture}</p>
            <p>{hours}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesCard;
