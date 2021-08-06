import React from 'react'
import Arrow from '../../image/support/arrow.png'
import Image1 from '../../image/support/1.png'
import Image2 from '../../image/support/2.png'
import Image3 from '../../image/support/3.png'
import SpinImg from '../../image/features/spinImg.png'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
`

const SupportsContainer = styled.div`
  max-width: 1550px;
  margin: 0 auto;
  height: 100vh;
  position: relative;

  @media screen and (max-width: 1100px) {
    height: fit-content;
    padding-top: 10vh;
  }
`

const Title = styled.div`
  position: relative;
  color: white;
  font-family: SourceHanSansCN-Bold;
  font-weight: 550;
  font-size: 50px;
  z-index: 1;
  width: fit-content;
  top: 100px;

  img {
    position: relative;
    width: 210px;
    top: 320px;
    left: 100px;
    z-index: 1;
  }

  div {
    z-index: 9;
    position: relative;
  }

  @media screen and (max-width: 1100px) {
    font-size: 6vw;

    img {
      top: 9vh;
      width: 18vw;
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
      width: 365px;
      z-index: 1;
      position: relative;
      transition: all 1s;

      &:hover {
        transform: scale(1.2);
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -o-transform: scale(1.2);
        -ms-transform: scale(1.2);
        z-index: 99;
      }
    }

    .a {
      position: absolute;
      top: 0;
      z-index: 1;
    }

    .b {
      position: absolute;
      top: 225px;
      right: 92px;
      z-index: 2;
    }

    .c {
      position: absolute;
      top: 450px;
      right: 184px;
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
  top: 700px;
  left: 300px;
  animation: ${Spin} 10s infinite linear;

  @media screen and (max-width: 1100px) {
    position: relative;
    top: 0;
    left: 0;
    width: 40vw;
    margin-top: 6vh;
    margin-left: 30vw;
  }
`

export const Support = () => {
  return (
    <div className="section">
      <Wrapper>
        <SupportsContainer id="support">
          <Title>
            <img src={Arrow} />
            <div>SUPPORT A VARIETY OF</div>
            <div>NFTS POOL-BASE LENDING</div>
          </Title>
          <ImagesContainer>
            <img src={Image3} className="a" />
            <img src={Image2} className="b" />
            <img src={Image1} className="c" />
          </ImagesContainer>
          <SpinningRing src={SpinImg} />
        </SupportsContainer>
      </Wrapper>
    </div>
  )
}

export default Support
