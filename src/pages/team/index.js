import React from "react";
import './index.css'
import teamTitleImg from '../../image/team/teamTttleImg.png'
import ceo from '../../image/team/ceo.png'
import cto from '../../image/team/cto.png'
import cmo from '../../image/team/cmo.png'
import linkedin from '../../image/team/linkedin.png'

function Team() {
    return (
        <div className="team">
            <div className="teamTitle" data-aos="fade-right">
                <div className="teamTitleImg">
                    <img src={teamTitleImg} />
                </div>
                <div className="teamTitleText">
                   TEAM
                </div>
            </div>
            <div className="temContent" data-aos="fade-up">
                <div className="teamContent-item">
                   <div className="teamContent-img">
                       <img src={ceo} />
                   </div>
                    <div className="position">Co-founder CEO</div>
                    <div className="teamItem-name">Clink Li</div>
                    <div className="linkdin">
                        <a href={"https://www.linkedin.com/in/clink-li-aa1ba418a/"} target='_blank'>
                            <img src={linkedin} />
                            Linkdin.
                        </a>
                    </div>
                </div>
                <div className="teamContent-item">
                    <div className="teamContent-img">
                        <img src={cto} />
                    </div>
                    <div className="position">Co-founder CTO</div>
                    <div className="teamItem-name">Chris Su</div>
                    <div className="linkdin">
                        <a href={"https://www.linkedin.com/in/chris-su-b78775119/"} target='_blank'>
                            <img src={linkedin} />
                            Linkdin.
                        </a>
                    </div>
                </div>
                <div className="teamContent-item">
                    <div className="teamContent-img">
                        <img src={cmo} />
                    </div>
                    <div className="position">Co-founder CMO</div>
                    <div className="teamItem-name">Terry Li</div>
                    <div className="linkdin">
                        <a href={"https://www.linkedin.com/in/terry-li-614512212/"} target='_blank'>
                            <img src={linkedin} />
                            Linkdin.
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team