import React from 'react'
import benefits1 from '../../image/banefits/benefits1.png'
import benefits2 from '../../image/banefits/benefits2.png'
import benefits3 from '../../image/banefits/benefits3.png'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 1100px;

  @media screen and (max-width: 1100px) {
    height: 850px;
  }
`

const BenefitsContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 200px 0;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: fit-content;
  }
`

const Title = styled.div`
  color: #fff;
  font-size: 64px;
  font-weight: bolder;
  position: relative;
  text-align: left;
  margin-bottom: 100px;

  @media screen and (max-width: 1100px) {
    margin-left: 40px;
    margin-bottom: 20px;
    left: 0;
    top: 0;
    width: fit-content;
    position: relative;
    font-size: 28px;
  }
`

const ItemsContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  @media screen and (max-width: 1100px) {
    position: relative;
    top: 0;
    margin: 0 auto;

    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Item = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-left: 20px;
  align-items: start;

  .item-img {
    width: 240px;
    height: 178.25px;
    border-radius: 10px;
    overflow: hidden;
    
    img {
      border-radius: 10px;
      width: 100%;
      margin-bottom: 40px;
      transition: all 0.7s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .title {
    color: #fff;
    width: 100%;
    font-size: 28px;
    font-weight: bolder;
    margin-bottom: 20px;
  }

  .details {
    color: #B2B2B2;
    font-size: 18px;
    width: 400px;

    p {
      width: 100%;
      line-height: 40px;
      margin: 0 0 1vh 0;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    margin-top: 5vh;

    img {
      width: 30vw;
      margin-right: 3vw;
      margin-bottom: 10vh;
      position: relative;
    }

    .title {
      font-size: 5vw;
    }

    .details {
      font-size: 3.5vw;
      position: absolute;
      left: 33vw;
      top: 20px;
      width: 60vw;
      padding-right: 10px;

      p {
        width: 100%;
        line-height: normal;
        margin: 10px 0 0 0;
      }
    }
  }

`

type BenefitItem = {
  img: string
  title: string
  details: string[]
}

const Benefits: React.FC = () => {
  const BENEFIT_ITEMS: BenefitItem[] = [
    {
      img: benefits1,
      title: 'NFT Holder',
      details: [
        '1｜Easily get loans',
        '2｜Instant loan and repayment; Flexible repayment',
      ]
    },
    {
      img: benefits2,
      title: 'Funds Lender',
      details: [
        '1｜Loan safely with security',
        '2｜Dual incomes from interest and platform rewards',
        '3｜Deposit and withdraw funds instantly',
      ]
    },
    {
      img: benefits3,
      title: 'Tokens Holder',
      details: [
        '1｜Share the platform revenue',
        '2｜Participate in platform governance'
      ]
    }
  ]

  return (
    <div className="section" id="benefits">
      <Wrapper>
        <BenefitsContainer id="BenefitsContainer">
          <Title id="benefits-title">
            BENEFITS
          </Title>
          <ItemsContainer>
            {
              BENEFIT_ITEMS.map(item => (
                <Item key={item.title}>
                  <div className="item-img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="title">
                    {item.title}
                  </div>
                  <div className="details">
                    {item.details.map(detail => (<p key={detail}>{detail}</p>))}
                  </div>
                </Item>
              ))
            }
          </ItemsContainer>
        </BenefitsContainer>
      </Wrapper>
    </div>
  )
}

export default Benefits
