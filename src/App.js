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
  configs:{},
  currentItem:{}
};

function reducer (state, action) {
  switch(action.type) {
    case 'setList':
      return {...state, list: action.data}
    case 'setConfig':
      const configs = state.configs;
      const data = action.data;
      configs[data.id] = data.values
      return {...state, configs}
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
          <Content><ContentPanel store={store} dispatch={dispatch} /></Content>
          <Sider><RightPanel currentItem={store.currentItem} dispatch={dispatch}/></Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
      {/* <div className="main-content">
      
      
      </div> */}
    </div>
  );
}

export default App;
