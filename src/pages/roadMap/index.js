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
          <img src={RoadMapImg}  alt="" id="roadMap"/>
        </div>
      </div>
    </div>
  )
}

export default RoadMap
