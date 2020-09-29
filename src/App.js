import React, { useReducer, useState } from 'react';
import LeftPanel from './LeftPanel'
import ContentPanel from './ContentPanel'
import RightPanel from './RightPanel'
import { Layout } from 'antd';
import AppContext from './AppContext'

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
    <AppContext.Provider value={{store, dispatch}}>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider><LeftPanel /></Sider>
          <Content><ContentPanel /></Content>
          <Sider><RightPanel /></Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
