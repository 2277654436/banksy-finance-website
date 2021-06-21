import React from "react";
import './index.css'
import upgradeImg from '../../image/upgrade/upgradeImg.png'
import Benefits from "../benefits";

function Upgrade() {
    return (
        <div className="upgrade">
            <div className="upgrade-img" data-aos="fade-in">
                <img src={upgradeImg} />
            </div>
            <div className="upgrade-title" data-aos="fade-right">
                <div>AI GENERATED</div>
                <div>ARTWORKS</div>
            </div>
            <Benefits />
        </div>
    )
}

export default Upgrade