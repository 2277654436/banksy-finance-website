import React from 'react'
import TwitterIcon from '../../image/foot/Twitter.png'
import GithubIcon from '../../image/foot/Github.png'
import EmailIcon from '../../image/foot/Email.png'
import TelegramIcon from '../../image/foot/Telegram.png'
import footLogo from '../../image/foot/logo.png'
import Discord from '../../image/foot/Discord.svg'
import styled from 'styled-components'

const FootContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 500px;
  margin-bottom: 50px;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 1100px) {
  }
`

const ExternalLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  margin: 0 auto;

  @media screen and (max-width: 1100px) {
    width: 250px;
  }
`

const SCExternalLink = styled.a`
  

  img {
    width: 45px;
  }

  @media screen and (max-width: 1100px) {
    
    img {
      width: 30px;
    }
  }
`

const Logo = styled.img`
  width: 180px;
  margin: 60px 0 0 0;

  @media screen and (max-width: 1100px) {
    width: 50vw;
  }
`

const Copyright = styled.div`
  font-size: 14px;
  text-align: center;
  color: #8E8E8E;
  margin-top: 20px;

  @media screen and (max-width: 1100px) {
    font-size: 3vw;
  }
`


const Foot: React.FC = () => {
  const EXTERNAL_LINKS: Array<{ icon: string, link: string }> = [
    { icon: TwitterIcon, link: 'https://twitter.com/banksy_finance' },
    { icon: GithubIcon, link: 'https://github.com/Banksy-Finance/' },
    { icon: TelegramIcon, link: 'https://t.me/Banskyfinance' },
    { icon: EmailIcon, link: 'mailto:contact@banksy.finance' },
    { icon: Discord, link: 'https://discord.gg/NdRGt4BDFe' },
  ]
  return (
    <div className="section">
      <FootContainer  id="FootContainer">
        <ExternalLinksContainer>
          {
            EXTERNAL_LINKS.map(({ icon, link }) => (
              <SCExternalLink key={link} href={link} target="_blank" rel="noreferrer">
                <img src={icon} alt={link} />
              </SCExternalLink>
            ))
          }
        </ExternalLinksContainer>

        <Logo src={footLogo} alt="Banksy Finance" />

        <Copyright>© 2021 Banksy - Terms of Use | Privacy Policy | Cookie Settings</Copyright>
      </FootContainer>
    </div>
  )
}

export default Foot
