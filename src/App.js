import React from 'react';
import LeftPanel from './LeftPanel'
import ContentPanel from './ContentPanel'
import RightPanel from './RightPanel'
import { Layout } from 'antd';


import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider><LeftPanel /></Sider>
          <Content><ContentPanel /></Content>
          <Sider><RightPanel /></Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
      {/* <div className="main-content">
      
      
      </div> */}
    </div>
  );
}

export default App;
