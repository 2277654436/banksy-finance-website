import React from "react";
import './index.css'
import FeaturesBG from '../../image/features/features-bg.png'


function FeaturesPage() {
    return (
        <div className="features">
            {/*<div className="features-title">*/}
            {/*    <div className="features-titleText" data-aos="fade-up" id="features">*/}
            {/*        <div>SOLUTIONS</div>*/}
            {/*        <div>*/}
            {/*            <div>The NAK protocol is a complete solution</div>*/}
            {/*            <div>driven by AI technology,</div>*/}
            {/*            <div>which can effectively solve the lending risk from</div>*/}
            {/*            <div>the NFT price confusion</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="features-content" data-aos="fade-up">
                <div className="features-content-item-img">
                    <img src={FeaturesBG}/>
                    {/*<img src={Dots} style={{marginTop:'20%'}} />*/}
                </div>

            </div>
        </div>
    )
}

export default FeaturesPage
