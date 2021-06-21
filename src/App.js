import './App.css';
import React from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import 'aos/dist/aos.css';
import logo from './image/logo.png'
import Top from "./pages/top";
import BanksyLine from "./pages/banksyLine";
import Mission from "./pages/mission";
import Problem from "./pages/problem";
import FeaturesPage from "./pages/features";
import Kind from "./pages/kind";
import Upgrade from "./pages/upgrade";
import Foot from "./pages/foot";
import 'aos/dist/aos.css';
import AOS from 'aos';
import RoadMap from "./pages/roadMap";




function scrollToPart(anchorName){
  if (anchorName) {
    let anchorElement = document.getElementById(anchorName);
    if(anchorElement) {
        anchorElement.scrollIntoView(
            {behavior: 'smooth',block:'center'}
        );
    }
  }
}

function App() {
  AOS.init({
    duration: 1500,
    easing: 'ease-in-sine',
    delay: 200,
  })

  return (
    <div className="App">
      <div className="menu">
        <Row>
          <Col span={2}/>
          <Col span={2}>
              <img className="logo" src={logo}/>
          </Col>
          <Col span={4}/>
          <Col span={14}>
            <ul className="menuUl">
              <li><a onClick={()=>scrollToPart('scc1')}>Features</a></li>
              <li><a onClick={()=>scrollToPart('scc2')}>Roadmap</a></li>
              <li><a onClick={()=>scrollToPart('oracle')}>Medium</a></li>
              <li><a onClick={()=>scrollToPart('innovation')}>Docs</a></li>
            </ul>
          </Col>
        </Row>
      </div>
      <Top />
      <BanksyLine />
      <Mission />
      <Problem />
      <FeaturesPage />
      <Kind />
      <Upgrade />
      <RoadMap />
      <Foot />
    </div>
  );
}

export default App;
