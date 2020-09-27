import React from 'react'
import { Form, Row, Col, Input, Button } from 'antd';


class InputWrapper extends React.Component {
    
    render (){
        return  <Form.Item
        name={`field`}
        label={`Field`}
        rules={[
          {
            required: true,
            message: 'Input something!',
          },
        ]}
      >
        <Input placeholder="placeholder" />
      </Form.Item>
    }
}

export default InputWrapper;