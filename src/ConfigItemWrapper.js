import React, {useContext} from 'react'
import { ComponentsMap } from './Constants'
import AppContext from './AppContext'
import './ConfigItemWrapper.scss'

function ConfigItemWrapper(props) {

    const app = useContext(AppContext);
    const {store, dispatch} = app;

    function onClick() {
        const { item} = props;
        dispatch({type:'setCurrentItem', data:item})
    }
  
    const { item: { name, id } } = props;
    const Component = ComponentsMap[name];
    const {configs} = store;
    const componentProps = configs[id] || {};
    return Component ? <div onClick={onClick} className="item-wrapper"> <Component {...componentProps}/> </div>: null;
        
}

export default ConfigItemWrapper;