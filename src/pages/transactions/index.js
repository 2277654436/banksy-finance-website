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
      <div className="transactionsTitle" data-aos="fade-up" id="types">
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
        <div className="teamText" data-aos="fade-right">
          <div className="teamText-title" id="team">
            Team
          </div>
          <div className="teamText-text">
            Banksy team members are young and passionate research enthusiasts
            in the blockchain space
          </div>
        </div>
        <div className="teamContent">
          <div className="teamItem" data-aos="fade-up">
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
              Clink worked at Sangfor Technologies Inc as a product manager
              and algorithm security engineer, specializing in algorithms and
              artificial intelligence. In 2018, Clink developed a software that uses
              AI to create art pieces. Clink is fascinated by the idea of combining
              blockchain technology, art, and finance, so he launched Banksy.
            </div>
          </div>
          <div className="teamItem" data-aos="fade-up">
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
              Chris worked as a core architect at NetDragon
              Websoft Inc. His expertise includes distributed computing,
              distributed storage, and network protocol development.
              Chris is experienced in Ethereum, Substrate development
              with Node.js and Rust.
            </div>
          </div>
          <div className="teamItem" data-aos="fade-up">
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
              Terry worked as a project manager at Bell Sports.
              He is experienced in managing project management
              and building partnerships. He is responsible for
              fund raising and marketing.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions
