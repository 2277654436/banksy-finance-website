import React from 'react'
import FeaturesBG from '../../image/solutions/features-bg.png'
import styled from 'styled-components'

import BackgroundImage from '../../image/solutions/dots.png'

const SolutionsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  user-select: none;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: 100vw;
  background-position: top 15vh left 0;
  color: white;

  padding: 30vh 0 0 10vw;

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
  font-size: 4vw;
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
  width: 40vw;
  color: #B2B2B2;
  font-size: 1.4vw;
  font-family: 'SourceHanSansCN-Bold';

  @media screen and (max-width: 1100px) {
    width: 90vw;
    font-size: 5.5vw;
    margin: 0 auto;
  }
`

const SolutionsImage = styled.img`
  position: absolute;
  right: 7vw;
  top: 10vh;
  width: 45vw;

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
      <SolutionsContainer>
        <Title data-aos="fade-right">
          SOLUTIONS
        </Title>
        <Content data-aos="fade-right">
          The NAK protocol is a complete solution
          driven by AI technology,
          which can effectively either &quot;eliminate&quot;, &quot;reduce&quot;, &quot;diminish&quot; etc.,
          but not &quot;solve&quot; the lending risk associated with
          NFT price confusion
        </Content>

        <SolutionsImage src={FeaturesBG} alt="solutions" data-aos="fade-left" />
      </SolutionsContainer>
    </div>
  )
}

export default Solutions
