import React from 'react'
import featuresTextBG from '../../image/features/features-text-bg.png'
import Feat1 from '../../image/features/features1.png'
import Feat2 from '../../image/features/features2.png'
import Feat3 from '../../image/features/features3.png'


import dotsBG from '../../image/dots.png'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 900px;
  background: url(${dotsBG}) no-repeat;
  background-size: 50% 50%;
  background-position: top 50% left 0;

  @media screen and (max-width: 1100px) {
    height: 1050px;
  }
`

const FeaturesContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 150px 0;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: fit-content;
  }
`

const Title = styled.div`
  color: white;
  font-size: 64px;
  position: relative;
  font-weight: 550;
  width: fit-content;
  margin-bottom: 200px;
  
  img {
    width: 180px;
    position: absolute;
    z-index: 1;
  }

  div {
    position: relative;
    left: 110px;
    top: 20px;
    z-index: 9;
  }

  @media screen and (max-width: 1100px) {
    margin: 0 40px;
    color: white;
    font-size: 28px;
    font-weight: bolder;

    img {
      z-index: 1;
      top: -2vh;
      width: 90px;
    }

    div {
      position: relative;
      left: 30px;
      top: 20px;
      z-index: 9;
    }
  }
`

const ItemsContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`

const Item = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  img {
    height: 120px;
    width: 120px;
    object-fit: cover;
  }

  .title {
    width: 100%;
    color: white;
    text-align: center;
    font-weight: 550;
    font-size: 25px;
    margin-top: 20px;
  }

  .detail {
    text-align: center;
    color: #B2B2B2;
    font-size: 17px;
    margin-top: 10px;
  }

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 40px;

    img {
      width: 130px;
    }

    .title {
      width: 100%;
      color: white;
      text-align: center;
      font-weight: 550;
      font-size: 22px;
    }

    .detail {
      width: 80%;
      text-align: center;
      color: #B2B2B2;
      font-size: 16px;
    }
  }
`

type FeatureItem = {
  img: string,
  title: string,
  detail: string
}

const Features: React.FC = () => {
  const FEATURES_ITEMS: FeatureItem[] = [
    {
      img: Feat1,
      title: 'NFT Valuation',
      detail: 'Various dimensions of NFT data are used for comprehensive NFT valuation updated in real time'
    },
    {
      img: Feat2,
      title: 'Convenient Borrowing',
      detail: 'NFT borrowers can quickly obtain loans without reaching an agreement with lenders; collaterals of the same risk category share the same pool'
    },
    {
      img: Feat3,
      title: 'Financial Security',
      detail: 'Whitelisting is required for new NFT collections as collateral; liquidation process and a security fund pool are in place to hedge risks'
    },
  ]

  return (
    <div className="section">
      <Wrapper>
        <FeaturesContainer id="FeaturesContainer">
          <Title id="features-title" data-aos="fade-in">
            <img src={featuresTextBG} alt="features" />
            <div>MAIN FEATURES</div>
          </Title>
          <ItemsContainer>
            {
              FEATURES_ITEMS.map((item, index) => (
                <Item key={item.title} data-aos="fade-up" data-aos-delay={ index * 250 } data-aos-duration={800}>
                  <img src={item.img} alt={item.title} />
                  <div className="title">{item.title}</div>
                  <div className="detail">{item.detail}</div>
                </Item>
              ))
            }
          </ItemsContainer>
        </FeaturesContainer>
      </Wrapper>
    </div>
  )
}

export default Features
