import React from 'react'
import MainBG2 from '../../image/top/topImg.png'

import styled from 'styled-components'
import Navbar from './Navbar'

const Wrapper = styled.div`
  width: 100%;
  height: 110vh;
  max-height: 900px;
  background: url(${MainBG2}) no-repeat;
  background-size: 100% 100%;

  @media screen and (max-width: 1100px) {
    height: 60vh;
    max-height: 1200px;
  }
`

const TopContainer = styled.div`
  width: 1200px;
  margin-left: calc((100% - 1200px) / 2);
  font-family: 'SourceHanSansCN-Bold';
  padding-top: 13%;

  @media screen and (max-width: 1100px) {
    padding-top: 5vh;
    margin-left: 0;
    width: 100vw;
  }
`

const Title = styled.div`
  text-align: left;
  z-index: 1;
  font-size: 64px;

  p {
    font-weight: 800;
    color: #FFFFFF;
    user-select: none;
    line-height: 38px;
  }
  
  @media screen and (max-width: 1100px) {
    position: relative;
    margin: 20px;
    width: fit-content;
    left: 0;
    font-size: 28px;
    font-family: 'SourceHanSansCN-Light';
    
    p {
      width: fit-content;
      margin: 0;
      line-height: normal;
    }
  }
`

const ExplorerButton = styled.div`
  background-color: #554BFF;
  border-radius: 1rem;
  border: solid 3px #554BFF;
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
  margin-top: 20px;

  &:hover {
    border: solid 4px #9490e7;
    background-color: #554BFF;
  }

  @media screen and (max-width: 1100px) {
    position: relative;
    top: 0;
    left: 0;
    width: 40vw;
    height: 9vw;
    font-size: 5vw;
    margin: 0 0 0 20px;
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
  font-size: 22px;
  text-align: left;
  color: #ccc;

  @media screen and (max-width: 1100px) {
    width: 300px;
    position: relative;
    text-align: left;
    top: 0;
    margin: 0 auto 20px 20px;
    font-size: 3.6vw;
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
