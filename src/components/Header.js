import React from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Link to="/" className="navbar-brand">Cod_Meter</Link>
                <Nav className="mr-auto">
                    <Link to="/loginForm" className="navbar-brand">로그인</Link>
                    <br />
                    <Link to="/joinForm" className="navbar-brand">회원가입</Link>
                </Nav>
            </Navbar>
            <br />
        </>
    );
};

export default Header;