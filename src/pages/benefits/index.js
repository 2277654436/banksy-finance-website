import React from "react";
import './index.css'
import benefits1 from '../../image/banefits/benefits1.png'
import benefits2 from '../../image/banefits/benefits2.png'
import benefits3 from '../../image/banefits/benefits3.png'
import benefitsButton from '../../image/banefits/benefitsButton.png'


function scrollToPart(anchorName){
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) {
            anchorElement.scrollIntoView(
                {behavior: 'smooth',block:'center'}
            )
        }
    }
}

function Benefits() {
    return(
        <div className="benefits" id="benefits">
            <div className="benefits-title" data-aos="fade-up">
                <div>BENEFITS</div>
            </div>
            <div className="benefits-content">
                <div className="benefits-content-item" data-aos="fade-up">
                    <div className="benefitsItem-img">
                        <img src={benefits1} />
                        <div className="benefitsItem-content">
                            <div className="benefitsItem-title">
                                NFT Holder
                            </div>
                            <div className="benefitsItem-content-text">
                                1｜Easily get loans
                            </div>
                            <div className="benefitsItem-content-text">
                                2｜Mapping NFT for higher liquidity
                            </div>
                            <div className="benefitsItem-content-text">
                                3｜Instant loan and repayment; Flexible repayment
                            </div>
                        </div>
                    </div>
                </div>

                <div className="benefits-content-item" data-aos="fade-up">
                    <div className="benefitsItem-img">
                        <img src={benefits2} />
                        <div className="benefitsItem-content">
                            <div className="benefitsItem-title">
                                Funds Lender
                            </div>
                            <div className="benefitsItem-content-text">
                                1｜Loan safely with security
                            </div>
                            <div className="benefitsItem-content-text">
                                2｜Dual incomes from interest and platform rewards
                            </div>
                            <div className="benefitsItem-content-text">
                                3｜Deposit and withdraw funds instantly
                            </div>
                        </div>
                    </div>
                </div>

                <div className="benefits-content-item" data-aos="fade-up">
                    <div className="benefitsItem-img">
                        <img src={benefits3} />
                        <div className="benefitsItem-content">
                            <div className="benefitsItem-title">
                                Tokens Holder
                            </div>
                            <div className="benefitsItem-content-text">
                                1｜Share the platform revenue
                            </div>
                            <div className="benefitsItem-content-text">
                                2｜Participate in platform governance
                            </div>
                            <div className="benefitsItem-content-text">
                                3｜NFT creation and management
                            </div>
                        </div>
                    </div>
                </div>


            </div>
          {/*  <div className="benefitsButton" data-aos="fade-up" onClick={()=>scrollToPart('roadMap')}>
                <img src={benefitsButton} />
            </div>*/}
        </div>
    )
}

export default Benefits
