import React from 'react'
import MapperImg from '../../image/mapper/mapperImg.png'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
`

const MapperContainer = styled.div`
  max-width: 1550px;
  margin: 0 auto;
  height: 100vh;
  position: relative;
  font-family: 'AvenirNext';
  padding-top: 200px;

  @media screen and (max-width: 1100px) {
    height: fit-content;
  }
`

const Title = styled.div`
  position: absolute;
  top:  400px;
  right: 0;
  text-align: left;

  color: #fff;
  font-size: 82px;
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
  position: absolute;
  top:  600px;
  right: 0;
  text-align: right;
  width: 600px;
  color: #ccc;
  font-size: 28px;
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
  width: 770px;
  position: absolute;

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
      <Wrapper>
        <MapperContainer id="MapperContainer">
          <Title>
            NFT MAPPER
          </Title>

          <Text id="mapper-text">
            The NFT mapper can effectively solve
            the problem of poor liquidity
            for more flexible and diversified business
          </Text>

          <MapperImage src={MapperImg} />
        </MapperContainer>
      </Wrapper>
    </div>
  )
}

export default Mapper
