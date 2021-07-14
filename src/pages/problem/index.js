import React  from 'react'
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
               <div>Issues</div>
            </div>
            <div className="problemContent" data-aos="fade-right">
               <div className="problemContent-item">
                   <span className="problemContent-item-serial">1</span>
                   <span className="problemContent-title-text">Price confusion </span>
               </div>
                <div className="problemContent-item-text">
                    <div>Lack of an effective NFT price discovery mechanism</div>
                    <div>for the NFT valuation and quotation in the market</div>
                </div>
                <div className="problemContent-item">
                    <span className="problemContent-item-serial">2</span>
                    <span className="problemContent-title-text">Poor liquidity </span>
                </div>
                <div className="problemContent-item-text">Low volume and handovers.</div>
                <div className="problemContent-item">
                    <span className="problemContent-item-serial">3</span>
                    <span className="problemContent-title-text">No security for lender's funds</span>
                </div>
                <div className="problemContent-item-text">Lenders are taking risk for the NFT valuation bubble.</div>
            </div>
            <div className="problemBac">
                <img src={problemBac} data-aos="fade-in" />
            </div>
            <div className="features-title">
               {/* <div className="features-title-img" data-aos="fade-right">
                    <img src={featuresTitleImg} />
                    <img src={featuresTitleBac} />
                </div>*/}
                <div className="features-titleText" data-aos="fade-up" id="features">
                    <div>SOLUTIONS</div>
                    <div>
                        <div>The NAK protocol is a complete solution</div>
                        <div>driven by AI technology,</div>
                        <div>which can effectively solve the lending risk from</div>
                        <div>the NFT price confusion</div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Problem
