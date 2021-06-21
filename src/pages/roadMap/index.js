import React from "react";
import './index.css'
import Team from "../team";
import roadMapImg from '../../image/roadmap/mapImg.png'

function RoadMap() {
    return (
        <div className="roadMap">
            <div className="roadMapMain" id="roadMap">
                <div className="roadMapTitle" data-aos="fade-right">
                    ROADMAP
                </div>
                <div className="roadMapImg" data-aos="fade-up">
                    <img src={roadMapImg} />
                    <div className="roadMapImgContent">
                        <div className="roadMapImgContent-item">
                            <div className="roadMapImgContent-item-title">·2021. Q1</div>
                            <div className="roadMapImgContent-item-text">Project</div>
                            <div className="roadMapImgContent-item-text">Launched</div>
                        </div>
                        <div className="roadMapImgContent-item">
                            <div className="roadMapImgContent-item-title">·2021. Q2 Beta launch</div>
                            <div className="roadMapImgContent-item-text">·FT marketplace</div>
                            <div className="roadMapImgContent-item-text">·NFT creation,</div>
                            <div className="roadMapImgContent-item-text">·NFT transaction,</div>
                            <div className="roadMapImgContent-item-text">·AI-based NFT generation</div>
                        </div>
                        <div className="roadMapImgContent-item">
                            <div className="roadMapImgContent-item-title">·2021. Q3 V1</div>
                            <div className="roadMapImgContent-item-text">IDO</div>
                            <div className="roadMapImgContent-item-text">·Listing</div>
                            <div className="roadMapImgContent-item-text">·Auction, splitting, NFT Farming.</div>
                            <div className="roadMapImgContent-item-text">·AI KIT</div>
                            <div className="roadMapImgContent-item-text">·Cross chains</div>
                        </div>
                        <div className="roadMapImgContent-item">
                            <div className="roadMapImgContent-item-title">·2021. Q4 V2</div>
                            <div className="roadMapImgContent-item-text">AI Oracle</div>
                            <div className="roadMapImgContent-item-text">NFT collateral</div>
                            <div className="roadMapImgContent-item-text">Exclusive Artist Exhibition Galleries</div>
                            <div className="roadMapImgContent-item-text">Cross chains extension</div>
                        </div>
                    </div>
                </div>
            </div>
            <Team />
        </div>
    )
}

export default RoadMap