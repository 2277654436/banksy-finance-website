import React from 'react'
import SolutionImg from '../../image/solutions/solutionsImg.png'
import styled from 'styled-components'

import dotsBG from '../../image/solutions/dots.png'

const Wrapper = styled.div`
  width: 100%;
  height: 780px;
  background: url(${dotsBG}) no-repeat;
  background-size: 70% 70%;

  @media screen and (max-width: 1100px) {
    height: 600px;
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
  margin-top: 100px;
  width: 540px;
  position: relative;
  right: 0;
  left: 760px;
  

  @media screen and (max-width: 1100px) {
    width: 300px;
    margin-left: calc((100% - 300px) / 2);
    position: relative;
    right: 0;
    left: 0;
    margin-top: 50px;
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
    font-weight: normal;
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
      font-weight: normal;
      color: #B2B2B2;
    }
  }
`

const SolutionsImage = styled.img`
  position: absolute;
  left: 130px;
  top: 280px;
  width: 1000px;

  @media screen and (max-width: 1100px) {
    position: relative;
    top: 20px;
    left: calc((100% - 300px) / 2);
    width: 300px;
    margin-bottom: 5vh;
  }
`

type SolutionItem = {
  serialNum: number | string
  content: string
}

export const Solutions: React.FC = () => {

  const solutionsData:SolutionItem[] = [
    {
      serialNum: '',
      content: 'We guarantee the security of funds on our platform by '
    },
    {
      serialNum: '',
      content: '1) a NFT whitelisting mechanism\n'
    },
    {
      serialNum: '',
      content: '2) a risk assessment model '
    },
    {
      serialNum: '',
      content: '3) a liquidation\n' +
          'process. At the same time, based on the \n' +
          'pool-based lending model, users can quickly\n' +
          'complete deposits and loans, thereby\n' +
          'increasing the utilization of their NFTs\n'
    },
    /* {
      serialNum: 2,
      content: 'Based on the Pool-Based lending model, NFT holders can quickly get loans from the platform without an agreement between lenders and borrowers. It can improve the utilization of users\' funds.'
    },
    {
      serialNum: 3,
      content: 'NFT whitelist mechanism, security fund pool and liquidation mechanism are set up to provide multiple protection for platform fund.'
    }*/
  ]

  return (
    <div className="section">
      <Wrapper>
        <SolutionsContainer>
          <Title data-aos="fade-in">
            SOLUTIONS
          </Title>


          <SolutionsImage src={SolutionImg} alt="solutions" data-aos="fade-in" />
          {/*<Content>*/}
          {/*  {*/}
          {/*    solutionsData.map((item: any, index) => (*/}
          {/*      <ContentItem key={index} data-aos="fade-left">*/}
          {/*        <span className="serialNum">{item.serialNum}</span>*/}
          {/*        <span className="item-content">{item.content}</span>*/}
          {/*      </ContentItem>*/}
          {/*    ))*/}
          {/*  }*/}
          {/*</Content>*/}
        </SolutionsContainer>
      </Wrapper>
    </div>
  )
}

export default Solutions
