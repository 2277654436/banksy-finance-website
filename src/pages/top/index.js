import './index.css'
import service from '../../image/service/service.png'

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
          Decentralized NFT Financial Center.
        </div>
      </div>
      <div className="top-foot">
        <div>Unleashing the full value of NFT finance from the</div>
        <div>asset to value portal</div>
      </div>
      <div className="service">
        <img src={service} />
        <div className="service-content">
          <div className="service-content-title">
            <div>One-stop</div>
            <div>NFT financial services</div>
          </div>
          <div className="service-content-text">
            Banksy is an open NFT ecosystem and infrastructure that
            transfers open physical assets to the value of the chain. It
            will enable anyoneto create NFTs on the platform and use
            NFTs to initiate auctions, transactions, lending and mining.
          </div>
          <div className="learnMore">
            Learn more →
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top
