import './index.css'
import service from '../../image/service/service.png'
import topBac from '../../image/top/topBac.png'
import virtualland from '../../image/top/virtualland.png'
import solible from '../../image/top/solible.png'
import cryptokitties from '../../image/top/cryptokitties.png'
import raible from '../../image/top/rarible.png'
import opensea from '../../image/top/opensea.png'


function Top() {
  return(
    <div className="top">
      <div className="top-title">
        The First Decentralized NFT Financial Hub
      </div>
      <div className="top-content">
        <div className="top-content-child">
          Decentralized
        </div>
        <div className="top-content-child">
          NFT Financial Center.
        </div>
      </div>
      <div className="topBac">
        <img src={topBac} />
      </div>
      <div className="top-foot">
        <div>Unleashing the full potential of NFT</div>
        <div>through finance sercives</div>
      </div>
      <div className="topBacStart">
        <img src={virtualland}/>
        <img src={solible}/>
        <img src={cryptokitties}/>
        <img src={raible}/>
        <img src={opensea}/>
      </div>
      <div className="service">
        <img src={service} data-aos="fade-right" />
        <div className="service-content" data-aos="fade-left">
          <div className="service-content-title">
            <div>One-stop</div>
            <div>NFT financial services</div>
          </div>
          <div className="service-content-text">
            Banksy is an infrastructure that enables anyone to create, trade/auction and collateralize NFTs.
          </div>
          <div className="learnMore">
            Learn more
            <span className="learnTo">→</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Top
