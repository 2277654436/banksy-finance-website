import React from "react";
import './index.css'
import missionTitleImg from '../../image/mission/missionTitleImg.png'
import missionBG from '../../image/mission/missionBG.png'
import missionRing from '../../image/mission/mission-ring.png'
import clsx from "clsx";

const Mission = () => {
  return (
    <div className="mission section" id="mission">

      <div className="mission-title">
        <div className="mission-title-text">
          MISSION
        </div>
        <img src={missionTitleImg} className="mission-title-img"/>
      </div>
      <div className="mission-content">
        Provide a safe and reliable lending environment for
        the NFT market, solve the problem of NFT liquidity,
        and fully release the value of NFT
      </div>

      <div className={clsx('mission-img')}>
        <img src={missionBG}/>
      </div>

      <img src={missionRing} className="ring"/>
    </div>
  )
}

export default Mission
