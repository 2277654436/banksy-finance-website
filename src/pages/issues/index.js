import React  from 'react'
import './index.css'
import danger from '../../image/problem/danger.png'
import Number1 from '../../image/problem/number1.png'
import Number2 from '../../image/problem/number2.png'
import Number3 from '../../image/problem/number3.png'


function Problem() {
    return (
        <div className="problem">
            <div className="problem-title-content">
                <div className="dangerImg">
                    <img src={danger} data-aos="zoom-in" />
                </div>
                <div className="problem-title" data-aos="fade-up">
                    <div>Issues</div>
                </div>
            </div>


            <div className="problemContent" data-aos="fade-right">
               <div className="problemContent-item">
                   <div className="problemContent-item-serial">
                       <img src={Number1} />
                   </div>
                   <div className="problemContent-item-text">
                       <div className="problemContent-title-text">Price confusion </div>
                       <div className="problemContent-details">
                           <div>Lack of an effective NFT price discovery mechanism</div>
                           <div>for the NFT valuation and quotation in the market</div>
                       </div>
                   </div>
                  {/* <span className="problemContent-title-text">Price confusion </span>*/}
               </div>

                <div className="problemContent-item">
                    <div className="problemContent-item-serial">
                        <img src={Number2} />
                    </div>
                    <div className="problemContent-item-text">
                        <div className="problemContent-title-text">Poor liquidity</div>
                        <div className="problemContent-details">
                            <div>Low volume and handovers.</div>
                        </div>
                    </div>
                    {/* <span className="problemContent-title-text">Price confusion </span>*/}
                </div>

                <div className="problemContent-item">
                    <div className="problemContent-item-serial">
                        <img src={Number3} />
                    </div>
                    <div className="problemContent-item-text">
                        <div className="problemContent-title-text">No security for lender`s funds</div>
                        <div className="problemContent-details">
                            <div>Lenders are taking risk for the NFT valuation bubble.</div>
                        </div>
                    </div>
                    {/* <span className="problemContent-title-text">Price confusion </span>*/}
                </div>
            </div>
           {/* <div className="problemBac">
                <img src={problemBac} data-aos="fade-in" />
            </div>*/}
            {/*<div className="features-title" data-aos="fade-right">
                <div className="features-title-img" data-aos="fade-right">
                    <img src={featuresTitleImg} />
                    <img src={featuresTitleBac} />
                </div>
                <div className="features-titleText" id="features">
                    <div>SOLUTIONS</div>
                    <div>
                        <div>The NAK protocol is a complete solution</div>
                        <div>driven by AI technology,</div>
                        <div>which can effectively solve the lending risk from</div>
                        <div>the NFT price confusion</div>
                    </div>
                </div>
            </div>*/}
        </div>
    )
}

export default Problem
