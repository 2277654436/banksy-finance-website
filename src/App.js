import './App.css';
import React from 'react';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import Top from "./pages/top";
import Foot from "./pages/foot";
import SystemInnovation from "./pages/systemInnovation";
import Transactions from "./pages/transactions";
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './image/logo.png'



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
          <Col span={2}><img className="logo" src={logo}/></Col>
          <Col span={4}/>
          <Col span={14}>
            <ul className="menuUl">
              <li><a onClick={()=>scrollToPart('scc1')}>Home</a></li>
              <li><a onClick={()=>scrollToPart('scc2')}>Hub</a></li>
              <li><a onClick={()=>scrollToPart('oracle')}>Oracle</a></li>
              <li><a onClick={()=>scrollToPart('innovation')}>Innovation</a></li>
              <li><a onClick={()=>scrollToPart('types')}>Types</a></li>
              <li><a onClick={()=>scrollToPart('team')}>Team</a></li>
              {/*<li><a href="http://app.banksy.finance/">Explore</a></li>*/}
            </ul>
          </Col>
        </Row>
      </div>
      <Top />
      <SystemInnovation/>
      <Transactions />
      <Foot />
    </div>
  );
}

export default App;
