import React from "react";
import './index.css'
import footTwitter from '../../image/foot/footTwitter.png'
import footGithub from '../../image/foot/footGithub.png'
import footEmail from '../../image/foot/footEmail.png'
import footMail from '../../image/foot/footMail.png'
import footFly from '../../image/foot/footFly.png'
import footLogo from '../../image/logo.png'

function Foot() {
    return (
        <div className="foot">
            <div className="foot-text">
                The First Decentralized NFT×AI Financial Hubtions.
                An AI-driven NFT platform to fully
                unleash the financial potential of NFT.
            </div>
            <div className="foot-content">
                <div className="footContent-item">
                    <a href={"https://twitter.com/banksy_finance"} target="_blank">
                        <img src={footTwitter} />
                    </a>
                </div>
                <div className="footContent-item">
                    <a href={"https://github.com/Banksy-Finance"} target="https://github.com/Banksy-Finance">
                        <img src={footGithub} />
                    </a>
                </div>
                <div className="footContent-item">
                    <a href={"https://t.me/Banskyfinance"} target="_blank">
                        <img src={footFly} />
                    </a>
                </div>
                <div className="footContent-item">
                    <a href={"mailto:contact@banksy.finance"} target="_blank">
                        <img src={footEmail} />
                    </a>
                </div>
            </div>
            <div className="footLogo">
                <img src={footLogo} />
            </div>
            <div className="footLogoText">© 2021 Banksy - Terms of Use | Privacy Policy | Cookie Settings</div>
        </div>
    )
}

export default Foot