import React from 'react';
import LefePanel from './LeftPanel'
import RightPanel from './RightPanel'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-content">
      <LefePanel />
      <RightPanel />
      </div>
    </div>
  );
}

export default App;
