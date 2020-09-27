import React, { useState } from 'react'
import { Form, Row, Col, Input, Button } from 'antd';
import { ReactSortable } from "react-sortablejs";


export default () => {
    console.log('Form ***********')
    const [expand, setExpand] = useState(false);
    const [fieldList, setFieldList] = useState([
        // { id: 0, name: "Header" },
    ]);
    const [form] = Form.useForm();

    const getFields = () => {
        
        return fieldList.map((item, i) => {
            return <Col span={6} key={i}>
                <Form.Item
                    name={`field-${i}`}
                    label={`Field ${i}`}
                    rules={[
                        {
                            required: true,
                            message: 'Input something!',
                        },
                    ]}
                >
                    <Input placeholder="placeholder" />
                </Form.Item>
            </Col>
        })
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div >
            <ReactSortable
                group={{
                    name: 'shared',
                    pull: 'clone' // To clone: set pull to 'clone'
                }}
                style={{ height: '80px' }}
                list={fieldList}
                setList={setFieldList}>
            </ReactSortable>
            <Form
                form={form}
                layout='vertical'
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
            >
                <Row gutter={24} >
                    {getFields()}
                </Row>
                <Row>
                    <Col
                        span={24}
                    >
                        <Button type="primary" htmlType="submit">
                            Search
          </Button>
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={() => {
                                form.resetFields();
                            }}
                        >
                            Clear
          </Button>

                    </Col>
                </Row>
            </Form>
        </div>
    )
};