import React from 'react'
import { Form, Button } from 'react-bootstrap'

const ContactFrom = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>이름</Form.Label>
                <Form.Control text="text" placeholder='이름을 입력해주세요'
                />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formNumber'>
                <Form.Label>전화번호</Form.Label>
                <Form.Control
                    type='text'
                    placeholder='전화번호를 입력해주세요'
                />
            </Form.Group>
            <Button variant='primary'>추가</Button>
        </Form>
    )
}

export default ContactFrom