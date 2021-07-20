import React from "react";
import './index.css'
import benefits1 from '../../image/banefits/benefits1.png'
import benefits2 from '../../image/banefits/benefits2.png'
import benefits3 from '../../image/banefits/benefits3.png'
import clsx from "clsx";

function Benefits({ active }) {
  return (
    <div className="benefits section" id="benefits">
      <div className="benefits-title">
        <div>BENEFITS</div>
      </div>
      <div
        className={clsx('benefits-content', active && 'aos-animate')}
        data-aos="flip-up"
      >
        <div className="benefits-item">
          <img src={benefits1} className="benefits-item-img"/>
          <div className="benefits-item-content">
            <div className="benefits-item-title">
              NFT Holder
            </div>
            <div className="benefits-item-content-text">
              1｜Easily get loans
            </div>
            <div className="benefits-item-content-text">
              2｜Mapping NFT for higher liquidity
            </div>
            <div className="benefits-item-content-text">
              3｜Instant loan and repayment; Flexible repayment
            </div>
          </div>
        </div>

        <div className="benefits-item">
          <img src={benefits2} className="benefits-item-img"/>
          <div className="benefits-item-content">
            <div className="benefits-item-title">
              Funds Lender
            </div>
            <div className="benefits-item-content-text">
              1｜Loan safely with security
            </div>
            <div className="benefits-item-content-text">
              2｜Dual incomes from interest and platform rewards
            </div>
            <div className="benefits-item-content-text">
              3｜Deposit and withdraw funds instantly
            </div>
          </div>
        </div>

        <div className="benefits-item">
          <img src={benefits3} className="benefits-item-img"/>

          <div className="benefits-item-content">
            <div className="benefits-item-title">
              Tokens Holder
            </div>
            <div className="benefits-item-content-text">
              1｜Share the platform revenue
            </div>
            <div className="benefits-item-content-text">
              2｜Participate in platform governance
            </div>
            <div className="benefits-item-content-text">
              3｜NFT creation and management
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
