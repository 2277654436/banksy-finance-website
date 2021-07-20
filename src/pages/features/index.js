import React from "react";
import './index.css'
import featuresTextBG from '../../image/features/features-text-bg.png'
import Features1 from '../../image/features/features-img1.png'
import Features2 from '../../image/features/features-img2.png'
import Features3 from '../../image/features/features-img3.png'
import Features4 from '../../image/features/features-img4.png'
import clsx from "clsx";

function Features({ active }) {
  return (
    <div className="features section">
      <div className="features-title">
        <img src={featuresTextBG} alt=""/>
        <div>MAIN FEATURES</div>
      </div>

      <div className={clsx('features-content', active && 'aos-animate')} data-aos="flip-down">
        <div className="features-item">
          <div className="features-item-img">
            <img src={Features1}/>
          </div>
          <div className="features-item-text">
            <div>Safe and convenient</div>
            <div>Secure users' assets, flexible and convenient lending</div>
          </div>
        </div>
        <div className="features-item">
          <div className="features-item-img">
            <img src={Features2}/>
          </div>
          <div className="features-item-text">
            <div>Support multi-chain</div>
            <div>Support multi-chain such as ETH, BSC, HECO, Solana, DOT, etc.</div>
          </div>
        </div>
        <div className="features-item">
          <div className="features-item-img">
            <img src={Features3}/>
          </div>
          <div className="features-item-text">
            <div>Combine with Defi</div>
            <div>
              Integrate Defi to increase NFT liquidity
            </div>
          </div>
        </div>
        <div className="features-item">
          <div className="features-item-img">
            <img src={Features4}/>
          </div>
          <div className="features-item-text">
            <div>NAK Protocol</div>
            <div>Service for the whole industry to a healthier and faster development</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Features
