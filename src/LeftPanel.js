
import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";

import './LeftPanel.scss'

const BasicFunction = props => {
    const [state, setState] = useState([
        { id: 'button', name: "Button" },
        { id: 'input', name: "Input" },
        { id: 'text', name: "Text" },
        { id: 'radio', name: "Radio" },
        { id: 'select', name: "Select" },
        { id: 'form', name: "Form" },
        { id: 'table', name: "Table" },
    ]);

    return (
        <div className="left-panel">
            <div className="title">组件：</div>
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