import React from "react";
import './index.css'
import teamTitleImg from '../../image/team/teamTttleImg.png'
import ceo from '../../image/team/1.png'
import cto from '../../image/team/2.png'
import cmo from '../../image/team/3.png'
import engineer1 from '../../image/team/4.png'
import engineer2 from '../../image/team/5.png'
import architect from '../../image/team/6.png'
import algorithm from '../../image/team/7.png'
import linkedin from '../../image/team/linkedin.png'
import github from '../../image/team/github-link.png'
import clsx from "clsx";

const Team = ({ active }) => {
  return (
    <div className="team section">
      <div className="team-title">
        <img src={teamTitleImg} className="team-title-img"/>
        <div className="team-title-text">
          TEAM
        </div>
        <div className="introduce">
          We are all from first-line internet
          companies with extensive experience
          in blockchain technology.
        </div>
      </div>

      <div className={clsx('team-row-container', active && 'aos-animate')} data-aos="flip-down">
        <div className={clsx('team-row')}>
          <div className="team-item">
            <div className="team-item-img">
              <img src={ceo}/>
            </div>
            <div className="position">Co-founder CEO</div>
            <div className="team-item-name">Clink Li</div>
            <div className="linkin">
              <a href={"https://www.linkedin.com/in/clink-li-aa1ba418a/"} target='_blank'>
                <img src={linkedin}/>
              </a>
            </div>
          </div>

          <div className="team-item">
            <div className="team-item-img">
              <img src={cto}/>
            </div>
            <div className="position">Co-founder CTO</div>
            <div className="team-item-name">Chris Su</div>
            <div className="linkin">
              <a href={"https://www.linkedin.com/in/chris-su-b78775119/"} target='_blank'>
                <img src={linkedin}/>
              </a>
            </div>
          </div>
          <div className="team-item">
            <div className="team-item-img">
              <img src={cmo}/>
            </div>
            <div className="position">Co-founder CMO</div>
            <div className="team-item-name">Terry Li</div>
            <div className="linkin">
              <a href={"https://www.linkedin.com/in/terry-li-614512212/"} target='_blank'>
                <img src={linkedin}/>
              </a>
            </div>
          </div>
        </div>

        <div className={clsx('team-row2')}>
          <div className="team-item">
            <div className="team-item-img">
              <img src={architect}/>
            </div>
            <div className="position">Blockchain Architect</div>
            <div className="team-item-name">Wei Jiang</div>
            <div className="linkin">
              <a href={"https://github.com/GleipnirJ"} target='_blank'>
                <img src={github} alt=""/>
              </a>
            </div>
          </div>

          <div className="team-item">
            <div className="team-item-img">
              <img src={algorithm}/>
            </div>
            <div className="position">Chief Algorithm Expert</div>
            <div className="team-item-name">Roger Luo</div>
            <div className="linkin">
              <a href={"https://github.com/luojie1024"} target='_blank'>
                <img src={github} alt=""/>
              </a>
            </div>
          </div>

          <div className="team-item">
            <div className="team-item-img">
              <img src={engineer1}/>
            </div>
            <div className="position">Front-End Engineer</div>
            <div className="team-item-name">PeiHuang Guo</div>
            <div className="linkin">
              <a href={"https://github.com/Disperito"} target='_blank'>
                <img src={github} alt=""/>
              </a>
            </div>
          </div>
          <div className="team-item">
            <div className="team-item-img">
              <img src={engineer2}/>
            </div>
            <div className="position">Front-End Engineer</div>
            <div className="team-item-name">ChengYang Lin</div>
            <div className="linkin">
              <a href={"https://github.com/linchengyang1116"} target='_blank'>
                <img src={github} alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Team
