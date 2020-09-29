import React from 'react'
import { ComponentsMap } from './Constants'
import './ConfigItemWrapper.scss'

class ConfigItemWrapper extends React.Component {

    onClick = () => {
        const { item, dispatch} = this.props;
        dispatch({type:'setCurrentItem', data:item})
    }
    render() {
        const {store:{configs}} = this.props;
        const { item: { name, id } } = this.props;
        const Component = ComponentsMap[name];
        const props = configs[id] || {};
        return Component ? <div onClick={this.onClick} className="item-wrapper"> <Component {...props}/> </div>: null;
        
    }
}

export default ConfigItemWrapper;