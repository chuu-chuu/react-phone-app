import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function CartTotals({value}) {
    const{ cartSubtotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <Container fluid={true}>
                <Row>
                    <Col lg={12} sm={8} className="text-capitalize text-right">
                        <Link to="/">
                            <Button variant="outline-danger" className="text-uppercase mr-5 mb-3" onClick={ () => clearCart()}>
                                Clear Cart
                            </Button>
                        </Link>
                    </Col>

                    <Col lg={12} sm={8} className="text-capitalize text-right  pr-5 mb-2">
                        <span className="text-title">subtotal : </span> $ {cartSubtotal}
                    </Col>

                    <Col lg={12} sm={8} className="text-capitalize text-right  mb-2 pr-5">
                        <span className="text-title">tax : </span> $ {cartTax}
                    </Col>

                    <Col lg={12} sm={8} className="text-capitalize text-right  mb-2 pr-5">
                        <span className="text-title">total : </span> $ {cartTotal}
                    </Col>

                </Row>
            </Container>
            
        </React.Fragment>
    )
}

export default CartTotals;