import React from "react";
import './index.css'
import MainBG2 from '../../image/top/topImg.png'

function Top() {
    return (
        <div className="top">
            <div className="top-content">
                <div className="top-content-child">
                    NFT Pool-Based
                </div>
                <div className="top-content-child">
                    Lending Hub
                </div>
            </div>
            <div className="topBac">
                <img src={MainBG2}/>
            </div>
            <div className="top-foot">
                <div>The first AI-driven NFT pool-based</div>
                <div>lending platform to lead a revolution</div>
                <div>of the NFT market</div>
            </div>

            <div className="explore-btn">
                <a href={"http://app.banksy.finance/#/"} target='_blank' style={{color: 'white'}}>
                    Explore
                </a>
            </div>
        </div>
    )
}

export default Top
