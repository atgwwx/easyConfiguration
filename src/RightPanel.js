
import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Button from './components/Button'
import './RightPanel.scss'

const ComponentsMap = {
    'Button' : Button
}
const BasicFunction = props => {
  const [state, setState] = useState([
    { id: 0, name: "Header" },
  ]);

  return (
    <div className="right-panel">
        <div className="title">配置：</div>
    </div>
  );
}
export default BasicFunction;