
import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import ConfigItemWrapper from './ConfigItemWrapper'
import './ContentPanel.scss'

const BasicFunction = props => {
  // const [state, setState] = useState([
  //   // { id: 0, name: "Header" },
  // ]);
  const {store:{list}} = props;
  return (
    <div className="content-panel">
      <ReactSortable 
            group={{
                name: 'shared',
                pull: 'clone' // To clone: set pull to 'clone'
            }}
            list={list} 
            setList={(data)=>props.dispatch({type:'setList', data})}>
        {list.map(item => {
            return <ConfigItemWrapper item={item} key={item.id} store={props.store} dispatch={props.dispatch}/>
        })}
      </ReactSortable>
    </div>
  );
}
export default BasicFunction;