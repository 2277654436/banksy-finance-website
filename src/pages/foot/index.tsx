import React from 'react'
import TwitterIcon from '../../image/foot/Twitter.png'
import GithubIcon from '../../image/foot/Github.png'
import EmailIcon from '../../image/foot/Email.png'
import TelegramIcon from '../../image/foot/Telegram.png'
import footLogo from '../../image/foot/Logo.png'
import styled from 'styled-components'

const FootContainer = styled.div`
  height: fit-content;
  font-family: 'AvenirNext';
  margin: 20vh 0 5vh 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 1100px) {
  }
`

const ExternalLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30vw;
  margin: 0 auto;

  @media screen and (max-width: 1100px) {
    width: 70vw;
  }
`

const SCExternalLink = styled.a`
  width: 4vw;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    width: 10vw;
  }
`

const Logo = styled.img`
  width: 20vw;
  margin: 5vh 0 0 0;

  @media screen and (max-width: 1100px) {
    width: 50vw;
  }
`

const Copyright = styled.div`
  font-size: 1.4rem;
  text-align: center;
  color: #8E8E8E;
  margin-top: 2rem;
  font-family: SourceHanSansCN-Light;

  @media screen and (max-width: 1100px) {
    font-size: 3vw;
  }
`


const Foot: React.FC = () => {
  const EXTERNAL_LINKS: Array<{ icon: string, link: string }> = [
    { icon: TwitterIcon, link: 'https://twitter.com/banksy_finance' },
    { icon: GithubIcon, link: 'https://twitter.com/banksy_finance' },
    { icon: TelegramIcon, link: 'https://t.me/Banskyfinance' },
    { icon: EmailIcon, link: 'mailto:contact@banksy.finance' },
  ]
  return (
    <div className="section">
      <FootContainer>
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
