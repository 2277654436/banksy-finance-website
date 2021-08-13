import React from 'react'
import Arrow from '../../image/support/arrow.png'
import Image1 from '../../image/support/1.png'
import Image2 from '../../image/support/2.png'
import Image3 from '../../image/support/3.png'
import dotsBG from '../../image/solutions/dots.png'
import styled, { keyframes } from 'styled-components'
import React3DSlick from '../../components/React3DSlider'
import { useMediaQuery } from 'react-responsive'

const Wrapper = styled.div`
  width: 100vw;
  height: 800px;
  background: url(${dotsBG}) no-repeat center;
  background-size: 60% 60%;
  background-position: top 0 left 50%;

  @media screen and (max-width: 1100px) {
    height: 600px;
  }
`

const SupportsContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 100vh;
  position: relative;
  background: url(${dotsBG}) no-repeat;
  background-size: 60% 60%;
  background-position: bottom 0 left 0;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: fit-content;
    padding-top: 10vh;
  }
`

const Title = styled.div`
  position: relative;
  color: white;
  font-weight: 550;
  font-size: 46px;
  z-index: 1;
  width: fit-content;
  top: 0;
  margin-bottom: 150px;

  img {
    position: relative;
    width: 160px;
    top: 80px;
    left: 0;
    z-index: 1;
  }

  div {
    z-index: 9;
    position: relative;
  }

  @media screen and (max-width: 1100px) {
    font-size: 22px;
    margin-left: 40px;

    img {
      top: 9vh;
      width: 18vw;
    }

    div {
      z-index: 9;
      position: relative;
      top: 20px;
    }
  }
`

const ImagesContainer = styled.div`
  & {
    position: absolute;
    width: 365px;
    top: 150px;
    right: 0;

    img {
      width: 265px;
      z-index: 1;
      position: relative;
      transition: all 1s;
    }

    img:hover {
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -o-transform: scale(1.1);
      -ms-transform: scale(1.1);
      z-index: 99;
    }

    .a {
      position: absolute;
      top: 0;
      z-index: 1;
    }

    .b {
      position: absolute;
      top: 125px;
      right: 120px;
      z-index: 2;
    }

    .c {
      position: absolute;
      top: 250px;
      right: 140px;
      z-index: 3;
    }
  }

  @media screen and (max-width: 1100px) {
    position: relative;
    width: 70vw;
    top: 0;
    left: 0;
    margin: 10vh 15vw 0 15vw;
    height: calc(50vw * 1739 / 1475 + 20vh);

    img {
      width: 50vw;
      left: revert !important;
      position: absolute !important;
    }

    .c {
      left: 20vw;
      right: 0;
      top: 0;
    }

    .b {
      left: 10vw;
      right: 10vw;
      top: 10vh;
    }

    .a {
      left: 0;
      right: 20vw;
      top: 20vh;
    }
  }
`

const Spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`

const SpinningRing = styled.img`
  width: 300px;
  position: absolute;
  top: 500px;
  left: 400px;

  @media screen and (max-width: 1100px) {
    position: relative;
    top: -120px;
    left: 70px;
    width: 150px;
    margin-top: 6vh;
    margin-left: 30vw;
    z-index: 99;
  }
`

export const Support = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1100px)' })

  return (
    <div className="section">
      <Wrapper>
        <SupportsContainer id="support">
          <Title data-aos="fade-in">
            <img src={Arrow} />
            <div>SUPPORT A VARIETY OF</div>
            <div>NFTS POOL-BASED LENDING</div>
          </Title>
          {
            isMobile ? (
              <ImagesContainer data-aos="fade-in">
                <img src={Image3} className="a" />
                <img src={Image2} className="b" />
                <img src={Image1} className="c" />
              </ImagesContainer>
            ) : (<React3DSlick />)
          }
          {/*<SpinningRing src={SpinImg} data-aos="fade-in" />*/}
        </SupportsContainer>
      </Wrapper>
    </div>
  )
}

export default Support
