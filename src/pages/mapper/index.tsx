import React from 'react'
import MapperImg from '../../image/mapper/mapperImg.png'
import styled from 'styled-components'

const MapperContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  font-family: 'AvenirNext';

  @media screen and (max-width: 1100px) {
    height: fit-content;
  }
`

const Title = styled.div`
  position: relative;
  top: 20vh;
  text-align: left;
  left: 60vw;
  width: 30vw;

  color: #fff;
  font-size: 4.4vw;
  font-weight: bolder;

  @media screen and (max-width: 1100px) {
    left: 0;
    top: 0;
    margin: 5vh 0 0 5vw;
    font-size: 12vw;
    width: fit-content;
  }
`

const Text = styled.div`
  position: relative;
  top: 20vh;
  text-align: right;
  left: 60vw;
  width: 30vw;
  color: #ccc;
  font-size: 1.4vw;
  position: relative;
  font-family: SourceHanSansCN-Light;

  @media screen and (max-width: 1100px) {
    left: 0;
    top: 0;
    margin: 5vh 0 0 5vw;
    font-size: 5vw;
    width: 90vw;
    text-align: left;
  }
`

const MapperImage = styled.img`
  width: 40vw;
  position: relative;
  left: 10vw;
  bottom: 10vh;

  @media screen and (max-width: 1100px) {
    position: relative;
    left: 2vw;
    top: 0;
    width: 95vw;
    margin: 0 2.5vw 5vh 0;
  }
`

const Mapper: React.FC = () => {
  return (
    <div className="section">
      <MapperContainer id="MapperContainer">
        <Title data-aos="flip-left">
          NFT MAPPER
        </Title>

        <Text id="mapper-text" data-aos="flip-left">
          The NFT mapper can effectively solve
          the problem of poor liquidity
          for more flexible and diversified business
        </Text>

        <MapperImage src={MapperImg} data-aos="flip-right" />
      </MapperContainer>
    </div>
  )
}

export default Mapper
