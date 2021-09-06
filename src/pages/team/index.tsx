import React from 'react'
import ceo from '../../image/team/1.png'
import TerryLi from '../../image/team/cmo1.png'
import cto from '../../image/team/2.png'
import engineer1 from '../../image/team/4.png'
import engineer2 from '../../image/team/5.png'
import architect from '../../image/team/6.png'
import algorithm from '../../image/team/7.png'
import linkedin from '../../image/team/linkedin.png'
import github from '../../image/team/github-link.png'
import styled from 'styled-components'
import dotsBG from '../../image/solutions/dots.png'


const Wrapper = styled.div`
  width: 100%;
  background: url(${dotsBG}) no-repeat;
  background-size: 50% 50%;
  background-position: top 50% left 0;

  @media screen and (max-width: 1100px) {
    height: 850px;
  }
`

const TeamContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  background: url(${dotsBG}) no-repeat;
  background-size: 60% 60%;
  background-position: top -50% right 0;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: fit-content;
    position: relative;
    margin-top: 10vh;
    margin-bottom: 30vh;
    background-size: 100% 100%;
  }
`

const Title = styled.div`
  //position: absolute;
  width: fit-content;
  //top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  img {
    width: 165px;
  }

  span {
    color: #fff;
    font-size: 64px;
    font-weight: 550;
    //position: absolute;
    //left: 550px;
    //top: 80px;
  }

  div {
    //position: absolute;
    text-align: center;
    color: #808080;
    width: 800px;
    font-size: 20px;
    top: 190px;
  }

  @media screen and (max-width: 1100px) {
    position: relative;
    width: 80vw;
    margin: 0 auto;
    height: fit-content;
    margin-bottom: 10vh;

    img {
      position: absolute;
      top: -20px;
      width: 100px;
    }

    span {
      position: relative;
      width: fit-content;
      margin: 0;
      font-size: 41px;
    }

    div {
      //position: absolute;
      width: 100%;
      top: 80px;
      font-size: 16px;
      left: 0px;
    }
  }
`

const MembersRowContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .row__1, .row__2 {
    display: flex;
    justify-content: space-between;
  }

  .row__1 {
    width: 1160px;
    margin-top: 40px;
  }

  .row__2 {
    width: 880px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1100px) {
    position: relative;
    margin-top: 0;

    .row__1, .row__2 {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
    }
    
    .row__2 {
      margin-bottom: 0;
    }
  }
`

const MemberContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  z-index: 2;
  font-size: 18px;
  color: #B2B2B2;
  text-align: center;
  height: 250px;
  overflow-y: hidden;

  &:hover {
    border-radius: 10px;
    background-image: linear-gradient(to top, rgba(72, 72, 79, 0.3) 0%, #33333a 100%);
    background-repeat: repeat;
  }
  
  .wrapper {
    height: fit-content;
    transition: all 0.2s;
    position: relative;
    bottom: 0;
    
    &:hover {
      position: relative;
      bottom: 260px;
    }
    
    .page-1, .page-2 {
      width: 220px;
      height: 260px;
      padding: 20px 0;
    }
    
    .page-1 {
      .data {
        .name {
          margin-top: 10px;
        }

        .position {
          margin-top: 10px;
          font-size: 16px;
        }
      }
    }
    
    .page-2 {
      .title-row {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        
        .avatar {
          width: 60px;
          height: 60px;
          border-radius: 30px;
          margin-right: 10px;
        }
        
        .name-and-position {
           margin-right: 10px;
           
          .name {
             font-size: 18px;
             font-weight: 600;
          }
          
          .position {
            display: none;
          }                
        }

      }
      
      .description {
        font-size: 13px;
        text-align: start;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    position: relative;
    align-items: center;
    margin-bottom: 5vh;
    font-size: 18px;
    margin-left: 0;
    padding: 0!important;

    &:hover {
      background-image: none;
    }

    .wrapper:hover {
      bottom: 0;
    }

    .page-1 {
      display: none;
      height: 0 !important;
    }

    &, .wrapper, .page-2 {
      width: 80vw !important;
      height: fit-content !important;
    }
 
    .page-2 {
      .name-and-position {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
        .position {
          display: block !important;
          color: #999;
          font-size: 12px;
        }
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
  description: string
}

const Member: React.FC<TeamMember> = ({
  name, avatar, externalLinks, position, description
}) => {
  return (
    <MemberContainer key={name}>
      <div className="wrapper">
        <div className="page-1">
          <div className="avatar-bg">
            <Avatar src={avatar} alt={name} />
          </div>
          <div className="data">
            <div className="name">{name}</div>
            <div className="position">{position}</div>
          </div>
        </div>
        <div className="page-2">
          <div className="title-row">
            <img src={avatar} alt={name} className={'avatar'} />
            <div className="name-and-position">
              <div className="name">{name}</div>
              <div className="position">{position}</div>
            </div>
            <ExternalLink href={externalLinks.link} target={'__blank'} rel="noreferrer">
              <img src={externalLinks.icon} alt="" />
            </ExternalLink>
          </div>
          <div className="description">
            {description}
          </div>
        </div>
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
      externalLinks: { icon: linkedin, link: 'https://www.linkedin.com/in/clink-li-aa1ba418a/' },
      description: 'Clink had worked as both algorithm engineer and product manager for a Chinese tech firm. He is proficient in artificial intelligence algorithms.'
    },
    {
      name: 'Chris Su',
      position: 'Co-founder CTO',
      avatar: cto,
      externalLinks: { icon: linkedin, link: 'https://www.linkedin.com/in/chris-su-b78775119/' },
      description: 'Chris worked as software architect in two Chinese tech firms. He’s experienced in distributed computing, storage, network protocol, Web3, Ethereum, and Substrate.'
    },
    {
      name: 'Terry Li',
      position: 'Co-founder CMO',
      avatar: TerryLi,
      externalLinks: { icon: linkedin, link: 'https://www.linkedin.com/in/文瑞-terry-李-740151220' },
      description: 'Terry worked as a project manager for European and American multinational companies. Extensive experience in project management and business development. '
    },
    {
      name: 'Wei Jiang',
      position: 'Blockchain Architect',
      avatar: architect,
      externalLinks: { icon: github, link: 'https://github.com/GleipnirJ/' },
      description: 'Wei is the former Lead Engineer and Project Manager of a infrastructure technology company, specializing in embedded software, communication protocol, software development and software process management\n'
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
      externalLinks: { icon: github, link: 'https://github.com/luojie1024/' },
      description: 'Roger worked as a Data Scientist for IBM GCG Data and AI labs. He contributed to Google TensorFlow framework and had experience implementing AI model for housing loan risk prediction. He’s Proficient in C++, Java, Python, etc.'
    },
    {
      name: 'Disperito Guo',
      position: 'Front-End Engineer',
      avatar: engineer1,
      externalLinks: { icon: github, link: 'https://github.com/Disperito' },
      description: 'Disperito, Full stack development engineer, Experienced in Java/React/Vue/Flutter,  blockchain and cross-chain decentralized app development. '
    },
    {
      name: 'Scottlin Lin',
      position: 'Front-End Engineer',
      avatar: engineer2,
      externalLinks: { icon: github, link: 'https://github.com/linchengyang1116' },
      description: 'Scottlin, Experienced front-end engineer, proficient in vue, react and other front-end frameworks, with rich experience in large-scale project development.'
    },
  ]

  return (
    <div className="section">
      <Wrapper>
        <TeamContainer>
          <Title>
            {/*<img src={teamTitleImg} className="team-title-img" alt="banksy team" />*/}
            <span>TEAM</span>
            <div>
              We are an international team from well-known companies such as IBM, Tencent, and Sangfor.
              We have rich experience in artificial intelligence and DeFi product development, as well as mature
              product operation capabilities.
            </div>
          </Title>

          <MembersRowContainer>
            <div className="row__1" data-aos="fade-up">
              {
                MEMBERS_ROW1.map(member => (<Member key={member.name} {...member} />))
              }
            </div>
            <div className="row__2" data-aos="fade-up">
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
