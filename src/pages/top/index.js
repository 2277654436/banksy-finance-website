import React from "react";
import './index.css'
import MainBG from '../../image/top/topBG.png'

import Icon1 from '../../image/top/icon1.png'
import Icon2 from '../../image/top/icon2.png'
import Icon3 from '../../image/top/icon3.png'
import Icon4 from '../../image/top/icon4.png'
import Icon5 from '../../image/top/icon5.png'
import Icon6 from '../../image/top/icon6.png'
import Icon7 from '../../image/top/icon7.png'
import Icon8 from '../../image/top/icon8.png'
import Icon9 from '../../image/top/icon9.png'


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
