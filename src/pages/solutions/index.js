import React from "react";
import FeaturesBG from "../../image/solutions/features-bg.png";
import'./index.css'

export const Solutions = () => {
    return (
        <div className="solutions">
            < div className="solutions-area">
                <div className="solutions-title" data-aos="fade-right">
                    <div>SOLUTIONS</div>
                    <div className="solutions-title-text" id="solutions" data-aos="fade-up">
                        <div>
                            <div>The NAK protocol is a complete solution</div>
                            <div>driven by AI technology,</div>
                            <div>which can effectively solve the lending risk from</div>
                            <div>the NFT price confusion</div>
                        </div>
                    </div>
                </div>
                <div className="solutions-content" data-aos="fade-left">
                    <div className="solutions-content-item-img">
                        <img src={FeaturesBG}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Solutions
