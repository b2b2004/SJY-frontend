import React from 'react';
import "./Modal.css"
import { Form, Button } from 'react-bootstrap';
import kakao_login from "../../image/kakao.png";
import naver_login from "../../image/naver.png";
import google_login from "../../image/google.png";
const Modal = (props) => {
    const { open, close } = props;

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                <header>
                    Login
                    <button className="close" onClick={close}>
                    &times;
                    </button>
                </header>

                <main>
                    <div align="center">

                        <Form >
                            <Form.Group className="mb-3">
                                <Form.Control type="id"  placeholder="id"   name = "username" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password"  name = "password" />
                            </Form.Group>


                            <Button variant="primary" type="submit">
                                로그인
                            </Button><br /><br />
                        </Form>


                        <a href="http://localhost:8000/oauth2/authorization/kakao" ><img src={kakao_login}  /></a>
                        <a href="http://localhost:8000/oauth2/authorization/naver"> <img src={naver_login} /></a>
                        <a href="http://localhost:8000/oauth2/authorization/google"><img src={google_login} /></a>
                    </div>
                </main>
                </section>
            ) : null}
        </div>
    );
};

export default Modal;
