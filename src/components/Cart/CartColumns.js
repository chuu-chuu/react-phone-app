import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
export default function CartColumns() {
    return(
        <div>
            <Container fluid={true} className="mt-5 mb-5">
                <Row>
                    <Col className="mx-auto">
                        <p className="text-uppercase text-center font-weight-bold">
                            Products
                        </p>
                    </Col>

                    <Col className="mx-auto">
                        <p className="text-uppercase text-center font-weight-bold">
                            name of product
                        </p>
                    </Col>

                    <Col className="mx-auto">
                        <p className="text-uppercase text-center font-weight-bold">
                            price
                        </p>
                    </Col>

                    <Col className="mx-auto">
                        <p className="text-uppercase text-center font-weight-bold">
                            quantity
                        </p>
                    </Col>

                    <Col className="mx-auto">
                        <p className="text-uppercase text-center font-weight-bold">
                            remove
                        </p>
                    </Col>

                    <Col className="mx-auto">
                        <p className="text-uppercase text-center font-weight-bold">
                            total
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
