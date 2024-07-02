import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import ProductCard from './ProductCard'

const ProductAll = () => {
    const [productList, setProductList] = useState([])
    const [query, setQuery] = useSearchParams();
    const searchQuery = query.get("q") || "";
    console.log(searchQuery);

    const getProducts = async () => {
        const url = `/db.json`
        const response = await fetch(url)
        const data = await response.json()

        if (searchQuery) {
            const filteredData = data.products.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setProductList(filteredData);
            setProductList(data)
        }

        setProductList(data.products);
        console.log(data)
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container>
            <Row>
                {productList.map((item, idx) => (
                    <Col key={idx} lg={3}>
                        <ProductCard item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductAll