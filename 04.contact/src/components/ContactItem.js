import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = () => {
    return (
        <Row>
            <Col>
                <img
                    width={50}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
                    alt="profile"
                />
            </Col>
            <Col lg={10}>

            </Col>
        </Row>
    )
}

export default ContactItem