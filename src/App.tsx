import './App.css'
import React from 'react'
import 'antd/dist/antd.css'
import 'aos/dist/aos.css'
import Top from './pages/top'
import Mission from './pages/mission'
import Issues from './pages/issues'
import Mapper from './pages/mapper'
import Features from './pages/features'
import Foot from './pages/foot'
import AOS from 'aos'
import RoadMap from './pages/roadmap'
import Benefits from './pages/benefits'
import Solutions from './pages/solutions'
import Team from './pages/team'
import Support from './pages/support'

const App = () => {
  // const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  // const [current, setCurrent] = useState(1)

  AOS.init({
    duration: 1000,
    easing: 'ease-in-sine',
    delay: 0,
  })

  return (
    <div className="App">
      {/*{*/}
      {/*  isMobile ? (*/}
      {/*    <div>*/}
      <Top />
      {/*<Mission />*/}
      <Issues />
      <Solutions />
      {/*<Mapper />*/}
      <Features />
      <Support />
      <Benefits />
      <RoadMap />
      <Team />
      <Foot />
      {/*    </div>
        ) : (
          <div>
            <ReactFullpage
              licenseKey="banksy-finance"
              navigation={true}
              scrollingSpeed={500}
              parallax={true}
              onLeave={(index, next) => {
                setCurrent(next.index)
              }}
              render={() => (
                <ReactFullpage.Wrapper>
                  <Top/>
                  <Mission active={current === 1}/>
                  <Issues active={current === 2}/>
                  <Solutions active={current === 3}/>
                  <Mapper active={current === 4}/>
                  <Features active={current === 5}/>
                  <Benefits active={current === 6}/>
                  <RoadMap active={current === 7}/>
                  <Team active={current === 8}/>
                  <Foot active={current === 9}/>
                </ReactFullpage.Wrapper>
              )}
              afterRender={() => {
              }}
            />
          </div>
        )
      }*/}
    </div>
  )
}

export default App
