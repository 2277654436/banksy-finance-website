import React from 'react'
import MapperImg from '../../image/mapper/mapperImg.png'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 800px;

  @media screen and (max-width: 1100px) {
    height: 400px;
  }
`

const MapperContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 100vh;
  position: relative;
  padding-top: 200px;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: 500px;
  }
`

const Title = styled.div`
  position: absolute;
  top:  350px;
  right: 0;
  text-align: left;
  color: #fff;
  font-size: 64px;
  font-weight: bolder;

  @media screen and (max-width: 1100px) {
    left: 20px;
    top: 0;
    margin: 5vh 0 0 5vw;
    font-size: 28px;
    width: fit-content;
  }
`

const Text = styled.div`
  position: absolute;
  top:  480px;
  right: 0;
  text-align: right;
  width: 500px;
  color: #ccc;
  font-size: 22px;

  @media screen and (max-width: 1100px) {
    left: 20px;
    top: 60px;
    margin: 5vh 0 0 5vw;
    font-size: 16px;
    width: 300px;
    text-align: left;
  }
`

const MapperImage = styled.img`
  width: 570px;
  position: absolute;

  @media screen and (max-width: 1100px) {
    position: relative;
    left: calc((100% - 270px) / 2);
    top: 0;
    width: 270px;
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
