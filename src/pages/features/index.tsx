import React from 'react'
import featuresTextBG from '../../image/features/features-text-bg.png'
import Features1 from '../../image/features/features-img1.png'
import Features2 from '../../image/features/features-img2.png'
import Features3 from '../../image/features/features-img3.png'
import Features4 from '../../image/features/features-img4.png'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
`

const FeaturesContainer = styled.div`
  max-width: 1550px;
  margin: 0 auto;
  position: relative;
  font-family: 'SourceHanSansCN-Normal';
  padding: 150px 0;

  @media screen and (max-width: 1100px) {
    height: fit-content;
  }
`

const Title = styled.div`
  color: white;
  font-size: 70px;
  position: relative;
  font-family: SourceHanSansCN-Bold;
  font-weight: 550;
  width: fit-content;
  margin-bottom: 200px;
  
  img {
    width: 260px;
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
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  img {
    height: 150px;
    object-fit: cover;
  }

  .title {
    width: 100%;
    color: white;
    text-align: center;
    font-family: SourceHanSansCN-Bold;
    font-weight: 550;
    font-size: 25px;
  }

  .detail {
    text-align: center;
    color: #B2B2B2;
    font-family: SourceHanSansCN-Light;
    font-size: 17px;
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
      detail: 'Secure users\' assets, flexible and convenient lending'
    },
    {
      img: Features2,
      title: 'Multi-chain Supports',
      detail: 'Support multi-chain such as ETH, BSC, HECO, Solana, DOT, etc'
    },
    {
      img: Features3,
      title: 'Combine with Defi',
      detail: 'Integrate Defi to increase NFT liquidity'
    },
    {
      img: Features4,
      title: 'NAK Protocol',
      detail: 'Service for the whole industry to a healthier and faster development'
    },
  ]

  return (
    <div className="section">
      <Wrapper>
        <FeaturesContainer>
          <Title id="features-title">
            <img src={featuresTextBG} alt="features" />
            <div>MAIN FEATURES</div>
          </Title>
          <ItemsContainer>
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
      </Wrapper>
    </div>
  )
}

export default Features
