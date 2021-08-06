import React from 'react'
import FeaturesBG from '../../image/solutions/features-bg.png'
import styled from 'styled-components'

import BackgroundImage from '../../image/solutions/dots.png'

const Wrapper = styled.div`
  width: 100vw;
  background: url(${BackgroundImage}) no-repeat center;
  background-size: 50%;
`

const SolutionsContainer = styled.div`
  max-width: 1550px;
  margin: 0 auto;
  position: relative;
  user-select: none;
  color: white;
  padding-top: 500px;

  @media screen and (max-width: 1100px) {
    height: fit-content;
    user-select: none;
    background-size: 100% 100% cover;
    background-position-y: 30vh;

    padding: 10vh 0 0 0;
  }
`

const Title = styled.div`
  color: white;
  font-size: 75px;
  font-family: 'SourceHanSansCN-Bold';
  font-weight: 550;
  height: fit-content;

  @media screen and (max-width: 1100px) {
    position: relative;
    top: 0;
    left: 0;
    width: fit-content;
    font-size: 12vw;
    margin-bottom: 4vh;
    margin-left: 5vw;
  }
`

const Content = styled.div`
  margin-top: 80px;
  width: 450px;
  line-height: 36px;
  color: #B2B2B2;
  font-size: 22px;
  font-family: 'SourceHanSansCN-Normal';
  font-weight: lighter;

  @media screen and (max-width: 1100px) {
    width: 90vw;
    font-size: 5.5vw;
    margin: 0 auto;
  }
`

const SolutionsImage = styled.img`
  position: absolute;
  right: 0;
  top: 100px;
  width: 830px;

  @media screen and (max-width: 1100px) {
    position: relative;
    top: 0;
    left: 5vw;
    width: 90vw;
    margin-bottom: 5vh;
  }
`

export const Solutions: React.FC = () => {
  return (
    <div className="section">
      <Wrapper>
        <SolutionsContainer>
          <Title>
            SOLUTIONS
          </Title>
          <Content>
            The NAK protocol is a complete solution
            driven by AI technology,
            <br />
            which can effectively solve the lending risk from
            the NFT price confusion
          </Content>

          <SolutionsImage src={FeaturesBG} alt="solutions" />
        </SolutionsContainer>
      </Wrapper>
    </div>
  )
}

export default Solutions
