import React from "react";
import './index.css'
import missionTitleImg from '../../image/mission/missionTitleImg.png'
import missionTitleBac from '../../image/mission/missionTitlebac.png'
import missionImgContent from '../../image/mission/missionImgContent.png'

function Mission() {
    return (
        <div className="mission">
            <div className="mission-title">
                <div className="mission-titleImg" data-aos="fade-right">
                    <img src={missionTitleImg} />
                    <img src={missionTitleBac} />
                </div>
                <div className="mission-title-text" data-aos="fade-up">
                    <div>MISSION</div>
                    <div>Banksy has built a scalable NFT cross-chain mechanism
                        and financial service infrastructure that provides users with
                        a variety of transaction methods.
                    </div>
                    <div>The first AI built-in core for NFT Oracle, artwork generation,
                        and copyright protection.
                    </div>
                </div>
            </div>
            <div className="missionImg">
                <img src={missionImgContent} data-aos="zoom-in" />
            </div>
        </div>
    )
}

export default Mission