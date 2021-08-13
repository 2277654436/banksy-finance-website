import React from 'react'
import MainBG2 from '../../image/top/topImg1.png'

import styled from 'styled-components'
import Navbar from './Navbar'


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${MainBG2}) no-repeat;
  background-size: 80%;
  background-position: top 20px right 50%;
  

  @media screen and (max-width: 1100px) {
    height: 50vh;
    background-size: 110%;
    background: url(${MainBG2}) no-repeat;
    background-size: 100%;
    background-position: top 60px right 0;
  }
  
`

const TopContainer = styled.div`
  width: 1200px;
  margin-left: calc((100% - 1200px) / 2);
  padding-top: 150px;

  @media screen and (max-width: 1100px) {
    padding-top: 5vh;
    margin-left: 0;
    width: 100vw;
  }
`

const Title = styled.div`
  width: 550px;
  text-align: left;
  z-index: 1;
  font-size: 64px;

  p {
    font-weight: 800;
    color: #FFFFFF;
    user-select: none;
    line-height: 85px;
    letter-spacing: 2px;
  }
  
  @media screen and (max-width: 1100px) {
    position: relative;
    margin: 20px;
    width: fit-content;
    left: 0;
    font-size: 28px;
    
    p {
      width: fit-content;
      margin: 0;
      line-height: normal;
    }
  }
`

const ExplorerButton = styled.div`
  background: linear-gradient(to right, #00FFFF, #5842FF, #7800FF);
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
  margin-top: 20px;

  &:hover {
    
  }

  @media screen and (max-width: 1100px) {
    position: relative;
    top: 0;
    left: 0;
    width: 40vw;
    height: 9vw;
    font-size: 5vw;
    margin: 5px 0;
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
          <Title data-aos="fade-in">
            <p>NFT Pool-Based Lending Hub</p>
            {/*<p>NFT Pool-Based</p>*/}
            {/*<p> Lending Hub</p>*/}
          </Title>
          <Text data-aos="fade-in">
            <div>Convenient NFT collateralized loan to </div>
            <div>keep your funds fully liquid</div>
            <ExplorerButton>
              <a href={'https://app.banksy.finance/#/'} target="_blank" style={{ color: 'white' }} rel="noreferrer">
                Explore
              </a>
            </ExplorerButton>
          </Text>

        </TopContainer>
      </Wrapper>
    </div>
  )
}

export default Top
