
import React, { FC, useState, useContext } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { ComponentsConfig } from './Constants'
import AppContext from './AppContext'
import './RightPanel.scss'

const RightPanel = props => {
    const app = useContext(AppContext);
    const {store, dispatch} = app;
    const { currentItem = {} } = store;
    
    function onFinish (values) {
        dispatch({
            type:'setConfig',
            data:{
                id: currentItem.id,
                values
            }
        })
    }
    function getFields(itemName) {
        if(!ComponentsConfig[itemName])return null;
        const props = ComponentsConfig[itemName].props;
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
        };

        return <Form
            {...layout}
            name="basic"
            onFinish={onFinish}
        >
            {props.map(item => {
                return  <Form.Item
                label={item.label}
                name={item.name}
                key={item.name}
            >
                <Input />
            </Form.Item>
            })}
        </Form>
    }
    return (
        <div className="right-panel">
            <div className="title">配置：{currentItem.name}</div>
            {currentItem.name && getFields(currentItem.name)}
        </div>
    );
}
export default RightPanel;