import './App.css';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import Top from "./pages/top";
import Foot from "./pages/foot";

function App() {
  return (
    <div className="App">
      <div className="menu">
        <Row>
          <Col span={12}/>
          <Col span={1}><a href={"#"}>HOME</a></Col>
          <Col span={1}><a href={"#"}>WHITEPAPER</a></Col>
          <Col span={1}><a href={"#"}>FEATURES</a></Col>
          <Col span={1}><a href={"#"}>ORACLE</a></Col>
          <Col span={1}><a href={"#"}>TAME</a></Col>
          <Col span={1}><a href={"#"}>CONTACT</a></Col>
        </Row>
      </div>
      <Top />
      <Foot />
    </div>
  );
}

export default App;
