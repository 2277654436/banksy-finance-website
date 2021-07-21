import React from 'react'
import danger from '../../image/issues/danger.png'
import Number1 from '../../image/issues/number1.png'
import Number2 from '../../image/issues/number2.png'
import Number3 from '../../image/issues/number3.png'
import styled from 'styled-components'
import BackgroundImage from '../../image/issues/background.png'

const IssuesContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  font-family: 'AvenirNext';
  background-image: url(${BackgroundImage});
  background-size: 80%;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: fit-content;
    position: relative;
  }
`

const Title = styled.div`
  position: absolute;
  top: 7vw;
  right: 10vw;
  color: white;
  font-size: 5vw;
  font-weight: bolder;
  text-align: right;
  z-index: 9;

  img {
    width: 14vw;
    position: relative;
    bottom: 18vh;
    right: 10.5vw;
    z-index: 1;
  }

  div {
    position: relative;
    z-index: 9;
  }

  @media screen and (max-width: 1100px) {
    position: relative;
    top: 0;
    margin: 10vh auto 0 auto;
    left: 0;
    width: fit-content;
    color: white;
    font-family: 'SourceHanSansCN-Bold';
    
    div {
      font-size: 12vw;
    }
    
    img {
      position: absolute;
      top: -2vw;
      left: -14vw;
    }
  }
`

const ItemsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 13vw;
  top: 0;
  margin-top: 5vh;
  margin-bottom: 5vh;
  z-index: 9;

  @media screen and (max-width: 1100px) {
    top: 0;
    
    position: relative;
    display: flex;
    flex-direction: column;
    left: 8vw;
    width: 82vw;
  }
`

const Item = styled.div`
  display: flex;
  justify-content: start;
  width: 50vw;
  margin-top: 5vh;
  z-index: 9;

  .col {
    display: flex;
    flex-direction: column;
  }
  
  img {
    width: 7vw;
    height: 15vh;
    margin-right: 2.6vw;
  }
  
  .title {
    width: 100%;
    color: white;
    margin-top: 1.2vh;
    font-weight: 550;
    font-size: 2vw;
    font-family: 'SourceHanSansCN-Bold';
  }
  
  .detail {
    display: flex;
    flex-direction: column;
    color: #B2B2B2;
    font-size: 1.2vw;
    font-family: 'SourceHanSansCN-Light';
  }

  @media screen and (max-width: 1100px) {
    img {
      width: 15vw;
      height: 15vw;
    }
    
    .title {
      color: white;
      font-weight: 550;
      font-size: 6vw;
      font-family: 'SourceHanSansCN-Bold';
    }
    
    .detail {
      position: relative;
      width: 70vw;
      font-size: 4.5vw;
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
      detail: 'Lack of an effective NFT price discovery mechanism for the NFT valuation and quotation in the market'
    },
    {
      img: Number2,
      title: 'Poor liquidity',
      detail: 'Low volume and handovers'
    },
    {
      img: Number3,
      title: 'Lenders are taking risk for the NFT valuation bubble',
      detail: 'Lack of an effective NFT price discovery mechanism for the NFT valuation and quotation in the market'
    },
  ]

  return (
    <div className="section">
      <IssuesContainer id="IssuesContainer">
        <Title data-aos="fade-up">
          <div>Issues</div>
          <img src={danger} alt="issues" />
        </Title>

        <ItemsContainer id="ItemsContainer" data-aos="fade-right">
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
    </div>
  )
}

export default Issues
