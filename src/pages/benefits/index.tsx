import React from 'react'
import benefits1 from '../../image/banefits/benefits1.png'
import benefits2 from '../../image/banefits/benefits2.png'
import benefits3 from '../../image/banefits/benefits3.png'
import styled from 'styled-components'

const BenefitsContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  @media screen and (max-width: 1100px) {
    height: fit-content;
  }
`

const Title = styled.div`
  color: #fff;
  font-size: 4vw;
  font-weight: bolder;
  position: relative;
  margin-left: 62.5vw;
  margin-top: 10vh;

  @media screen and (max-width: 1100px) {
    margin: 6.6vh auto 10px auto;
    left: 0;
    top: 0;
    width: fit-content;
    position: relative;
    font-size: 12vw;
  }
`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  margin: 4vh auto 0 auto;
  width: 80vw;

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
  align-items: start;
  width: 16vw;
  margin-bottom: 5vh;

  img {
    width: 100%;
    margin-bottom: 2vh;
  }

  .title {
    color: #fff;
    width: 100%;
    font-size: 2vw;
    font-weight: bolder;
    font-family: 'SourceHanSansCN-Bold';
    margin-bottom: 2vh;
  }

  .details {
    color: #808080;
    font-size: 1.2vw;
    font-family: SourceHanSansCN-Light;

    p {
      width: 100%;
      line-height: 3vh;
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
      top: 7vw;
      width: 60vw;

      p {
        margin: revert;
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
        '2｜Mapping NFT for higher liquidity',
        '3｜Instant loan and repayment; Flexible repayment',
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
        '2｜Participate in platform governance',
        '3｜NFT creation and management',
      ]
    }
  ]

  return (
    <div className="section" id="benefits">
      <BenefitsContainer>
        <Title id="benefits-title" data-aos="zoom-out">
          BENEFITS
        </Title>
        <ItemsContainer data-aos="flip-left">
          {
            BENEFIT_ITEMS.map(item => (
              <Item key={item.title}>
                <img src={item.img} alt={item.title} />
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
    </div>
  )
}

export default Benefits
