import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart, faCameraRetro} from '@fortawesome/free-solid-svg-icons';

import {Navbar, Nav, Container} from 'react-bootstrap';


class Navigation extends Component {
    render() {
        return (
            <NavWapper>
            <Navbar  collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <Link to="/" className="logo" alt="Logo">
                                
                                <FontAwesomeIcon icon={faCameraRetro} className="camera"/>
                                
                                
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav activeKey="/">
                                <Nav.Link eventKey={1} href="/">
                                    Product
                                </Nav.Link>
                                
                                <Nav.Link eventKey={2} href="/cart">
                                    <ButtonContainer>
                                        <span className="mr-2">
                                            <FontAwesomeIcon icon={faShoppingCart}/> 
                                        </span>
                                        Add To Cart
                                    </ButtonContainer>
                                    
                                </Nav.Link>

                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </NavWapper>
        )
    }
}
const NavWapper = styled.nav `
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`

export default  Navigation;
