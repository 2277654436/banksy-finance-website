import React from 'react'
import RoadMapImg from '../../image/roadmap/roadmapImg-fix.png'
import styled from 'styled-components'

import Background from '../../image/roadmap/mapBac.png'

const RoadmapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  user-select: none;

  @media screen and (max-width: 1100px) {
    height: fit-content;
  }
`

const Title = styled.div`
  position: absolute;
  color: #fff;
  font-size: 4vw;
  font-weight: 550;
  top: 5vh;
  right: 15vw;
  z-index: 9;

  @media screen and (max-width: 1100px) {
    position: relative;
    left: 0;
    top: 0;
    text-align: center;
    font-size: 12vw;
    margin-top: 10vh;
  }
`

const BackgroundImage = styled.img`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  @media screen and (max-width: 1100px) {
    transform: rotate(90deg);
    transform-origin: 0 0;
    height: 100vw;
    width: calc(100vw * 3994 / 2210);
    object-fit: cover;
    left: 100vw;
    top: 20vw;
  }
`

const Image = styled.img`
  position: relative;
  left: 8vw;
  top: 15vh;
  width: 88vw;
  z-index: 99;

  @media screen and (max-width: 1100px) {
    transform: rotate(90deg);
    transform-origin: 0 0;
    height: 100vw;
    width: calc(100vw * 6067 / 2849);
    object-fit: cover;
    position: relative;
    left: 100vw;
    margin-bottom: calc(100vw * 6067 / 2849 - 100vw);
    top: 0;
  }
`

const RoadMap: React.FC = () => {
  return (
    <div className="section">
      <RoadmapContainer id="RoadMapContainer">
        <Title
          data-aos="zoom-in"
        >
          ROADMAP
        </Title>

        <Image
          src={RoadMapImg}
          alt="roadmap"
        />

        <BackgroundImage src={Background} alt="roadmap" />
      </RoadmapContainer>
    </div>
  )
}

export default RoadMap
