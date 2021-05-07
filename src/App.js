import './App.css';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import Top from "./pages/top";
import Foot from "./pages/foot";
import SystemInnovation from "./pages/systemInnovation";
import Transactions from "./pages/transactions";
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './image/logo.png'

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
          <Col span={2}><img src={logo}/></Col>
          <Col span={4}/>
          <Col span={10}>
            <ul className="menuUl">
              <li><a>Home</a></li>
              <li><a>Hub</a></li>
              <li><a>Oracle</a></li>
              <li><a>Innovation</a></li>
              <li><a>Types</a></li>
              <li><a>Team</a></li>
            </ul>
          </Col>
        </Row>
      </div>
      <Top />
      <SystemInnovation />
      <Transactions />
      <Foot />
    </div>
  );
}

export default App;
