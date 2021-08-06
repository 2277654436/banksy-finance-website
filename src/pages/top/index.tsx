import React from 'react'
import MainBG2 from '../../image/top/topImg.png'

import styled from 'styled-components'
import Navbar from './Navbar'

const Wrapper = styled.div`
  width: 100vw;
  background-image: url(${MainBG2});
  background-size: 100vw;
`

const TopContainer = styled.div`
  max-width: 1550px;
  margin: 0 auto;
  height: 100vh;
  position: relative;
  font-family: 'SourceHanSansCN-Bold';
  padding-top: 35vh;

  @media screen and (max-width: 1100px) {
    padding-top: 16vh;
    width: 100vw;
  }
`

const Title = styled.div`
  text-align: left;
  position: relative;
  z-index: 1;
  font-size: 81px;

  p {
    font-weight: 800;
    color: #FFFFFF;
    user-select: none;
    line-height: 38px;
  }
  
  @media screen and (max-width: 1100px) {
    position: relative;
    margin: 0 auto;
    width: fit-content;
    left: 0;
    font-size: 10vw;
    font-family: 'SourceHanSansCN-Light';
    
    p {
      width: fit-content;
      margin: 0 auto;
      line-height: 15vw;
    }
  }
`

const ExplorerButton = styled.div`
  margin-right: 0;
  background-color: #554BFF;
  border-radius: 1rem;
  width: 190px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 31px;
  font-weight: bold;
  text-align: left;
  color: white;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    border: solid 1px #9490e7;
    background-color: #554BFF;
  }

  @media screen and (max-width: 1100px) {
    position: relative;

    top: 20vh;
    left: 0;
    width: 40vw;
    height: 9vw;
    font-size: 5vw;

    margin: 0 auto;

    background-color: #554BFF;
    border-radius: 10px;
    color: white;
    
    &:hover {
      border: solid 1px #9490e7;
      background-color: #554BFF;
    }
  }
`

const Text = styled.div`
  width: 600px;
  position: relative;
  font-size: 22px;
  text-align: left;
  color: #ccc;
  margin-bottom: 4vh;

  @media screen and (max-width: 1100px) {
    position: relative;
    left: 0;
    top: 14vh;

    width: fit-content;
    margin: 0 auto 10vh auto;

    font-size: 3.6vw;
    text-align: left;
    color: #eee;
  }
`

const Top: React.FC = () => {
  return (
    <div className="section">
      <Wrapper>
        <Navbar />
        <TopContainer>
          <Title>
            <p>NFT Pool-Based</p>
            <p> Lending Hub</p>
          </Title>
          <Text>
            <div>The first AI-driven NFT pool-based</div>
            <div>lending platform to lead a revolution</div>
            <div>of the NFT market</div>
          </Text>
          <ExplorerButton>
            <a href={'https://app.banksy.finance/#/'} target="_blank" style={{ color: 'white' }} rel="noreferrer">
              Explore
            </a>
          </ExplorerButton>
        </TopContainer>
      </Wrapper>
    </div>
  )
}

export default Top
