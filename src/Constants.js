import Button from './components/Button'
import Input from './components/Input'
import Form from './components/Form'
import Table from './components/Table'

const ComponentsMap = {
    'Button' : Button,
    'Input' : Input,
    'Form' : Form,
    'Table' : Table,
}
const ComponentsConfig = {
    'Button':{
        props:[{
            label:'标题',
            name:'text'
        }]
    }
}
export {
    ComponentsMap,
    ComponentsConfig
}