import React from 'react'
import logo from '../../image/logo.png'
import menuTwitter from '../../image/menuTwitter.png'
import menuFly from '../../image/menuFly.png'
import styled from 'styled-components'

function scrollToPart(anchorName: string) {
  if (anchorName) {
    const anchorElement = document.getElementById(anchorName)
    if (anchorElement) {
      anchorElement.scrollIntoView(
        { behavior: 'smooth', block: 'center' }
      )
    }
  }
}

const NavbarContainer = styled.div`
  font-family: 'AvenirNext';
  height: 80px;
  color: #fff;
  font-size: 1vw;
  font-weight: bold;
  z-index: 9999;
  width: 100vw;

  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 30px;

  @media screen and (max-width: 1100px) {
    padding: 0 4vw 0 2vw;
    height: 12vw;
  }
`

const Logo = styled.img`
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 1100px) {
    height: 100%;
    object-fit: contain;
  }
`

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  width: 35%;
  align-items: center;
  justify-content: space-between;
  margin: 0;

  li {
    list-style: none;
    float: left;
    cursor: pointer;
    z-index: 9999;

    a {
      color: #fff;
    }
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`

const ExternalLinksContainer = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
`

const ExternalLink = styled.a`


  img {
    height: 2.5vh;
    margin-left: 2.5vw;
  }
`

const Navbar: React.FC = () => {
  return (
    <NavbarContainer id="navbar">

      <Logo id="logo" src={logo} alt="Banksy" />

      <NavLinksContainer id="NavLinksContainer">
        <li><a onClick={() => scrollToPart('mission')}>Mission</a></li>
        <li><a onClick={() => scrollToPart('features')}>Features</a></li>
        <li><a onClick={() => scrollToPart('benefits')}>Benefits</a></li>
        <li><a onClick={() => scrollToPart('roadMap')}>Roadmap</a></li>
      </NavLinksContainer>

      <ExternalLinksContainer id="ExternalLinksContainer">
        <ExternalLink href={'https://twitter.com/banksy_finance'} target="_blank" rel="noreferrer">
          <img src={menuTwitter} alt="twitter" />
        </ExternalLink>
        <ExternalLink href={'https://t.me/Banskyfinance'} target="_blank" rel="noreferrer">
          <img src={menuFly} alt="telegram" />
        </ExternalLink>
      </ExternalLinksContainer>

    </NavbarContainer>
  )
}
export default Navbar