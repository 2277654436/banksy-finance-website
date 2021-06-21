import React from "react";
import './index.css'
import teamTitleImg from '../../image/team/teamTttleImg.png'

function Team() {
    return (
        <div className="team">
            <div className="teamTitle">
                <div className="teamTitleImg">
                    <img src={teamTitleImg} />
                </div>
                <div className="teamTitleText">
                   TEAM
                </div>
            </div>
        </div>
    )
}

export default Team