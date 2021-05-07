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
          <div className="systemContent-title">
            NFT Value Assessment System
          </div>
          <div className="systemContent-text1">
            Banksy has developed its own artificial intelligence algorithm to evaluate the
            value of NFT assets in multiple dimensions and to make objective and realistic
            NFT prices publicly available to the NFT market through Banksy Oracle.
          </div>
          <div className="systemContent-text2">
            Reduce false NFT offers and fraudulent transactions and promote a healthy
            NFT market.
          </div>
          <div className="learnMore">
            Learn more
            <span className="learnTo">→</span>
          </div>
        </div>
        <div className="innovation">
          <div className="innovationContent">
            <div className="innovationContent-title" data-aos="fade-up">
              Banksy's innovation
            </div>
            <div className="innovationContent-text" data-aos="fade-up">
              <Row>
                <Col span={8}>
                  <div className="innovationContent-item">
                    <img src={innovation1} />
                    <div className="item-text-title">
                      First NFT valuation system
                    </div>
                    <div className="item-text-text">
                      The AI algorithm evaluates NFT
                      prices based on multi-dimensional
                      information such as NFT attributes,
                      scarcity, creator, and pricing of
                      similar or adjacent collections,
                      helping users make relatively
                      accurate judgments.
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="innovationContent-item">
                    <img src={innovation2} />
                    <div className="item-text-title">
                      First NFT Oracle
                    </div>
                    <div className="item-text-text">
                      Combined with the NFT valuation
                      system, Banksy Oracle provides
                      objective and realistic NFT prices
                      to the NFT market, promoting a
                      thriving NFT trading market.
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="innovationContent-item">
                    <img src={innovation3} />
                    <div className="item-text-title">
                      First Vickers Auction
                    </div>
                    <div className="item-text-text">
                      The Vickrey auction mechanism
                      can reflect the value of NFT
                      more objectively, avoid fraudulent
                      auctions and protect NFT investors.
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="innovationContent-item">
                    <img src={innovation4} />
                    <div className="item-text-title">
                      cross-chain aggregated
                      transactions
                    </div>
                    <div className="item-text-text">
                      The Banksy aggregation platform will
                      serve as an entry point for integrated
                      NFT transactions, seamlessly
                      connecting all NFT platforms and
                      maximizing transaction cost savings
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="innovationContent-item">
                    <img src={innovation5} />
                    <div className="item-text-title">
                      NFT mortgage lending
                    </div>
                    <div className="item-text-text">
                      Users pledge their NFTs on the
                      Banksy platform to get loans that
                      help them activate idle on-chain
                      assets and get better cash flow.
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="innovationContent-item">
                    <img src={innovation6} />
                    <div className="item-text-title">
                      NFT cutting
                    </div>
                    <div className="item-text-text">
                      Banksy supports the transformation
                      of NFT split into ERC20 Tokens.
                      tokens can be traded on a
                      decentralized trading platform,
                      and users own part of NFT by
                      holding tokens, lowering the
                      investment threshold of NFT and
                      improving the liquidity of NFT.
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
