import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap'

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    const getProductDetail = async () => {
        const jsonData = `/db.json`
        setLoading(true)
        const response = await fetch(jsonData)
        const data = await response.json()
        setLoading(false)
        setProduct(productDetail)
        console.log(productDetail)
    }

    useEffect(() => {
        getProductDetail()
    }, [id])

    if (loading || product == null) {
        return <h1>Data Loading...</h1>
    }
    else {
        return (
            <Container>
                <Col className="product-detail-img">
                    <img src={product?.img} alt="imgInfo" />
                </Col>
                <Row>
                    <Col>
                        <div className="product-info">{product?.title}</div>
                        <div className="product-info">{product?.price}</div>
                        <div className="choice">
                            {product?.choice ? "Conscious Point" : ""}
                        </div>
                        <Dropdown className="drop-down">
                            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                                사이즈 선택
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="dark" className="add-button">
                            상품 구매하기
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }


}

export default ProductDetail