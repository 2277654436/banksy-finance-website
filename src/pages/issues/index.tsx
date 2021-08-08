import React from 'react'
import danger from '../../image/issues/danger.png'
import Number1 from '../../image/issues/number1.png'
import Number2 from '../../image/issues/number2.png'
import Number3 from '../../image/issues/number3.png'
import dotsBG from '../../image/dots.png'
import styled from 'styled-components'
import BackgroundImage from '../../image/issues/background1.png'

const Wrapper = styled.div`
  width: 100%;
  height: 900px;
  background: url(${dotsBG}) no-repeat;
  background-size: 40% 40%;
  background-position: top 0 left 0;

  @media screen and (max-width: 1100px) {
    height: 770px;
  }
`

const IssuesContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  height: 900px;
  position: relative;
  display: flex;
  align-items: center;
  background: url(${dotsBG}) no-repeat;
  background-size: 60% 60%;
  background-position: bottom 0 right 0;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: fit-content;
    position: relative;
  }
`

const Title = styled.div`
  position: absolute;
  top: 200px;
  right: 0;
  color: white;
  font-size: 64px;
  font-weight: bolder;
  text-align: right;
  z-index: 9;

  img {
    width: 200px;
    position: relative;
    bottom: 100px;
    right: 200px;
    z-index: 1;
  }

  div {
    position: absolute;
    right: 10px;
    z-index: 9;
  }

  @media screen and (max-width: 1100px) {
    position: absolute;
    top: 100px;
    left: 190px;
    width: fit-content;
    color: white;

    div {
      position: absolute;
      top: 60px;
      left: -80px;
      font-size: 28px;
    }

    img {
      width: 100px;
      position: absolute;
      top: 0;
      left: -150px;
    }
  }
`

const ItemsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 150px;
  margin-top: 50px;
  z-index: 9;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    left: 8vw;
    width: 82vw;
  }
`

const Item = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 50px;
  z-index: 9;

  .col {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 120px;
    margin-right: 50px;
  }

  .title {
    width: 100%;
    color: white;
    margin-top: 1.2vh;
    font-weight: 550;
    font-size: 28px;
  }

  .detail {
    width: 550px;
    display: flex;
    color: #B2B2B2;
    font-size: 18px;
  }

  @media screen and (max-width: 1100px) {
    img {
      width: 15vw;
      height: 15vw;
      margin-right: 10px;
    }

    .title {
      color: whit e;
      font-weight: 550;
      font-size: 22px;
    }

    .detail {
      position: relative;
      width: 70vw;
      font-size: 16px;
    }
  }
`

type IssueItem = {
  img: any
  title: string
  detail: string
}

const Issues: React.FC = () => {
  const items: IssueItem[] = [
    {
      img: Number1,
      title: 'Price confusion',
      detail: 'Lack of an effective NFT price discovery mechanism for NFT valuation and quotation in the market.'
    },
    {
      img: Number2,
      title: 'Poor liquidity',
      detail: 'Low volume and handovers the previous entries have no final punctuation.'
    },
    {
      img: Number3,
      title: 'No security for lender\'s funds',
      detail: 'Lenders are taking on risk for the NFT valuation bubble DITTO!'
    },
  ]

  return (
    <div className="section">
      <Wrapper>
        <IssuesContainer id="IssuesContainer">
          <Title>
            <div>ISSUES</div>
            <img src={danger} alt="issues" />
          </Title>

          <ItemsContainer id="ItemsContainer">
            {
              items.map(item => (
                <Item key={item.title}>
                  <img src={item.img} alt={item.title} />
                  <div className="col">
                    <div className="title">{item.title}</div>
                    <div className="detail">{item.detail}</div>
                  </div>
                </Item>
              ))
            }
          </ItemsContainer>
        </IssuesContainer>
      </Wrapper>
    </div>
  )
}

export default Issues
