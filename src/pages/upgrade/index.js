import React from "react";
import './index.css'
import upgradeImg from '../../image/upgrade/upgradeImg.png'
import Benefits from "../benefits";
import { Row, Col } from 'antd'
import UpgradeTextBG from '../../image/upgrade/upgrade-text-bg.png'
import Features1 from '../../image/upgrade/features-img1.png'
import Features2 from '../../image/upgrade/features-img2.png'
import Features3 from '../../image/upgrade/features-img3.png'
import Features4 from '../../image/upgrade/features-img4.png'
import Arrow from '../../image/upgrade/arrow.png'
import Image1 from '../../image/upgrade/1.png'
import Image2 from '../../image/upgrade/2.png'
import Image3 from '../../image/upgrade/3.png'
import SpinImg from '../../image/upgrade/spinImg.png'



function Upgrade() {
    return (
        <div className="upgrade">
            {/*<div className="upgrade-img" data-aos="fade-in">
                <img src={upgradeImg} />
            </div>*/}
            <div className="upgrade-title" data-aos="fade-right">
                <img src={UpgradeTextBG} alt="" />
                <div>MAIN FEATURES</div>
            </div>

            <div className="features-content" data-aos="fade-up">
                <Row gutter={[70,100]}>
                    <Col xxl={6}  xl={6} lg={12} md={24}>
                        <div className="features-item">
                            <div className="features-item-img">
                                <img src={ Features1 } />
                            </div>
                            <div className="features-item-text">
                                <div>Safe and convenient</div>
                                <div>
                                    <div>Secure users` assets;</div>
                                    <div>flexible and convenient lending</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6}  xl={6} lg={12} md={24}>
                        <div className="features-item">
                            <div className="features-item-img">
                                <img src={ Features2 } style={{height:'168px'}} />
                            </div>
                            <div className="features-item-text">
                                <div>Support multi-chain</div>
                                <div>
                                    <div>Support multi-chain such as </div>
                                    <div>ETH, BSC, HECO, Solana, DOT, etc.</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6}  xl={6} lg={12} md={24}>
                        <div className="features-item">
                            <div className="features-item-img">
                                <img src={ Features3  } style={{height:'168px'}}/>
                            </div>
                            <div className="features-item-text">
                                <div>Combine with Def</div>
                                <div>
                                    <div>Intergrade Defi to</div>
                                    <div>increase NFT liquidity</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6}  xl={6} lg={12} md={24}>
                        <div className="features-item">
                            <div className="features-item-img">
                                <img src={ Features4 }  style={{height:'168px', width:'180px'}} />
                            </div>
                            <div className="features-item-text">
                                <div>NAK Protocol</div>
                                <div>
                                    <div>Service for the whole industry to</div>
                                    <div>a healthier and faster development</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="support-title" data-aos="fade-right">
                <img src={Arrow} />
                <div>SUPPORT A VARIETY OF</div>
                <div>NFTS POOL-BASE LENDING</div>
            </div>

            <div className="right-area" data-aos="fade-up">
                <img src={Image1} />
                <img src={Image2} />
                <img src={Image3} />
                <div className="kindBacBall">
                    <img src={SpinImg} />
                </div>
            </div>


            <Benefits />
        </div>

    )
}

export default Upgrade
