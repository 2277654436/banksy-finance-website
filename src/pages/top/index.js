import React from "react";
import './index.css'
import MainBG2 from '../../image/top/topImg.png'
import logo from "../../image/logo.png";
import menuTwitter from "../../image/menuTwitter.png";
import menuFly from "../../image/menuFly.png";

import '../../menu.css'

function scrollToPart(anchorName) {
  if (anchorName) {
    let anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView(
        { behavior: 'smooth', block: 'center' }
      );
    }
  }
}

const Navbar = () => {
  return (
    <div className="menu">

      <img className="logo" src={logo}/>

      <ul className="menu-items-container">
        <li><a onClick={() => scrollToPart('mission')}>Mission</a></li>
        <li><a onClick={() => scrollToPart('features')}>Features</a></li>
        <li><a onClick={() => scrollToPart('benefits')}>Benefits</a></li>
        <li><a onClick={() => scrollToPart('roadMap')}>Roadmap</a></li>
      </ul>

      <div className="links-container">
        <a href={"https://twitter.com/banksy_finance"} target="_blank">
          <img className="link-twitter" src={menuTwitter}/>
        </a>
        <a href={"https://t.me/Banskyfinance"} target='_blank'>
          <img className="link-tg" src={menuFly}/>
        </a>
      </div>

    </div>
  )
}

const Top = () => {
  return (
    <div className="top section">
      <Navbar/>
      <div className="top-title">
        <div className="top-title-child">
          NFT Pool-Based
        </div>
        <div className="top-title-child">
          Lending Hub
        </div>
      </div>
      <div className="top-img">
        <img src={MainBG2}/>
      </div>
      <div className="top-content">
        <div>The first AI-driven NFT pool-based</div>
        <div>lending platform to lead a revolution</div>
        <div>of the NFT market</div>
      </div>
      <div className="explore-btn">
        <a href={"https://app.banksy.finance/#/"} target='_blank' style={{ color: 'white' }}>
          Explore
        </a>
      </div>
    </div>
  )
}

export default Top
