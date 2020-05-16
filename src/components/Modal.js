import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import styled from "styled-components";
import {ButtonContainer} from './Button.js';
import { Container, Row, Col} from 'react-bootstrap';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const{modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    if(!modalOpen) {
                        return null;
                    } else {
                        return(
                            <ModalContainer>
                                <Container>
                                    <Row>
                                        <Col md={6} className="mx-auto text-capitalize text-center p-5" id="modal" >
                                            
                                            <h4>Item Added To Cart</h4>
                                            <img src={img} className="rounded" alt="modal-img"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted mb-3">price : $ {price}</h5>
                                            <Link to="/">
                                                <ButtonContainer onClick={ () => closeModal() } className="mr-3">
                                                    Continue Shopping
                                                </ButtonContainer>
                                            </Link>

                                            <Link to="/cart">
                                                <ButtonContainer cart onClick={ () => closeModal() }>
                                                    Go To Cart
                                                </ButtonContainer>
                                            </Link>
                                            
                                        </Col>
                                    </Row>
                                </Container>
                            </ModalContainer>
                        )
                        
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.3);
display: flex;
align-item: center;
justify-content: center;
#modal {
    background: var(--mainWhite);
    margin: 3% auto 0% auto;
}
`;
