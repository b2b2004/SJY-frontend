import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const LoginForm = () => {


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
                "Content-Type" : "application/json; charset=utf-8"  // 스프링시큐리티가 x-www-form-urlencoded 만 응답하기 때문에 변경
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
        <Form onSubmit={loginUser}>
            <Form.Group className="mb-3">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="id" placeholder="id"  onChange={changeValue} name = "username" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="Password"  onChange={changeValue} name = "password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                로그인
            </Button>
        </Form>
    );
};

export default LoginForm;