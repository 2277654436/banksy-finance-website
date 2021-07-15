import React from "react";
import './index.css'
import MainBG from '../../image/top/topBG.png'
import BanksyLine from "../banksyLine";

function Top() {
  return (
    <div className="top">
      {/*<div className="top-title" id="scc1">
        The First Decentralized NFT Financial Hub
      </div>*/}
      <div className="top-content" data-aos="fade-right">
        <div className="top-content-child">
          NFT Mortgage
        </div>
        <div className="top-content-child">
          Lending Hub
        </div>
      </div>
      <div className="topBac" data-aos="fade-left">
        <img src={MainBG}/>
      </div>
      <div className="top-foot" data-aos="fade-up">
        <div>The first AI-driven NFT pool-based</div>
        <div>lending platform to lead a revolution</div>
        <div>of the NFT market</div>
      </div>
      <BanksyLine/>
      {/*<div className="topBacStart">
        <img src={virtualland}/>
        <img src={solible}/>
        <img src={cryptokitties}/>
        <img src={raible}/>
        <img src={opensea}/>
      </div>*/}
      {/*<div className="explore-button">
                <div className="button-border">
                    Explore
                </div>
            </div>
            <div className="top-icon-bg">
                <img src={Icon1} alt=""/>
                <img src={Icon2} alt=""/>
                <img src={Icon3} alt=""/>
                <img src={Icon4} alt=""/>
                <img src={Icon5} alt=""/>
                <img src={Icon6} alt=""/>
                <img src={Icon7} alt=""/>
                <img src={Icon8} alt=""/>
                <img src={Icon9} alt=""/>
            </div>*/}
    </div>
  )
}

export default Top
