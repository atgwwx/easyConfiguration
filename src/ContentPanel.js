
import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import ConfigItemWrapper from './ConfigItemWrapper'
import Button from './components/Button'
import Input from './components/Input'
import Form from './components/Form'
import Table from './components/Table'
import './ContentPanel.scss'

const ComponentsMap = {
    'Button' : Button,
    'Input' : Input,
    'Form' : Form,
    'Table' : Table,
}
const BasicFunction = props => {
  const [state, setState] = useState([
    // { id: 0, name: "Header" },
  ]);

  return (
    <div className="content-panel">
      <ReactSortable 
            group={{
                name: 'shared',
                pull: 'clone' // To clone: set pull to 'clone'
            }}
            list={state} 
            setList={setState}>
        {state.map(item => {
            return <ConfigItemWrapper item={item} key={item.id}/>
        })}
      </ReactSortable>
    </div>
  );
}
export default BasicFunction;