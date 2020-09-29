
import React, { FC, useContext } from "react";
import { ReactSortable } from "react-sortablejs";
import ConfigItemWrapper from './ConfigItemWrapper'
import AppContext from './AppContext'
import './ContentPanel.scss'

const ContentPanel = props => {
  const app = useContext(AppContext)
  const {store:{list}, dispatch} = app;
  return (
    <div className="content-panel">
      <ReactSortable 
            group={{
                name: 'shared',
                pull: 'clone' // To clone: set pull to 'clone'
            }}
            list={list} 
            setList={(data)=>dispatch({type:'setList', data})}>
        {list.map(item => {
            return <ConfigItemWrapper item={item} key={item.id} />
        })}
      </ReactSortable>
    </div>
  );
}
export default ContentPanel;