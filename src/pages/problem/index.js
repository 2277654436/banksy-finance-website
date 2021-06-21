import React  from "react";
import './index.css'
import danger from '../../image/problem/danger.png'
import problemBac from '../../image/problem/problemImg.png'
import featuresTitleImg from '../../image/problem/features-titleImg.png'
import featuresTitleBac from '../../image/problem/features-titleBac.png'

function Problem() {
    return (
        <div className="problem">
            <div className="dangerImg">
                <img src={danger} data-aos="zoom-in" />
            </div>
            <div className="problem-title" data-aos="fade-up">
               <div>INDUSTRY</div>
                <div>PROBLEMS</div>
            </div>
            <div className="problemContent" data-aos="fade-right">
               <div className="problemContent-item">
                   <span className="problemContent-item-serial">1</span>
                   <span className="problemContent-item-text">Insufficient liquidity limits the NFT transaction</span>
               </div>
                <div className="problemContent-item">
                    <span className="problemContent-item-serial">2</span>
                    <span className="problemContent-item-text">Lack of NFT Copyright Protection</span>
                </div>
                <div className="problemContent-item">
                    <span className="problemContent-item-serial">3</span>
                    <span className="problemContent-item-text">High transaction fees limits frequent actions</span>
                </div>
                <div className="problemContent-item">
                    <span className="problemContent-item-serial">4</span>
                    <span className="problemContent-item-text">No efficient price discovery mechanism</span>
                </div>
                <div className="problemContent-item">
                    <span className="problemContent-item-serial">5</span>
                    <span className="problemContent-item-text">High price of scarce NFT hinders trading</span>
                </div>
            </div>
            <div className="problemBac">
                <img src={problemBac} data-aos="fade-in" />
            </div>
            <div className="features-title">
                <div className="features-title-img" data-aos="fade-right">
                    <img src={featuresTitleImg} />
                    <img src={featuresTitleBac} />
                </div>
                <div className="features-titleText" data-aos="fade-up" id="features">
                    <div>SOLUTIONS &</div>
                    <div>MAIN FEATURES</div>
                </div>
            </div>
        </div>
    )
}

export default Problem