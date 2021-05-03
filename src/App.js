import './App.css';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import Top from "./pages/top";
import Foot from "./pages/foot";
import SystemInnovation from "./pages/systemInnovation";

function App() {
  return (
    <div className="App">
      <div className="menu">
        <Row>
          <Col span={2}/>
          <Col span={1}>Banksy</Col>
        </Row>
      </div>
      <Top />
      <SystemInnovation />
      <Foot />
    </div>
  );
}

export default App;
