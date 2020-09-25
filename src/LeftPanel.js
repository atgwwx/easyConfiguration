
import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";

import './LeftPanel.css'

const BasicFunction = props => {
  const [state, setState] = useState([
    { id: 1, name: "Button" },
    { id: 2, name: "Text" },
    { id: 3, name: "Input" },
    { id: 4, name: "Radio" },
    { id: 5, name: "Select" }
  ]);

  return (
      <div className="left-panel">

    <ReactSortable 
        group={{
            name: 'shared',
            pull: 'clone', // To clone: set pull to 'clone'
            put: false
        }}
        sort={false}
        list={state} 
        setList={setState}>
        
      {state.map(item => (
        <div className="item-component" key={item.id}>{item.name}</div>
      ))}
    </ReactSortable>
    </div>

  );
}
export default BasicFunction;