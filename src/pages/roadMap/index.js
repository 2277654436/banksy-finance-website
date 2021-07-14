import React from "react";
import './index.css'
import Team from "../team";
import roadMapImg from '../../image/roadmap/mapImg.png'
import Map from '../../image/roadmap/mapBG.png'

function RoadMap() {
    return (
        <div className="roadMap">
            <div className="roadMapMain" id="roadMap">
                <div className="roadMapTitle" data-aos="fade-right">
                    ROADMAP
                </div>
              {/*  <div className="roadMapImg" data-aos="fade-up">
                    <img src={roadMapImg} />
                    <img src={Map} />
                    <div className="roadMapImgContent">
                        <div className="roadMapImgContent-item">
                            <div className="roadMapImgContent-item-title">·2021. Q1</div>
                            <div className="roadMapImgContent-item-text">Project</div>
                            <div className="roadMapImgContent-item-text">Launched</div>
                        </div>
                        <div className="roadMapImgContent-item">
                            <div className="roadMapImgContent-item-title">·2021. Q2 Beta</div>
                            <div className="roadMapImgContent-item-text">·NFT Marketplace</div>
                            <div className="roadMapImgContent-item-text">·NFT creation,</div>
                            <div className="roadMapImgContent-item-text">·NFT transaction,</div>
                            <div className="roadMapImgContent-item-text">·AI-based NFT generation</div>
                        </div>
                        <div className="roadMapImgContent-item">
                            <div className="roadMapImgContent-item-title">·2021. Q3 V1</div>
                            <div className="roadMapImgContent-item-text">IDO</div>
                            <div className="roadMapImgContent-item-text">·Listing</div>
                            <div className="roadMapImgContent-item-text">·Auction, Splitting, NFT Lending.</div>
                            <div className="roadMapImgContent-item-text">·AI KIT</div>
                            <div className="roadMapImgContent-item-text">·Cross chains</div>
                        </div>
                        <div className="roadMapImgContent-item">
                            <div className="roadMapImgContent-item-title">·2021. Q4 V2</div>
                            <div className="roadMapImgContent-item-text">NFT collateral</div>
                            <div className="roadMapImgContent-item-text">Exclusive Artist Exhibition Galleries</div>
                            <div className="roadMapImgContent-item-text">Cross chains extension</div>
                        </div>
                    </div>
                </div>*/}

                <div className="roadMapImg" data-aos="fade-up">
                    {/*<img src={roadMapImg} />*/}
                    <img src={Map} />
                </div>

                <div className="map-content">
                    <div className="map-content-item">
                        <div className="text">Complete market research, Build the product planning, Project start-up.</div>
                        <div className="text2">Complete the fundamental functions, Release the 1st version of DEMO.</div>
                        <div className="text3">Launch the 1st version of the core function NFT Pool-based Lending</div>
                        <div className="text4">Release NAK Protocol</div>
                        <div className="text5">Multi-chain deployment</div>

                    </div>

                </div>

            </div>
            <Team />
        </div>
    )
}

export default RoadMap
