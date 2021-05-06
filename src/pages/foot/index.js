import './index.css'
import github from '../../image/foot/Github_logo.png'
import fly from '../../image/foot/aircraft_logo.png'
import twitter from '../../image/foot/Twitter_logo.png'
import email from '../../image/foot/e-mail_logo.png'

function Foot() {
  return(
    <div className="foot">
      <div className="footLine" />
      <div className="footContent">
        <div className="footContent-main">
          <span>Banksy</span>
          <span/>
          <span>Contact us</span>
          <div className="footContent-main-link">
            <img src={github}/>
            <img src={fly}/>
            <img src={twitter}/>
            <img src={email}/>
          </div>
        </div>
        <div className="operating">
          <div className="genarel">
            <div>Genarel</div>
            <div>Home</div>
            <div>Features</div>
            <div>Oracle</div>
            <div>NFT-Types</div>
          </div>
          <div className="learn">
            <div>Learn</div>
            <div>Whitepaper</div>
            <div>Community</div>
          </div>
        </div>
      </div>
      <div className="footLine" />
      <div className="foot-time">
        Copyright 2021-2030 aonr. All rights reserved
      </div>
    </div>
  )
}

export default Foot
