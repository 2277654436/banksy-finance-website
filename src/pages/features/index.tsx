import React from 'react'
import featuresTextBG from '../../image/features/features-text-bg.png'
import Features1 from '../../image/features/features-img1.png'
import Features2 from '../../image/features/features-img2.png'
import Features3 from '../../image/features/features-img3.png'
import Features4 from '../../image/features/features-img4.png'
import styled from 'styled-components'

const FeaturesContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  font-family: 'SourceHanSansCN-Normal';

  @media screen and (max-width: 1100px) {
    height: fit-content;
  }
`

const Title = styled.div`
  color: white;
  font-size: 4vw;
  position: relative;
  font-family: SourceHanSansCN-Bold;
  font-weight: 550;
  width: fit-content;

  margin-top: 15vh;
  margin-left: 10vw;
  margin-bottom: 10vh;

  img {
    width: 160px;
    position: absolute;
    left: -5vw;
    top: -2vh;
    z-index: 1;
  }

  div {
    position: relative;
    z-index: 9;
  }

  @media screen and (max-width: 1100px) {
    margin: 8vh auto;
    color: white;
    font-size: 9vw;
    font-weight: bolder;

    img {
      z-index: 1;
      top: -2vh;
      width: 30vw;
    }
  }
`

const ItemsContainer = styled.div`
  width: 90vw;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`

const Item = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  img {
    height: 15vw;
    object-fit: cover;
  }

  .title {
    width: 80vw;
    color: white;
    text-align: center;
    font-family: SourceHanSansCN-Bold;
    font-weight: 550;
    font-size: 1.6vw;
  }

  .detail {
    text-align: center;
    color: #B2B2B2;
    font-family: SourceHanSansCN-Bold;
    font-size: 1.2vw;
  }

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 5vh;

    img {
      width: 61.8%;
      height: 100%;
    }

    .title {
      width: 80vw;
      color: white;
      text-align: center;
      font-family: SourceHanSansCN-Bold;
      font-weight: 550;
      font-size: 7vw;
    }

    .detail {
      text-align: center;
      color: #B2B2B2;
      font-family: SourceHanSansCN-Bold;
      font-size: 5vw;
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
      img: Features1,
      title: 'Safe and Convenient',
      detail: 'Secures users\' assets, flexible and convenient lending'
    },
    {
      img: Features2,
      title: 'Multi-chain Supports',
      detail: 'Supports multi-chain such as ETH, BSC, HECO, Solana, DOT, etc'
    },
    {
      img: Features3,
      title: 'Combine with Defi',
      detail: 'Integrates Defi to increase NFT liquidity'
    },
    {
      img: Features4,
      title: 'NAK Protocol',
      detail: 'Service for the whole industry to a healthier and faster development'
    },
  ]

  return (
    <div className="section">
      <FeaturesContainer id="FeaturesContainer">
        <Title id="features-title" data-aos="flip-up">
          <img src={featuresTextBG} alt="features" />
          <div>MAIN FEATURES</div>
        </Title>
        <ItemsContainer data-aos="flip-down">
          {
            FEATURES_ITEMS.map(item => (
              <Item key={item.title}>
                <img src={item.img} alt={item.title} />
                <div className="title">{item.title}</div>
                <div className="detail">{item.detail}</div>
              </Item>
            ))
          }
        </ItemsContainer>
      </FeaturesContainer>
    </div>
  )
}

export default Features
