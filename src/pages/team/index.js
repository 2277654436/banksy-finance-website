import React from "react";
import './index.css'
import teamTitleImg from '../../image/team/teamTttleImg.png'
import ceo from '../../image/team/1.png'
import cto from '../../image/team/2.png'
import cmo from '../../image/team/3.png'
import engineer1 from '../../image/team/4.png'
import engineer2 from '../../image/team/5.png'
import linkedin from '../../image/team/linkedin.png'
import github from '../../image/team/github-link.png'

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
                <div className="team-ring">
                </div>
                <div className="introduce">
                    We are all from first-line internet
                    companies with extensive experience
                    in blockchain technology.
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
                        </a>
                    </div>
                </div>

            </div>

            <div className="temContent" data-aos="fade-up" style={{marginTop:'35rem'}}>
                <div className="teamContent-item">
                    <div className="teamContent-img">

                    </div>
                    <div className="position"></div>
                    <div className="teamItem-name"></div>
                    <div className="linkdin">
                        <a href={"https://www.linkedin.com/in/clink-li-aa1ba418a/"} target='_blank'>
                        </a>
                    </div>
                </div>

                <div className="teamContent-item">
                    <div className="teamContent-img">
                        <img src={engineer1} />
                    </div>
                    <div className="position">Front end Engineer</div>
                    <div className="teamItem-name">PeiHuang Guo</div>
                    <div className="linkdin">
                        <a href={"https://github.com/Disperito"} target='_blank'>
                            <img src={github} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="teamContent-item">
                    <div className="teamContent-img">
                        <img src={engineer2} />
                    </div>
                    <div className="position">Front end Engineer</div>
                    <div className="teamItem-name">ChengYang Lin</div>
                    <div className="linkdin">
                        <a href={"https://github.com/linchengyang1116"} target='_blank'>
                            <img src={github} />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Team
