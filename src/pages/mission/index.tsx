import React from 'react'
import missionTitleImg from '../../image/mission/missionTitleImg.png'
import missionBG from '../../image/mission/missionBG.png'
import missionRing from '../../image/mission/mission-ring.png'
import styled, { keyframes } from 'styled-components'

const MissionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url("../../image/mission/missionBac.png") no-repeat center;
  background-size: 100% 100%;
  position: relative;
  padding-top: 24vh;

  @media screen and (max-width: 1100px) {
    height: 233vw;
    padding-top: 0;
  }
`

const Title = styled.div`
  position: relative;
  left: 10vw;

  img {
    position: absolute;
    top: -10vh;
    width: 6.6vw;
  }

  p {
    width: 31vw;
    position: relative;
    left: 3.6vw;
    font-family: SourceHanSansCN-Bold;
    font-size: 4.5vw;
    color: #fff;
    font-weight: 600;
    z-index: 9;
  }

  @media screen and (max-width: 1100px) {
    position: relative;
    top: 10vh;
    left: 0;
    margin: 0 10vw;
    width: 20vw;
    height: 24vw;
    
    p {
      font-size: 9vw;

      position: absolute;
      top: 5vw;
      left: 5vw;
    }
    
    img {
      position: relative;
      top: 0;
      left: 0;
      height: 100%;
      width: 9vw;
    }
  }
`

const Content = styled.div`
  position: relative;
  left: 9.6vw;
  width: 31vw;
  font-size: 1.6vw;
  font-family: 'SourceHanSansCN-Light';
  line-height: 5vh;
  color: #808080;
  margin-top: 5vh;

  @media screen and (max-width: 1100px) {
    position: relative;
    width: 80%;
    left: 0;
    top: 15vh;
    margin: 0 auto;
    line-height: 12vw;
    font-size: 6vw;
  }
`

const Spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`

const SpinningImage = styled.img`
  width: 47vw;
  height: 47vw;
  background-size: 100% 100%;
  position: absolute;
  top: 3vh;
  right: 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Spin} 30s infinite linear!important;

  @media screen and (max-width: 1100px) {
    top: 130vw;
    left: 0;
    width: 95vw;
    height: 100vw;
    animation: none!important;
  }
`

const RingImage = styled.img`
  height: 90vh;
  transform: rotate(-6deg);
  position: absolute;
  top: 4vh;
  right: 5vw;
  z-index: 5;
`

const Mission: React.FC = () => {
  return (
    <div className="section">
      <MissionContainer id="MissionContainer" >
        <Title data-aos="fade-down">
          <p>MISSION</p>
          <img src={missionTitleImg} alt="mission"  />
        </Title>

        <Content data-aos="fade-right">
          Provide a safe and reliable lending environment for
          the NFT market, solve the problem of NFT liquidity,
          and fully release the value of NFT
        </Content>

        <SpinningImage src={missionBG} data-aos="zoom-in" />

        <RingImage src={missionRing} />
      </MissionContainer>
    </div>
  )
}

export default Mission
