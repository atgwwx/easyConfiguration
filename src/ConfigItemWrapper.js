import React from 'react'
import { ComponentsMap } from './Constants'
import './ConfigItemWrapper.scss'

class ConfigItemWrapper extends React.Component {

    onClick = () => {
        const { item} = this.props;
        console.log(item)
    }
    render() {
        const { item: { name, id } } = this.props;
        const Component = ComponentsMap[name];
        return Component ? <div onClick={this.onClick} className="item-wrapper"> <Component /> </div>: null;
        
    }
}

export default ConfigItemWrapper;