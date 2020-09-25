
import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Button from './components/Button'
import './RightPanel.css'

const ComponentsMap = {
    'Button' : Button
}
const BasicFunction = props => {
  const [state, setState] = useState([
    { id: 0, name: "Header" },
  ]);

  return (
    <div className="right-panel">
         <ReactSortable 
            group={{
                name: 'shared',
                pull: 'clone' // To clone: set pull to 'clone'
            }}
            list={state} 
            setList={setState}>
        {state.map(item => {
            const Component = ComponentsMap[item.name];
            return Component ? <div className="item-component"><Component /> </div>: <div className="item-component" key={item.id}>{item.name}</div>;
        })}
      </ReactSortable>
    </div>
  );
}
export default BasicFunction;