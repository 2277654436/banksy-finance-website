import React from 'react'
import RoadMapImg from '../../image/roadmap/roadmapImg.png'
import RoadMapImgMobile from '../../image/roadmap/RoadmapMobile.png'
import styled from 'styled-components'
import dotsBG from '../../image/solutions/dots.png'
import { useMediaQuery } from 'react-responsive'

const Wrapper = styled.div`
  width: 100vw;
  height: 900px;
  background: url(${dotsBG}) no-repeat;
  background-size: 50% 50%;
  background-position: top 0 left 0;

  @media screen and (max-width: 1100px) {
    height: 630px;
  }
`

const RoadmapContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  user-select: none;
  background: url(${dotsBG}) no-repeat center;
  background-size: 50% 50%;
  background-position: bottom 0 right 0;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: fit-content;
  }
`

const Title = styled.div`
  position: absolute;
  color: #fff;
  font-size: 64px;
  top: 0;
  left: 0;
  z-index: 9;
  font-weight: bolder;

  @media screen and (max-width: 1100px) {
    position: relative;
    left: 40px;
    top: 0;
    font-size: 28px;
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
  left: 0;
  top: 100px;
  width: 110%;
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

const RoadmapMobile = styled.div`
  width: 300px;
  margin-left: calc((100% - 300px) / 2);
  margin-top: 50px;
`

const ImageMobile = styled.img`
  width: 100%;
`

const RoadmapMobileData = styled.div`
  
`

const RoadMap: React.FC = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 1100px)' })

  return (
    <div className="section">
      <Wrapper>
        <RoadmapContainer id="RoadMapContainer">
          <Title data-aos="fade-in">ROADMAP</Title>
          {
            !isMobile ?
              <Image
                src={RoadMapImg}
                alt="roadmap"
                data-aos="fade-in"
              /> :
              <RoadmapMobile>
                <ImageMobile
                  src={RoadMapImgMobile}
                  alt="roadmapMobile"
                  data-aos="fade-in"
                />
              </RoadmapMobile>
          }
          {/*<BackgroundImage src={Background} alt="roadmap" />*/}
        </RoadmapContainer>
      </Wrapper>
    </div>
  )
}

export default RoadMap
