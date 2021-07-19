import React from "react";
import './index.css'
import RoadMapImg from '../../image/roadmap/roadmapImg.png'
import clsx from "clsx";

function RoadMap({ active }) {
  return (
    <div className="roadmap section">
      <div
        className={clsx('roadmap-title', active && 'aos-animate')}
        data-aos="zoom-in"
      >
        ROADMAP
      </div>

      <img
        src={RoadMapImg}
        alt=""
        className={clsx('roadmap-img')}
      />
    </div>
  )
}

export default RoadMap
