import React from "react";
import './index.css'
import missionTitleImg from '../../image/mission/missionTitleImg.png'
import missionBG from '../../image/mission/missionBG.png'
import missionRing from '../../image/mission/mission-ring.png'

function Mission() {
    return (
        <div className="mission" id="mission">
            <div className="mission-title">
                <div className="mission-titleImg" data-aos="fade-right">
                    <img src={missionTitleImg} />
                </div>
                <div className="mission-title-text" data-aos="fade-up">
                    <div>MISSION</div>
                    <div>
                        Provide a safe and reliable lending environment for
                        the NFT market, solve the problem of NFT illiquidity,
                        and fully release the value of NFT
                    </div>
                </div>
            </div>

            <div className="missionImg">
                <img src={missionBG} data-aos="zoom-in" />
            </div>

            <div className="ring" >
                <img src={ missionRing }/>
            </div>

        </div>
    )
}

export default Mission
