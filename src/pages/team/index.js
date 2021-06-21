import React from "react";
import './index.css'
import teamTitleImg from '../../image/team/teamTttleImg.png'
import ceo from '../../image/team/ceo.png'
import cto from '../../image/team/cto.png'

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
                    <div className="linkdin">Linkdin.</div>
                </div>
                <div className="teamContent-item">
                    <div className="teamContent-img">
                        <img src={cto} />
                    </div>
                    <div className="position">Co-founder CTO</div>
                    <div className="teamItem-name">Chris Su</div>
                    <div className="linkdin">Linkdin.</div>
                </div>
                <div className="teamContent-item">
                    <div className="teamContent-img">
                        <img />
                    </div>
                    <div className="position">Co-founder CMO</div>
                    <div className="teamItem-name">Terry Li</div>
                    <div className="linkdin">Linkdin.</div>
                </div>
            </div>
        </div>
    )
}

export default Team