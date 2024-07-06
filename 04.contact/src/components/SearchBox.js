import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const SearchBox = () => {
    return (
        <Form>
            <Row>
                <Col lg={10}>
                    <Form.Control
                        type='text'
                        placeholder='이름을 입력해주세요'
                    />
                </Col>
                <Col lg={2}>
                    <Button type='submit'>찾기</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default SearchBox