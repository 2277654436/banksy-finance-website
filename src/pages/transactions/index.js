import './index.css'
import Digitalartwork from '../../image/transactionis/Digitalartwork.png'
import GameVirtualLand from '../../image/transactionis/GameVirtualLand.png'
import AudioVideoImg from '../../image/transactionis/AudioVideo.png'
import Physicaleducation from '../../image/transactionis/Physicaleducation.png'
import ceo from '../../image/transactionis/ceo.png'
import cto from '../../image/transactionis/cto.png'
import coo from '../../image/transactionis/coo.png'

function Transactions() {
  return (
    <div className="transactions">
      <div className="transactionsTitle">
        Support multiple types of
        NFT transactions
      </div>
      <div className="transactionsContent">
        <img className="GameVirtualLand" src={GameVirtualLand}/>
        <img className="AudioVideo" src={AudioVideoImg}/>
        <img className="Physicaleducation" src={Physicaleducation}/>
      </div>
      <img className="Digitalartwork" src={Digitalartwork}/>
      <div className="team">
        <div className="teamText">
          <div className="teamText-title">
            Team
          </div>
          <div className="teamText-text">
            Banksy team members are young and passionate research enthusiasts
            in the blockchain space
          </div>
        </div>
        <div className="teamContent">
          <div className="teamItem">
            <div className="teamItem-img">
              <img src={ceo} />
            </div>
            <div className="teamItem-position">
              Co-founder CEO
            </div>
            <div className="teamItem-name">
              Clink Li
            </div>
            <div className="teamItem-text">
              Banksy Finance project initiator, worked as
              an algorithm engineer and product manager
              in a large Internet company, specializing in
              artificial intelligence algorithms. 2018 has
              developed AI + art creation software, with
              in-depth research and understanding of art
              creation and computer cutting-edge
              technology. 2019 entered the blockchain
              industry, in-depth research on the
              combination of blockchain technology, art
              and finance. So launched Banksy Finance.
            </div>
          </div>
          <div className="teamItem">
            <div className="teamItem-img">
              <img src={cto} />
            </div>
            <div className="teamItem-position">
              Co-founder CTO
            </div>
            <div className="teamItem-name">
              Chris Su
            </div>
            <div className="teamItem-text">
              Chris has worked as a core architect for a
              major gaming company.Expert in distributed
              computing, distributed storage, and network
              protocol development.
              Proficient in c, java, nodejs, rust, etc., and
              architecting and implementing distributed
              systems.
              Extensive experience in Web3, Ethereum,
              Substrate development.
            </div>
          </div>
          <div className="teamItem">
            <div className="teamItem-img">
              <img src={coo} />
            </div>
            <div className="teamItem-position">
              Co-founder COO
            </div>
            <div className="teamItem-name">
              Terry Li
            </div>
            <div className="teamItem-text">
              Terry has worked as a project manager
              for multinational companies in the US and
              Europe. He has extensive experience in
              project management, partner building and
              offshore companies. He maintains contact
              with investors and is responsible for fund
              raising, marketing and resource integration.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions
