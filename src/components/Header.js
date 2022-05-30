import React from 'react';
import { Nav, Navbar} from "react-bootstrap";
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
                    <br />
                    <Link to="/googleLoginForm" className="navbar-brand">OAuth 로그인</Link>
                    <br />
                    <Link to="/board" className="navbar-brand">질문 게시판</Link>
                    <br />
                    <Link to="/profile" className="navbar-brand">내 정보</Link>
                    <br />
                </Nav>
            </Navbar>
            <br />
        </>
    );
};

export default Header;