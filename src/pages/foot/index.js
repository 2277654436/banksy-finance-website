import './index.css'
import github from '../../image/foot/Github_logo.png'
import fly from '../../image/foot/aircraft_logo.png'
import twitter from '../../image/foot/Twitter_logo.png'
import email from '../../image/foot/e-mail_logo.png'

function scrollToPart(anchorName){
  if (anchorName) {
    let anchorElement = document.getElementById(anchorName);
    if(anchorElement) {
      anchorElement.scrollIntoView(
          {behavior: 'smooth',block:'center'}
      );
    }
  }
}

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
            <a href={'https://github.com/Banksy-Finance'} target='_blank'><img src={github}/></a>
            <a href={'https://t.me/Banskyfinance'} target='_blank'><img src={fly}/></a>
            <a href={'https://twitter.com/banksy_finance'} target='_blank'><img src={twitter}/></a>
            <a href={'clink.banksy@gmail.com'} target='_blank'><img src={email}/></a>
          </div>
        </div>
        <div className="operating">
          <div className="genarel">
            <div>GENERAL</div>
            <div><a onClick={()=>scrollToPart('scc1')}>Home</a></div>
            <div><a onClick={()=>scrollToPart('scc2')}>Hub</a></div>
            <div><a onClick={()=>scrollToPart('oracle')}>Oracle</a></div>
            <div><a onClick={()=>scrollToPart('innovation')}>Innovation</a></div>
            <div><a onClick={()=>scrollToPart('types')}>Types</a></div>
            <div><a onClick={()=>scrollToPart('team')}>Team</a></div>
          </div>
          <div className="learn">
            <div>LEARN</div>
            <div>WHITEPAPER</div>
            <div>COMMUNITY</div>
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
