import React from "react";
import "./categori.css";
import { categorieImage } from "../../assets";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { CategoriesCard } from "../../components";
import { categoiresCardsData } from "../../data/categoriesCardsData";

const categories = [
  "Yaşam",
  "Finans",
  "Müzik",
  "Spor",
  "Teknoloji",
  "Edebiyat",
  "Ekenomi",
  "Astroloji",
  "Girişimcilik",
];

const categoriesCards = categoiresCardsData.map((u, index)=>{
  return (
    <CategoriesCard key={index} name={u.name} capture={u.captures} image={u.image} hours={u.hours} />
  );
})

const catButtons = categories.map((u, index) => {
  return (
    <SplideSlide key={index}>
      <button  type="button">
        {u}
      </button>
    </SplideSlide>
  );
});

const slideOption = {
  type: "loop",
  perPage: 3,
  autoplay: true,
  arrows: false,
  interval: 1000,
  pagination: false,
  width: 800,
};

const Categori = () => {
  return (
    <>
    <div id="kategoriler" className="pood__categories-container section__padding">
          <div className="pood__categories-container__cards">
           {categoriesCards}
          </div>
      </div>
      <div  className="pood__categorie section__padding">
        <div className="pood__categorie-title">
          <h1>
            Podcast'lerimizi{" "}
            <span className="gradient__text">Kategorilere</span> Göre Keşfedin
          </h1>
          <div className="pood__categorie-title__buttons">
            <Splide
              options={slideOption}
              aria-labelledby="basic-example-heading"
            >
              {catButtons}
            </Splide>
          </div>
        </div>
        <div className="pood__categorie-image">
          <img src={categorieImage} alt="categorieImage" />
        </div>
      </div>
      
    </>
  );
};

export default Categori;
