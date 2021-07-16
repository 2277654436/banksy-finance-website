import React from "react";
import './index.css'
import Team from "../team";
import RoadMapImg from '../../image/roadmap/roadmapImg.png'

function RoadMap() {
  return (
    <div className="roadMap">
      <div className="roadMapMain" >
        <div className="roadMapTitle" data-aos="fade-right">
          ROADMAP
        </div>

        <div className="roadmap-content" data-aos="zoom-in">
          {/* <img src={Map} className="roadMapImg" data-aos="fade-up" />*/}
          <img src={RoadMapImg}  alt="" id="roadMap"/>
        </div>


        {/*<div className="map-content">
          <div className="map-content-item">
            <div className="text">Complete market research, Build the product planning, Project start-up.</div>
            <div className="text2">Complete the fundamental functions, Release the 1st version of DEMO.</div>
            <div className="text3">Launch the 1st version of the core function NFT Pool-based Lending</div>
            <div className="text4">Release NAK Protocol</div>
            <div className="text5">Multi-chain deployment</div>
          </div>
        </div>*/}

      </div>
      <Team/>
    </div>
  )
}

export default RoadMap
