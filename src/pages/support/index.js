import React from "react"
import Arrow from "../../image/support/arrow.png";
import Image1 from "../../image/support/1.png";
import Image2 from "../../image/support/2.png";
import Image3 from "../../image/support/3.png";
import SpinImg from "../../image/upgrade/spinImg.png";
import './index.css'

export const Support = () => {
    return (
        <div className="support" id="support">
            <div className="support-title">
                <img src={Arrow} />
                <div>SUPPORT A VARIETY OF</div>
                <div>NFTS POOL-BASE LENDING</div>
            </div>
            <div className="right-area" >
                <img src={Image3} />
                <img src={Image2} />
                <img src={Image1} />
            </div>
            <img src={SpinImg} className="spin-img" />


        </div>
    )
}

export default Support
