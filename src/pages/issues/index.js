import React from 'react'
import './index.css'
import danger from '../../image/issues/danger.png'
import Number1 from '../../image/issues/number1.png'
import Number2 from '../../image/issues/number2.png'
import Number3 from '../../image/issues/number3.png'
import clsx from "clsx";

function Problem({ active }) {
  return (
    <div className="issues section">

      <div className={clsx('issues-title', active && 'aos-animate')} data-aos="fade-up">
        <div className="issues-title-text">Issues</div>
        <img src={danger} className="issues-title-img"/>
      </div>

      <div className="issues-content">
        <div className="issues-content-item">
          <div className="issues-content-item-serial">
            <img src={Number1}/>
          </div>
          <div className="issues-content-item-text">
            <div className="issues-content-title-text">Price confusion</div>
            <div className="issues-content-details">
              <div>Lack of an effective NFT price discovery mechanism</div>
              <div>for the NFT valuation and quotation in the market</div>
            </div>
          </div>
          {/* <span className="issues-content-title-text">Price confusion </span>*/}
        </div>

        <div className="issues-content-item">
          <div className="issues-content-item-serial">
            <img src={Number2}/>
          </div>
          <div className="issues-content-item-text">
            <div className="issues-content-title-text">Poor liquidity</div>
            <div className="issues-content-details">
              <div>Low volume and handovers.</div>
            </div>
          </div>
        </div>

        <div className="issues-content-item">
          <div className="issues-content-item-serial">
            <img src={Number3}/>
          </div>
          <div className="issues-content-item-text">
            <div className="issues-content-title-text">No security for lender's funds</div>
            <div className="issues-content-details">
              <div>Lenders are taking risk for the NFT valuation bubble.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Problem
