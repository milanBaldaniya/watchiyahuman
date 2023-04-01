import React from 'react'
import Layout from './layout/Layout'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/product-card/ProductCard';
import { productData } from '../component/product-card/productData';

const Home = () => {
    return (
        <Layout>
            <Container>
                <Row className='my-5'>
                    {productData?.length > 0 ? productData.map((product, index) => {
                        return (
                            <Col key={index} className='mb-2' lg={4} md={6} >
                                <ProductCard product={product} />
                            </Col>
                        )
                    })
                        : <div>Loading...</div>
                    }
                </Row>
            </Container>
        </Layout >
    )
}

export default Home;