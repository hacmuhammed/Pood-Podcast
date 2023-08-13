import React from "react";
import './footer.css';
import { logoWhite,facebook, twitter, linkedin, instagram } from "../../assets";
const Footer = () => {
  return (
    <>
      <div id="iletisim" className="pood__footer section__padding">
        <div className="pood__footer-header">
            <div className="pood__footer-sign__texts">
                <h1>Haber bültenimize kaydolun</h1>
                <p>En son podcast ile güncel kalın</p>
            </div>
            <div className="pood__footer-sign__inputs">
                <input type="text" placeholder="E-postanızı giriniz" />
                <button type="button"><span  className="gradient__text">Subscribe</span></button>
            </div>
        </div>
        <div className="pood__footer-body">
            <div className="pood__footer-logo">
                <img src={logoWhite}alt="" />
                <p>Designed and Developed By <a  className="gradient__text" href="https://www.instagram.com/hac.mu/" target="_blank">@hacmu</a></p>
            </div>
            <div className="pood__footer-links__container">
                <div className="pood__footer-links">
                    <p>Pood</p>
                    <p>Overview</p>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Categories</p>
                </div>
                <div className="pood__footer-links">
                    <p>Resources</p>
                    <p>Blog</p>
                    <p>Events</p>
                    <p>Help Centre</p>
                    <p>Contact</p>
                </div>
                <div className="pood__footer-links">
                    <p>Social</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Linkedin</p>
                </div>
                <div className="pood__footer-links">
                    <p>Legal</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Cookies</p>
                    <p>Licenses</p>
                </div>
            </div>
        </div>
        <div  className="pood__footer-divider"/>
        <div className="pood__footer-footer">
            <div className="pood__footer-copy">
                <p>@ 2023 Pood. All rights reserved.</p>
            </div>
            <div className="pood__footer-social">
                <img src={linkedin} alt="" /><img src={facebook} alt="" /><img src={twitter} alt="" /><img src={instagram} alt="" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
