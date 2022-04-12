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
        console.log(User.username);
        console.log(User.password);
        fetch("http://localhost:8000/api/login",{
            method : "POST",
            headers :{
                "Content-Type" : "application/json; charset=utf-8"
            },
            body: JSON.stringify(User)
        }).then((res) => {
            console.log(res.status);
            if(res.status === 200){
                alert("로그인 완료");
                window.location.href = "/";
            }
            else{
                alert("존재하지 않는 아이디입니다");
            }
        })
            .then((res)=> {
                console.log(res);
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