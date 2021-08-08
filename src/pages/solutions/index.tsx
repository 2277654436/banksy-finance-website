import React from 'react'
import FeaturesBG from '../../image/solutions/features-bg.png'
import styled from 'styled-components'

import BackgroundImage from '../../image/solutions/dots.png'

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  background: url(${BackgroundImage}) no-repeat center;
  background-size: 50% 100%;

  @media screen and (max-width: 1100px) {
    height: 700px;
  }
`

const SolutionsContainer = styled.div`
  width: 1200px;
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
  font-family: 'SourceHanSansCN-Bold';
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
  margin-top: 30px;
  width: 580px;
  font-size: 18px;
  font-family: 'SourceHanSansCN-Light';
  line-height: 32px;
  color: #B2B2B2;

  @media screen and (max-width: 1100px) {
    width: 300px;
    font-size: 16px;
    margin-left: 40px;
    margin-top: 10px;
  }
`

const SolutionsImage = styled.img`
  position: absolute;
  right: 0;
  top: 40px;
  width: 630px;

  @media screen and (max-width: 1100px) {
    position: relative;
    top: 20px;
    left: calc((100% - 270px) / 2);
    width: 270px;
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
            which can effectively either &apos;eliminate&apos;, &apos;reduce&apos;, &apos;diminish&apos; etc,
            but not &apos;solve&apos; the lending risk associated with NFT price confusion.
          </Content>

          <SolutionsImage src={FeaturesBG} alt="solutions" />
        </SolutionsContainer>
      </Wrapper>
    </div>
  )
}

export default Solutions
