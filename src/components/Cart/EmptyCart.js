import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Title from '../Title';

function EmptyCart() {
    return(
        <div>
            <Container className="mt-5">
                <Row>
                    <Col lg={10} className="text-uppercase text-center text-title mx-auto">
                        <Title name="your cart is" title="currently empty"></Title>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default EmptyCart;