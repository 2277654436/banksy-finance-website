import './App.css';
import React from 'react';
import {Col, Row} from 'antd';
import 'antd/dist/antd.css';
import 'aos/dist/aos.css';
import logo from './image/logo.png'
import Top from "./pages/top";
import Mission from "./pages/mission";
import Issues from "./pages/issues";
import Kind from "./pages/kind";
import Upgrade from "./pages/upgrade";
import Foot from "./pages/foot";
import AOS from 'aos';
import RoadMap from "./pages/roadMap";
import menuTwitter from './image/menuTwitter.png'
import menuFly from './image/menuFly.png'
import Benefits from "./pages/benefits";

function scrollToPart(anchorName) {
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if (anchorElement) {
            anchorElement.scrollIntoView(
                {behavior: 'smooth', block: 'center'}
            );
        }
    }
}

const Menu = () => {
    return (
        <div className="menu">
            <Row>
                <Col span={2}/>
                <Col xxl={2} xl={2} lg={2} md={4} sm={4} xs={4}>
                    <img className="logo" src={logo}/>
                </Col>
                <Col xxl={4} xl={4} lg={2} md={2} sm={6} xs={6}/>
                <Col xxl={12} xl={12} lg={14} md={12} sm={8} xs={8}>
                    <ul className="menuUl">
                        <li><a onClick={() => scrollToPart('mission')}>Mission</a></li>
                        <li><a onClick={() => scrollToPart('features')}>Features</a></li>
                        <li><a onClick={() => scrollToPart('benefits')}>Benefits</a></li>
                        <li><a onClick={() => scrollToPart('roadMap')}>Roadmap</a></li>
                    </ul>
                </Col>
                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}>
                    <a href={"https://twitter.com/banksy_finance"} target="_blank"><img className="menuTwitter"
                                                                                        src={menuTwitter}/></a>
                    <a href={"https://t.me/Banskyfinance"} target='_blank'><img className="menuFly" src={menuFly}/></a>
                </Col>
            </Row>
        </div>
    )
}

function App() {
    AOS.init({
        duration: 1500,
        easing: 'ease-in-sine',
        delay: 200,
    })

    return (
        <div className="App">
            <Menu/>
            <Top/>
            <Mission/>
            <Issues/>
            {/*<FeaturesPage />*/}
            <Kind/>
            <Upgrade/>
            <Benefits/>
            <RoadMap/>
            <Foot/>
        </div>
    );
}

export default App;
