import React from "react";
import "./pricing.css";
import { PriceSwitch } from "../../components";
import { useContext, useState, useEffect } from "react";
import { PriceContext } from "../../contexts/PriceContext";

import { checkDisabled, check, shield } from "../../assets";
const Pricing = () => {
  const [price, setPrice] = useState(true);
  /*Flip animation*/
  let poodCardClasses = ["pood__pricing-card__",""];
 
   if(price){
    poodCardClasses.push("flip-vertical-right");
   }if(!price){
    poodCardClasses.push("flip-vertical-left");
   }
  

  /*=====Flip animation====*/

  return (
    <>
    
      <div id="fiyat" className="pood__pricing section__margin">
        <div className="pood__pricing-title">
          <h1>Başlamaya hazır mısın?</h1>
          <p>İhtiyaçlarınıza uygun planı seçin.</p>
        </div>
        <div className="pood__pricing-plan">
          <div className="pood__pricing-plan__toggle">
            <p>Aylık</p>
            <PriceContext.Provider value={{ price, setPrice }}>
              <PriceSwitch />
            </PriceContext.Provider>
            <p>Yıllık</p>
          </div>
          {price && (
            <div className="pood__pricing-discount">
              <p>%30 indirim kazanın</p>
            </div>
          )}
        </div>

        <div className="pood__pricing-cards">
    
        <div className="blurBlodBg" />
          {/* card one */}
          <div className="pood__pricing-card__one">
            <div className="pood__pricing-card__one-title">
              <button>Kişisel</button>
              <div className="pood__pricing-card__one-price">
                <h1>Ücretsiz</h1>
                <p>
                  Sınırlı sayıda podcast'i ücretsiz dinleyin. Ara sıra reklamlar
                  görünebilir.
                </p>
              </div>
            </div>
            <div className="pood__pricing-divider" />
            <div className="pood__pricing-card__one-features">
              <div className="pood__pricing-card__one-features__info">
                <img src={checkDisabled} alt="" />
                <p>İnternet olmadan dinle</p>
              </div>
              <div className="pood__pricing-card__one-features__info">
                <img src={checkDisabled} alt="" />
                <p>Aynı anda birden fazla cihazdan giriş yapın </p>
              </div>
              <div className="pood__pricing-card__one-features__info">
                <img src={checkDisabled} alt="" />
                <p>Tüm podcast'leri dinleyebilirsiniz</p>
              </div>
              <div className="pood__pricing-card__one-features__info">
                <img src={checkDisabled} alt="" />
                <p>arkadaşlarınızla paylaşın ve birlikte dinleyin </p>
              </div>
            </div>
            <div className="pood__pricing-card__one-footer">
              <button type="button">Daha Fazla Bilgi</button>
            </div>
          </div>
          {/* ====card one ====*/}

          {/* card two */}
          <div className={poodCardClasses.join("two ") }>
            <div className="pood__pricing-card__two-title">
              <button>Kişisel Pro</button>
              <div className="pood__pricing-card__two-price">
                <h1>
                  {!price ? "99,99" : "59,99"}{" "}
                  <span>
                    <p>/ Her Ay</p>
                  </span>
                </h1>
                <p>
                  Her yerden yüksek ses kalitesiyle podcast dinlemek için en iyi
                  seçim.
                </p>
              </div>
            </div>
            <div className="pood__pricing-divider" />
            <div className="pood__pricing-card__two-features">
              <div className="pood__pricing-card__two-features__info">
                <img src={check} alt="" />
                <p>İnternet olmadan dinle</p>
              </div>
              <div className="pood__pricing-card__two-features__info">
                <img src={check} alt="" />
                <p>Aynı anda birden fazla cihazdan giriş yapın </p>
              </div>
              <div className="pood__pricing-card__two-features__info">
                <img src={check} alt="" />
                <p>Tüm podcast'leri dinleyebilirsiniz</p>
              </div>
              <div className="pood__pricing-card__two-features__info">
                <img src={check} alt="" />
                <p>arkadaşlarınızla paylaşın ve birlikte dinleyin </p>
              </div>
            </div>
            <div className="pood__pricing-card__two-footer">
              <button type="button">ücretsiz deneyin</button>
            </div>
          </div>
          {/* ====card two==== */}
          {/* card three */}
          <div className={poodCardClasses.join("three ")}>
            <div className="pood__pricing-card__three-title">
              <button>Öğrenci</button>
              <div className="pood__pricing-card__three-price">
                <h1>
                  {!price ? "29,99" : "19,99"}{" "}
                  <span>
                    <p>/ Her Ay</p>
                  </span>
                </h1>
                <p>
                  Öğrencilere özel, her yerden yüksek ses kalitesiyle podcast
                  dinlemek için en iyi seçim.
                </p>
              </div>
            </div>
            <div className="pood__pricing-divider" />
            <div className="pood__pricing-card__three-features">
              <div className="pood__pricing-card__three-features__info">
                <img src={check} alt="" />
                <p>İnternet olmadan dinle</p>
              </div>
              <div className="pood__pricing-card__three-features__info">
                <img src={checkDisabled} alt="" />
                <p style={{ color: "var(--color-gray)" }}>
                  Aynı anda birden fazla cihazdan giriş yapın{" "}
                </p>
              </div>
              <div className="pood__pricing-card__three-features__info">
                <img src={check} alt="" />
                <p>Tüm podcast'leri dinleyebilirsiniz</p>
              </div>
              <div className="pood__pricing-card__three-features__info">
                <img src={check} alt="" />
                <p>arkadaşlarınızla paylaşın ve birlikte dinleyin </p>
              </div>
            </div>
            <div className="pood__pricing-card__three-footer">
              <button type="button">Öğrenci Bilgilerini Tanımla</button>
            </div>
          </div>
          {/* ====card three==== */}
        </div>
        <div className="pood__pricing-footer">
          <img src={shield} alt="" />
          <p>3D ile ödeyin.Banka bilgileriniz güvende</p>
        </div>
        
      </div>
    </>
  );
};

export default Pricing;
