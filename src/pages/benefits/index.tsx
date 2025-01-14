import React from 'react'
import benefits1 from '../../image/banefits/benefits1.png'
import benefits2 from '../../image/banefits/benefits2.png'
import benefits3 from '../../image/banefits/benefits3.png'
import benefits4 from '../../image/banefits/benefits4.png'

import dotsBG from '../../image/solutions/dots.png'

import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 850px;
  background: url(${dotsBG}) no-repeat;
  background-size: 50% 50%;
  background-position: top 50% left 0;

  @media screen and (max-width: 1100px) {
    height: 1250px;
  }
`

const BenefitsContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 200px 0;
  background: url(${dotsBG}) no-repeat center;
  background-size: 50% 50%;
  background-position: top 50% right 0;

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
  justify-content: center;
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
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .item-img {
    width: 200px;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 40px;

    img {
      border-radius: 10px;
      height: 100%;
      transition: all 0.7s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .title {
    color: #fff;
    width: 100%;
    font-size: 22px;
    font-weight: bolder;
    margin-bottom: 20px;
    text-align: center;
  }

  .details {
    color: #B2B2B2;
    font-size: 12px;
    width: 310px;

    p {
      width: 100%;
      line-height: 40px;
      margin: 0 0 1vh 0;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 30px;

    .item-img {
      width: 180px;
      height: 130.25px;
      border-radius: 10px;
      overflow: hidden;
      margin-right: 20px;
      margin-bottom: 0

      img {
        width: 100%;
        height: 90px;
        margin-right: 3vw;
        margin-bottom: 10vh;
        position: relative;
      }
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
      title: 'Share platform revenue',
      details: [

      ]
    },
    {
      img: benefits2,
      title: 'Participate in governance',
      details: [

      ]
    },
    {
      img: benefits3,
      title: 'Repurchase and burn',
      details: [

      ]
    },
    {
      img: benefits4,
      title: 'Earn AI Oracle gas fee',
      details: [

      ]
    }
  ]

  return (
    <div className="section" id="benefits">
      <Wrapper>
        <BenefitsContainer id="BenefitsContainer">
          <Title id="benefits-title" data-aos="fade-in">
            TOKEN VALUE
          </Title>
          <ItemsContainer >
            {
              BENEFIT_ITEMS.map((item, index) => (
                <Item key={item.title} data-aos="fade-up" data-aos-delay={ index * 250 } data-aos-duration={800} >
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
