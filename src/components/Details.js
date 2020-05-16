import React,  { Component }from 'react';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import {Container, Col, Row, Button} from 'react-bootstrap';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const{
                        id, title, img, company, info, price, inCart
                    } = value.detailProduct;
                     
                     return(
                         <Container className="py-5">
                             <Row className="justify-content-center">
                                
                                    <h1 className="py-3 text-blue">{title}</h1>
                               
                             </Row>
                             <Row>
                                 <Col md={6} >
                                    <img src={img} alt="Detail-Img"/>
                                 </Col>

                                 <Col md={6} className="text-capitalize mx-auto">
                                    <h2 className="mb-2">Model : {title}</h2>
                                    <h4 className="text-title mt-2 mb-2">
                                        Made By : {company}
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>price : <span>$</span>{price}</strong>
                                    </h4>
                                    <p className="mt-2 mb-2 font-weight-bold text-capitalize">
                                        Some Info About Product : 
                                    </p>
                                    <p className="mt-2 text-muted">{info}</p>
                                    <div className="d-flex">
                                        <Link to="/">
                                            <Button variant="outline-primary">
                                                Back To Products
                                            </Button>
                                        </Link>

                                        <ButtonContainer variant="outline-warning" className="ml-5" cart disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>
                                            { inCart ? "In Cart" : "Add To Cart"}
                                        </ButtonContainer>
                                    </div>
                                 
                                 </Col>
                                 
                             </Row>
                         </Container>
                     )
                }}
            </ProductConsumer>
        )
    }
}

export default Details;
