import React from "react";
import './index.css'
import benefits1 from '../../image/banefits/benefits1.png'
import benefits2 from '../../image/banefits/benefits2.png'
import benefits3 from '../../image/banefits/benefits3.png'
import benefitsButton from '../../image/banefits/benefitsButton.png'

function Benefits() {
    return(
        <div className="benefits">
            <div className="benefits-title" data-aos="fade-up">
                <div>BENEFITS</div>
            </div>
            <div className="benefits-content">
                <div className="benefits-content-item" data-aos="fade-right">
                    <div className="benefitsItem-img">
                        <img src={benefits1} />
                    </div>
                    <div className="benefitsItem-content">
                        <div className="benefitsItem-title">
                            NFT Creators
                        </div>
                        <div className="benefitsItem-content-text">
                            1｜Permanent royalty incomes
                        </div>
                        <div className="benefitsItem-content-text">
                            2｜Multiple NFT trading revenue
                        </div>
                        <div className="benefitsItem-content-text">
                            3｜Governance and platform revenue
                        </div>
                        <div className="benefitsItem-content-text">
                            4｜Expanded publicity
                        </div>
                        <div className="benefitsItem-content-text">
                            5｜Direct donations from fans
                        </div>
                        <div className="benefitsItem-content-text">
                            6｜Platform incentives
                        </div>
                    </div>
                </div>
                <div className="benefits-content-item" data-aos="fade-right">
                    <div className="benefitsItem-img">
                        <img src={benefits2} />
                    </div>
                    <div className="benefitsItem-content">
                        <div className="benefitsItem-title">
                            Collectors
                        </div>
                        <div className="benefitsItem-content-text">
                            1｜Multiple NFT transaction services
                        </div>
                        <div className="benefitsItem-content-text">
                            2｜More categories to choose
                        </div>
                        <div className="benefitsItem-content-text">
                            3｜Friendly NFT collection experience
                        </div>
                    </div>
                </div>
                <div className="benefits-content-item" data-aos="fade-right">
                    <div className="benefitsItem-img">
                        <img src={benefits3} />
                    </div>
                    <div className="benefitsItem-content">
                        <div className="benefitsItem-title">
                            Token holders
                        </div>
                        <div className="benefitsItem-content-text">
                            1｜Multiple NFT transaction services
                        </div>
                        <div className="benefitsItem-content-text">
                            2｜Governance
                        </div>
                        <div className="benefitsItem-content-text">
                            3｜Platform revenue
                        </div>
                        <div className="benefitsItem-content-text">
                            4｜Donate to your favorite creators
                        </div>
                        <div className="benefitsItem-content-text">
                            5｜Lower platform service fee
                        </div>
                    </div>
                </div>
            </div>
            <div className="benefitsButton" data-aos="fade-up">
                <img src={benefitsButton} />
            </div>
        </div>
    )
}

export default Benefits