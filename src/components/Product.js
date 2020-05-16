import React from 'react';
import {Card, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} 
from '@fortawesome/free-solid-svg-icons';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 

 class Product extends React.Component {
    render() {
        const{id, title, img, price, inCart} = this.props.product;
        return (
            
                
                    <Col md="3" className="mt-3">
                        <ProductConsumer>
                            { value => (
                                <CardWrapper style={{ width: '15rem' }}>
                                    <Link to="/details">
                                        <Card.Img variant="top" src={img} alt="Products" onClick={ 
                                            () => value.handleDetail(id)} className="p-5" />
                                    </Link>
                                    
                                    <div className="text-center">
                                        <Button disabled={inCart? true : false} variant="outline-primary"
                                            onClick={ () => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }} className="m-2">
                                            {
                                                inCart ? 
                                                (<p className="text-capitalize mb-0" disabled>
                                                    {" "}
                                                    Added
                                                </p>) : 
                                                (<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>)
                                            }
                                            
                                        </Button>
                                    </div>
                                    
                                    
                                    <Card.Footer className="d-flex justify-content-between">
                                        <p className="align-self-center mb-0">{title}</p>
                                        <h5 className="text-blue font-italic mb-0">
                                            <span className="mr-1">$</span>
                                            {price}
                                        </h5>
                                    </Card.Footer>
                                </CardWrapper>
                            ) }
                            
                        </ProductConsumer>
                    </Col>
                
            
            
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const CardWrapper = styled.div `
    border: 1px solid var(--mainBlue);
    &:hover {
        box-shadow : 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
`



export default Product;
