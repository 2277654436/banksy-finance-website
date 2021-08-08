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
  width: 80%;
  height: 80px;
  margin-left: 10%;
  color: #fff;
  font-size: 1vw;
  font-weight: bold;
  z-index: 9999;
  position: relative;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;

  @media screen and (max-width: 1100px) {
    width: 100%;
    margin-left: 0;
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
  
  .contact {
    padding: 7px 10px;
    border-radius: 20px;
    background: linear-gradient(to right, #00FFFF, #5842FF, #7800FF);
    cursor: pointer;
  }
`

const ExternalLink = styled.a`


  img {
    width: 25px;
    margin-left: 2.5vw;
  }
`

const Navbar: React.FC = () => {
  return (
    <NavbarContainer id="navbar">

      <Logo id="logo" src={logo} alt="Banksy" />

      <NavLinksContainer id="NavLinksContainer">
        <li><a onClick={() => scrollToPart('MissionContainer')}>Mission</a></li>
        <li><a onClick={() => scrollToPart('FeaturesContainer')}>Features</a></li>
        <li><a onClick={() => scrollToPart('BenefitsContainer')}>Benefits</a></li>
        <li><a onClick={() => scrollToPart('RoadMapContainer')}>Roadmap</a></li>
      </NavLinksContainer>

      <ExternalLinksContainer id="ExternalLinksContainer">
        <div 
          className="contact" 
          onClick={() => scrollToPart('FootContainer')}
        >
          Contact Us
        </div>
      </ExternalLinksContainer>

    </NavbarContainer>
  )
}
export default Navbar
