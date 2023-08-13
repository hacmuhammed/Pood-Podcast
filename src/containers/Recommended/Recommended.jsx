import React from "react";
import "./recommended.css";
import { arrowForward, cardFourPhoto, cardFivePhoto } from "../../assets";
import { RecommendCard } from "../../components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { recCardData } from "../../data/recCardData";

const cards = recCardData.map((u, index) => {
  return (
    <SplideSlide key={index} >
      <RecommendCard
        
        name={u.name}
        title={u.title}
        captures={u.captures}
        photo={u.photo}
        views={u.views}
      />
    </SplideSlide>
  );
});

const slideOption = {
  perPage: 4,
  autoplay: true,
  rewind : true,
  gap: "1.25rem",
  arrows: false,
  pagination: true,
  height: 380,
  interval: 1500,
  resetProgress: true,
}


const Recommended = () => {
  return (
    <>
      <div className="pood__rec section__margin">
        <div className="pood__rec-title">
          <div className="pood__rec-title__main">
            <h2>Tavsiye Edilen Podcast’ler</h2>
            <p>Sizin için seçtiğimiz podcast'leri dinleyin.</p>
          </div>
          <div className="pood__rec-title__link">
            <p className="gradient__text">
              <a href="#">Daha Fazla Göster</a>
            </p>
            <img src={arrowForward} alt="arrow" />
          </div>
        </div>
        <div className="pood__rec-cards__container">
          <Splide
            style={{ color: "#FFAD0E" }}
            options={slideOption}
            aria-labelledby="basic-example-heading"
          >
            {cards}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Recommended;
