import React from "react";
import FeaturesBG from "../../image/solutions/features-bg.png";
import './index.css'
import clsx from "clsx";

export const Solutions = ({ active }) => {
  return (
    <div className="solutions section">
      <div style={{ height: '100vh' }}>
        <div className={clsx('solutions-title', active && 'aos-animate')} data-aos="fade-right">
          SOLUTIONS
        </div>
        <div className="solutions-content">
          The NAK protocol is a complete solution
          driven by AI technology,
          which can effectively solve the lending risk from
          the NFT price confusion
        </div>

        <img src={FeaturesBG} className={clsx('solutions-img', active && 'aos-animate')} data-aos="fade-left"/>
      </div>
    </div>
  )
}

export default Solutions
