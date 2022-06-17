import React, {useState} from 'react';
import "./Modal.css"
import { Form, Button } from 'react-bootstrap';
import kakao_login from "../../image/kakao1.png";
import naver_login from "../../image/naver1.png";
import google_login from "../../image/google1.png";
const Modal = (props) => {
    const { open, close } = props;



    const [User,setUser] = useState({
        username: '',
        password: '',
    });

    const changeValue = (e) => {
        setUser({
            ...User,
            [e.target.name] : e.target.value
        });

    };



    const loginUser = (e) =>{
        e.preventDefault(); //submit이 action을 안타고 자기 할일을 그만함.
        fetch("http://localhost:8000/login",{
            method : "POST",
            headers :{
                "Content-Type" : "application/json; charset=utf-8"
            },
            body: JSON.stringify(User)  // json ->  qs로 변경
        }).then((res) => {
            let jwtToken = res.headers.get("Authorization");
            console.log(jwtToken);
            localStorage.setItem("Authorization", jwtToken);
            alert("로그인 완료");
            window.location.href = "/";
        })
            .then((res) => {
                console.log("");
            });
    };

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

                        <Form onSubmit={loginUser}>
                            <Form.Group className="mb-3">
                                <Form.Control type="id" placeholder="id"  onChange={changeValue} name = "username" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password"  onChange={changeValue} name = "password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                로그인
                            </Button>
                            <br /><br />
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
