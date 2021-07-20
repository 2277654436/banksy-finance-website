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

const TeamContainer = styled.div`
  width: 100%;
  height: 100vh;
  font-family: 'SourceHanSansCN-Normal';
  position: relative;

  @media screen and (max-width: 1100px) {
    height: fit-content;
    position: relative;
    margin-bottom: 30vh;
  }
`

const Title = styled.div`
  position: absolute;
  left: 12vw;
  top: 10vh;
  width: fit-content;

  img {
    width: 10vw;
  }

  span {
    color: #fff;
    font-size: 4vw;
    position: absolute;
    bottom: 10vh;
    left: 3vw;
    font-weight: 550;
  }

  div {
    position: relative;
    color: #808080;
    width: 25vw;
    font-family: SourceHanSansCN-Light;
    font-size: 1.2vw;
    top: 8vh;
  }

  @media screen and (max-width: 1100px) {
    position: relative;
    width: 80vw;
    margin: 0;
    height: fit-content;

    img {
      position: absolute;
      top: -2vw;
      width: 28vw;
    }

    span {
      position: relative;
      top: 0;
      left: 8vw;
      width: fit-content;
      margin: 0;
      font-size: 12vw;
    }

    div {
      position: relative;
      width: 100%;
      margin: 5vh auto 0 auto;
      top: 0;
      font-size: 5vw;
    }
  }
`

const MembersRowContainer = styled.div`
  position: relative;
  margin-top: 10vh;

  .row__1, .row__2 {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .row__1 {
    width: 45vw;
    margin-left: 40vw;
  }

  .row__2 {
    top: 5vh;
    width: 61.5vw;
    margin-left: 23vw;
  }

  @media screen and (max-width: 1100px) {
    position: relative;
    margin-top: 16vh;

    .row__1, .row__2 {
      flex-direction: column;
      width: 65vw;
      margin: 0 auto;
    }
  }
`

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 10vw;
  font-family: SourceHanSansCN-Light;
  z-index: 2;
  font-size: 1vw;
  color: #808080;

  .name {
    margin-top: 0.7vw;
  }

  .position {
    margin-top: 1vh;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    position: relative;
    align-items: center;
    margin-bottom: 5vh;
    font-size: 4vw;
  }
`

const Avatar = styled.img`
  object-fit: cover;
  width: 100%;
  height: 14vw;

  @media screen and (max-width: 1100px) {
    height: 80vw;
  }
`

const ExternalLink = styled.a`
  margin-top: 1rem;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;

  &:hover {
    color: #fff;
  }

  img {
    width: 1vw;
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 1100px) {
    img {
      width: 4vw;
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
      <Avatar src={avatar} alt={name} />
      <div className="name">{name}</div>
      <div className="position">{position}</div>
      <ExternalLink href={externalLinks.link}>
        <img src={externalLinks.icon} alt="" />
      </ExternalLink>
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
  ]

  const MEMBERS_ROW2: TeamMember[] = [
    {
      name: 'Wei Jiang',
      position: 'Blockchain Architect',
      avatar: architect,
      externalLinks: { icon: github, link: 'https://github.com/GleipnirJ/' }
    },
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
      <TeamContainer>
        <Title data-aos="flip-left">
          <img src={teamTitleImg} className="team-title-img" alt="banksy team" />
          <span>TEAM</span>
          <div>
            We are all from first-line internet
            companies with extensive experience
            in blockchain technology.
          </div>
        </Title>

        <MembersRowContainer data-aos="flip-down">
          <div className="row__1">
            {
              MEMBERS_ROW1.map(member => (<Member key={member.name} {...member} />))
            }
          </div>
          <div className="row__2">
            {
              MEMBERS_ROW2.map(member => (<Member key={member.name} {...member} />))
            }
          </div>
        </MembersRowContainer>
      </TeamContainer>
    </div>
  )
}

export default Team
