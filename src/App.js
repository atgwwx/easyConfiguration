import React, { useReducer, useState } from 'react';
import LeftPanel from './LeftPanel'
import ContentPanel from './ContentPanel'
import RightPanel from './RightPanel'
import { Layout } from 'antd';


import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

const { Header, Footer, Sider, Content } = Layout;

const initState = {
  list:[],
  configList:{},
  currentItem:{}
};

function reducer (state, action) {
  switch(action.type) {
    case 'setList':
      return {...state, list: action.data}
    case 'setConfig':
      return {}
    case 'setCurrentItem':
      return {...state, currentItem:action.data}
  }
}
function App() {
  const [store, dispatch] = useReducer(reducer, initState); 
  
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider><LeftPanel /></Sider>
          <Content><ContentPanel list={store.list} dispatch={dispatch} /></Content>
          <Sider><RightPanel currentItem={store.currentItem}/></Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
      {/* <div className="main-content">
      
      
      </div> */}
    </div>
  );
}

export default App;
