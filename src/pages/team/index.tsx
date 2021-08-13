import React from 'react'
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
import styled from 'styled-components'
import BackgroundImage from '../../image/issues/background1.png'
import dotsBG from '../../image/solutions/dots.png'


const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  background: url(${dotsBG}) no-repeat;
  background-size: 50% 50%;
  background-position: top 50% left 0;

  @media screen and (max-width: 1100px) {
    height: 850px;
  }
`

const TeamContainer = styled.div`
  width: 1200px;
  height: 900px;
  margin: 0 auto;
  position: relative;
  background: url(${dotsBG}) no-repeat;
  background-size: 60% 60%;
  background-position: top -50% right 0;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: fit-content;
    position: relative;
    margin-bottom: 30vh;
    background-size: 100% 100%;
  }
`

const Title = styled.div`
  position: absolute;
  width: fit-content;
  top: 50px;
  
  img {
    width: 165px;
  }

  span {
    color: #fff;
    font-size: 64px;
    font-weight: 550;
    position: absolute;
    left: 20px;
    top: 80px;
  }

  div {
    position: absolute;
    color: #808080;
    width: 800px;
    font-size: 20px;
    top: 70px;
    left: 250px;
  }

  @media screen and (max-width: 1100px) {
    position: relative;
    width: 80vw;
    margin: 0;
    height: fit-content;
    left: 40px;

    img {
      position: absolute;
      top: -20px;
      width: 100px;
    }

    span {
      position: relative;
      top: 20px;
      left: 40px;
      width: fit-content;
      margin: 0;
      font-size: 41px;
    }

    div {
      position: absolute;
      width: 100%;
      top: 80px;
      font-size: 16px;
      left: 0px;
    }
  }
`

const MembersRowContainer = styled.div`
  position: relative;
  margin-top: 200px;

  .row__1, .row__2 {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .row__1 {
    width: 1160px;
    position: absolute;
    left: 0;
    top: 300px;
  }

  .row__2 {
    width: 865px;
    position: absolute;
    left: 0;
    top: 600px;
  }

  @media screen and (max-width: 1100px) {
    position: relative;
    margin-top: 0;

    .row__1{
      width: 100%;
      flex-direction: column;
      margin: 0 auto;
      position: absolute;
      top: 230px;
      left: 0;
    } 
    .row__2 {
      width: 100%;
      flex-direction: column;
      margin: 0 auto;
      position: absolute;
      left: 0;
      top: 650px;
    }
  }
`

const MemberContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 40px;
  z-index: 2;
  font-size: 18px;
  color: #B2B2B2;
  text-align: center;
  
  .data {

    .name {
      margin-top: 10px;
    }

    .position {
      margin-top: 10px;
      font-size: 16px;
    }
  }
  
  @media screen and (max-width: 1100px) {
    width: 100%;
    position: relative;
    align-items: center;
    margin-bottom: 5vh;
    font-size: 18px;
    display: flex;
    align-items: center;
    flex-direction: row;

    .data {
      text-align: left;
      
      .name {
        margin-top: 5px;
      }

      .position {
        margin-top: 5px;
        font-size: 16px;
      }
    }
  }
`

const AvatarBox = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .avatar-bg {
    width: 123px;
    height: 123px;
    border-radius: 123px;
    background: linear-gradient(to right, #7800FF, #5842FF, #00FFFF);
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 110px;
  
  @media screen and (max-width: 1100px) {
    width: 100px;
    height: 100px;
    margin-left: 0;
    margin-right: 20px;
  }
`

const ExternalLink = styled.a`
  margin-top: 10px;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #fff;
  }

  img {
    width: 20px;
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 1100px) {
    display: block;
    
    img {
      width: 20px;
    }
  }
`

type TeamMember = {
  name: string
  avatar: string
  position: string
  externalLinks: {
    icon: string
    link: string
  }
}

const Member: React.FC<TeamMember> = ({
  name, avatar, externalLinks, position
}) => {
  return (
    <MemberContainer key={name}>
      <div className="avatar-bg">
        <Avatar src={avatar} alt={name} />
      </div>
      <div className="data">
        <div className="name">{name}</div>
        <div className="position">{position}</div>
        <ExternalLink href={externalLinks.link}>
          <img src={externalLinks.icon} alt="" />
        </ExternalLink>
      </div>
    </MemberContainer>
  )
}

const Team: React.FC = () => {
  const MEMBERS_ROW1: TeamMember[] = [
    {
      name: 'Clink Li',
      position: 'Co-founder CEO',
      avatar: ceo,
      externalLinks: { icon: linkedin, link: 'https://www.linkedin.com/in/clink-li-aa1ba418a/' }
    },
    {
      name: 'Chris Su',
      position: 'Co-founder CTO',
      avatar: cto,
      externalLinks: { icon: linkedin, link: 'https://www.linkedin.com/in/chris-su-b78775119/' }
    },
    {
      name: 'Terry Li',
      position: 'Co-founder CMO',
      avatar: cmo,
      externalLinks: { icon: linkedin, link: 'https://www.linkedin.com/in/terry-li-614512212/' }
    },
    {
      name: 'Wei Jiang',
      position: 'Blockchain Architect',
      avatar: architect,
      externalLinks: { icon: github, link: 'https://github.com/GleipnirJ/' }
    },
  ]

  const MEMBERS_ROW2: TeamMember[] = [
    // {
    //   name: 'Wei Jiang',
    //   position: 'Blockchain Architect',
    //   avatar: architect,
    //   externalLinks: { icon: github, link: 'https://github.com/GleipnirJ/' }
    // },
    {
      name: 'Roger Luo',
      position: 'Chief Algorithm Expert',
      avatar: algorithm,
      externalLinks: { icon: github, link: 'https://github.com/luojie1024/' }
    },
    {
      name: 'PeiHuang Guo',
      position: 'Front-End Engineer',
      avatar: engineer1,
      externalLinks: { icon: github, link: 'https://github.com/Disperito' }
    },
    {
      name: 'ChengYang Lin',
      position: 'Front-End Engineer',
      avatar: engineer2,
      externalLinks: { icon: github, link: 'https://github.com/linchengyang1116' }
    },
  ]

  return (
    <div className="section">
      <Wrapper>
        <TeamContainer>
          <Title data-aos="fade-in">
            <img src={teamTitleImg} className="team-title-img" alt="banksy team" />
            <span>TEAM</span>
            <div>
              We are an international team from well-known companies such as IBM, Tencent, and Sangfor.
              We have rich experience in artificial intelligence and DeFi product development, as well as mature
              product operation capabilities.
            </div>
          </Title>

          <MembersRowContainer>
            <div className="row__1" data-aos="fade-in">
              {
                MEMBERS_ROW1.map(member => (<Member key={member.name} {...member} />))
              }
            </div>
            <div className="row__2" data-aos="fade-in">
              {
                MEMBERS_ROW2.map(member => (<Member key={member.name} {...member} />))
              }
            </div>
          </MembersRowContainer>
        </TeamContainer>
      </Wrapper>
    </div>
  )
}

export default Team
