import React from 'react'
import SolutionImg from '../../image/solutions/solutionsImg.png'
import styled from 'styled-components'

import dotsBG from '../../image/solutions/dots.png'

const Wrapper = styled.div`
  width: 100%;
  height: 1100px;
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
    font-size: 20px;
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

type SolutionItem = {
  serialNum: number
  content: string
}

export const Solutions: React.FC = () => {

  const solutionsData:SolutionItem[] = [
    {
      serialNum: 1,
      content: 'NFT whitelist mechanism-Quality NFTs are used as collateral for loans on the platform.'
    },
    {
      serialNum: 2,
      content: 'Based on the Pool-Based lending model,\n' +
        'NFT holders can quickly get loans from the platform without\n' +
        'an agreement between lenders and borrowers.'
    },
    {
      serialNum: 3,
      content: 'Developed an NFT risk assessment model to carry out reasonable valuation\n' +
        'of NFT and dynamically update the price to adjust NFT collateral rate deposit\n' +
        'rate, and loan interest rate in real time.'
    },
    {
      serialNum: 4,
      content: 'The safety fund pool and liquidation mechanism are\n' +
        'set up to ensure the security of lenders\' funds.'
    }
  ]

  return (
    <div className="section">
      <Wrapper>
        <SolutionsContainer>
          <Title>
            SOLUTIONS
          </Title>
          <Content>
            {
              solutionsData.map((item: any, index) => (
                <ContentItem key={index}>
                  <span className="serialNum">{item.serialNum}</span>
                  <span className="item-content">{item.content}</span>
                </ContentItem>
              ))
            }
          </Content>

          <SolutionsImage src={SolutionImg} alt="solutions" />
        </SolutionsContainer>
      </Wrapper>
    </div>
  )
}

export default Solutions
