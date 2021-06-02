import './index.css'
import {Row, Col} from 'antd';
import innovation1 from '../../image/systemInnovation/innovation1.png'
import innovation2 from '../../image/systemInnovation/innovation2.png'
import innovation3 from '../../image/systemInnovation/innovation3.png'
import innovation4 from '../../image/systemInnovation/innovation4.png'
import innovation5 from '../../image/systemInnovation/innovation5.png'
import innovation6 from '../../image/systemInnovation/innovation6.png'


function SystemInnovation() {
  return (
    <div className="systemInnovation">
      <div className="system">
        <div className="systemContent" data-aos="fade-right">
          <div className="systemContent-title"  id="oracle">
            NFT Evaluation System
          </div>
          <div className="systemContent-text1">
            Banksy has developed its own AI algorithm to evaluate NFTs from multiple dimensions
          </div>
          <div className="systemContent-text2">
            More objective NFT prices are made available to the NFT market through Banksy Oracle.
          </div>
          {/*<div className="learnMore">
            Learn more
            <span className="learnTo">→</span>
          </div>*/}
        </div>
        <div className="innovation">
          <div className="innovationContent">
            <div className="innovationContent-title" data-aos="fade-up" id="innovation">
              Highlights of Banksy
            </div>
            <div className="innovationContent-text" data-aos="fade-up">
              <Row>
                <Col xxl={8} xl={8} lg={8}>
                  <div className="innovationContent-item">
                    <img src={innovation1} />
                    <div className="item-text-title">
                      First NFT evaluation system
                    </div>
                    <div className="item-text-text">
                      The AI algorithm evaluates NFT prices based on multi-dimensional
                      information such as NFT attributes, scarcity, creator, and pricing
                      of similar pieces.
                    </div>
                  </div>
                </Col>
                <Col xxl={8} xl={8} lg={8}>
                  <div className="innovationContent-item">
                    <img src={innovation2} />
                    <div className="item-text-title">
                      First NFT Oracle
                    </div>
                    <div className="item-text-text">
                      Combined with the NFT evaluation system, the Banksy
                      oracle provides objective NFT prices to the NFT market.
                    </div>
                  </div>
                </Col>
                <Col xxl={8} xl={8} lg={8}>
                  <div className="innovationContent-item">
                    <img src={innovation3} />
                    <div className="item-text-title">
                      Innovative Vickery Auction
                    </div>
                    <div className="item-text-text">
                      Vickery Auction can objectively reflect the value
                      of NFT, avoiding fraudulent auctions and protecting
                      NFT investors.
                    </div>
                  </div>
                </Col>
                <Col xxl={8} xl={8} lg={8}>
                  <div className="innovationContent-item">
                    <img src={innovation4} />
                    <div className="item-text-title">
                      cross-chain aggregated transactions
                    </div>
                    <div className="item-text-text">
                      Banksy serves as an entrance for integrated NFT transactions
                      with low costs, seamlessly connecting all NFT platforms.
                    </div>
                  </div>
                </Col>
                <Col xxl={8} xl={8} lg={8}>
                  <div className="innovationContent-item">
                    <img src={innovation5} />
                    <div className="item-text-title">
                      Collateralizing NFT
                    </div>
                    <div className="item-text-text">
                      Users can pledge their NFTs on Banksy to borrow funds, enjoying
                      financial leverages.
                    </div>
                  </div>
                </Col>
                <Col xxl={8} xl={8} lg={8}>
                  <div className="innovationContent-item">
                    <img src={innovation6} />
                    <div className="item-text-title">
                      NFT fragmentation
                    </div>
                    <div className="item-text-text">
                      NFTs can be split to ERC20 Tokens, which can be traded on DEXs.
                      This lowers investment barriers for users.
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemInnovation
