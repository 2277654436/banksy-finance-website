import './index.css'
import service from '../../image/service/service.png'
import MainBG from '../../image/top/main_bg.png'
import virtualland from '../../image/top/virtualland.png'
import solible from '../../image/top/solible.png'
import cryptokitties from '../../image/top/cryptokitties.png'
import raible from '../../image/top/rarible.png'
import opensea from '../../image/top/opensea.png'
import Icon1 from '../../image/top/icon1.png'
import Icon2 from '../../image/top/icon2.png'
import Icon3 from '../../image/top/icon3.png'
import Icon4 from '../../image/top/icon4.png'
import Icon5 from '../../image/top/icon5.png'
import Icon6 from '../../image/top/icon6.png'



function Top() {
  return(
    <div className="top">
      {/*<div className="top-title" id="scc1">
        The First Decentralized NFT Financial Hub
      </div>*/}
      <div className="top-content">
        <div className="top-content-child">
          NFT Mortgage
        </div>
        <div className="top-content-child">
          Lending Hub
        </div>
      </div>
      <div className="topBac">
        <img src={ MainBG } />
      </div>
      <div className="top-foot">
        <div>The first AI-driven NFT pool-based</div>
        <div>lending platform to lead a revolution</div>
        <div>of the NFT market</div>
      </div>
      {/*<div className="topBacStart">
        <img src={virtualland}/>
        <img src={solible}/>
        <img src={cryptokitties}/>
        <img src={raible}/>
        <img src={opensea}/>
      </div>*/}
      <div className="top-icon-bg">
          <img src={Icon1} alt=""/>
          <img src={Icon2} alt=""/>
          <img src={Icon3} alt=""/>
          <img src={Icon4} alt=""/>
          <img src={Icon5} alt=""/>



      </div>
      <div className="explore-button">
          <div className="button-border">
              Explore
          </div>
      </div>
      <div className="service" id="scc2">
        <img className="serviceImg" src={service} data-aos="fade-right" />
        <div className="service-content" data-aos="fade-up">
          <div className="service-content-title">
            <div>One-stop</div>
            <div>NFT financial services</div>
          </div>
          <div className="service-content-text">
            Banksy is an infrastructure that enables anyone to create, trade/auction and collateralize NFTs.
          </div>
          {/*<div className="learnMore">
            Learn more
            <span className="learnTo">→</span>
          </div>*/}

        </div>
      </div>
    </div>
  )
}

export default Top
