import React from 'react'
import SolutionImg from '../../image/solutions/solutionsImg.png'
import styled from 'styled-components'

import dotsBG from '../../image/solutions/dots.png'

const Wrapper = styled.div`
  width: 100%;
  height: 1000px;
  background: url(${dotsBG}) no-repeat;
  background-size: 70% 70%;

  @media screen and (max-width: 1100px) {
    height: 900px;
  }
`

const SolutionsContainer = styled.div`
  width: 1300px;
  margin: 0 auto;
  position: relative;
  user-select: none;
  color: white;
  padding-top: 130px;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: fit-content;
    user-select: none;
    background-size: 100% 100%;
    background-position-y: 30vh;
    padding: 10vh 0 0 0;
  }
`

const Title = styled.div`
  color: white;
  font-size: 64px;
  font-weight: 550;
  height: fit-content;

  @media screen and (max-width: 1100px) {
    position: relative;
    top: 0;
    left: 20px;
    width: fit-content;
    font-size: 28px;
    margin-left: 5vw;
  }
`

const Content = styled.div`
  margin-top: 30px;
  width: 580px;

  @media screen and (max-width: 1100px) {
    width: 300px;
    margin-left: calc((100% - 300px) / 2);
  }
`

const ContentItem = styled.div`
  display: flex;
  align-items: center;
  
  .serialNum {
    font-size: 120px;
    font-weight: bolder;
    color: #00ACFF;
    font-style: italic;
    margin-right: 20px;
  }
  
  .item-content {
    font-size: 22px;
    font-weight: bolder;
    color: #B2B2B2;
  }

  @media screen and (max-width: 1100px) {
    align-items: normal;
    margin-top: 20px;
    
    .serialNum {
      font-size: 50px;
      font-weight: bolder;
      color: #00ACFF;
      font-style: italic;
      margin-right: 20px;
    }

    .item-content {
      font-size: 16px;
      font-weight: bolder;
      color: #B2B2B2;
    }
  }
`

const SolutionsImage = styled.img`
  position: absolute;
  right: 0;
  top: 500px;
  width: 670px;

  @media screen and (max-width: 1100px) {
    position: relative;
    top: 20px;
    left: calc((100% - 300px) / 2);
    width: 300px;
    margin-bottom: 5vh;
  }
`

export const Solutions: React.FC = () => {
  return (
    <div className="section">
      <Wrapper>
        <SolutionsContainer>
          <Title>
            SOLUTIONS
          </Title>
          <Content>
            <ContentItem>
              <span className="serialNum">1</span>
              <span className="item-content">
                NFT whitelist mechanism-qualityNFTs are
                used as collateral for loans on the platform.
              </span>
            </ContentItem>
            <ContentItem>
              <span className="serialNum">2</span>
              <span className="item-content">
                Based on the Pool-Based lending model,
                whitelist NFT holders can quickly get loans from the platform without
                an agreement between lenders and borrowers.
              </span>
            </ContentItem>
            <ContentItem>
              <span className="serialNum">3</span>
              <span className="item-content">
                Developed an NFT risk assessment model to carry out reasonable valuation
                of NFT and dynamically update the price to adjust NFT mortgage rate deposit
                rate, and loan interest rate in real time.
              </span>
            </ContentItem>
            <ContentItem>
              <span className="serialNum">4</span>
              <span className="item-content">
                The safety fund pool and liquidation mechanism are
                set up to ensure the security of lenders&apos; funds.
              </span>
            </ContentItem>
          </Content>

          <SolutionsImage src={SolutionImg} alt="solutions" />
        </SolutionsContainer>
      </Wrapper>
    </div>
  )
}

export default Solutions
