import React from "react";
import FeaturesBG from "../../image/features/features-bg.png";
import'./index.css'

export const Solutions = () => {
    return (
        <div className="solutions">
            <div className="solutions-title" data-aos="fade-right">
                <div className="solutions-titleText" id="solutions">
                    <div>SOLUTIONS</div>
                    <div>
                        <div>The NAK protocol is a complete solution</div>
                        <div>driven by AI technology,</div>
                        <div>which can effectively solve the lending risk from</div>
                        <div>the NFT price confusion</div>
                    </div>
                </div>
            </div>
            <div className="solutions-content" data-aos="fade-up">
                <div className="solutions-content-item-img">
                    <img src={FeaturesBG}/>
                </div>
            </div>
        </div>
    )
}
