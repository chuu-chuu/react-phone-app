import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} 
from '@fortawesome/free-solid-svg-icons';

function CartItem({item, value}) {
    const {id, title, img, price, count, total} = item;
    const{increment, decrement, removeItem} = value;
    return (
        <Container fluid={true}>
            <Row className="text-capitalize text-center mb-3">
                <Col lg={2} sm={10} className="mx-auto">
                    <img src={img} style={{ width: "5rem"}} alt="product" />
                </Col>

                <Col lg={2} sm={10} className="mx-auto">
                    <span className="d-lg-none"> Product : </span>{title}
                </Col>

                <Col lg={2} sm={10} className="mx-auto">
                    <span className="d-lg-none"> Price : </span>${price}
                </Col>

                <Col lg={2} sm={10} className="mx-auto">
                    <div className="d-flex mx-1 justify-content-center">
                        <span className="btn btn-black" onClick={ () => decrement(id) }> - </span>

                        <span className="btn btn-black mx-1"> {count} </span>

                        <span className="btn btn-black" onClick={ () => increment(id) }> + </span>
                    </div>
                </Col>

                <Col lg={2} sm={10} className="mx-auto trash">
                    <FontAwesomeIcon icon={faTrash} onClick={ () => removeItem(id) }/>
                </Col>

                <Col lg={2} sm={10} className="mx-auto">
                    <span className=""> </span>
                    <span className="d-lg-none"> Item Total : </span>${total} 
                </Col>
            </Row>
        </Container>
        
            
            
        
    )
}

export default CartItem;