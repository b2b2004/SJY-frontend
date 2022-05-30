import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";


const JoinForm = () => {

const [User,setUser] = useState({
    username: '',
    password: '',
    email: '',
});

const changeValue = (e) => {
        setUser({
            ...User,
            [e.target.name] : e.target.value
        });

};

const submitUser = (e) =>{
    e.preventDefault(); //submit이 action을 안타고 자기 할일을 그만함.
    fetch("http://localhost:8000/auth/joinProc",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json; charset=utf-8"
        },
        body: JSON.stringify(User)
    }).then((res) => {
        alert("회원가입 완료");
        window.location.href = "/";
    })
        .then((res)=> {
        console.log(res);
    });
};


    return (
        <Form onSubmit={submitUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="text" placeholder="id"  onChange={changeValue} name = "username"/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="password" onChange={changeValue} name = "password"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>이메일</Form.Label>
                <Form.Control type="email" placeholder="email" onChange={changeValue} name = "email"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                회원가입
            </Button>
        </Form>
    );
};

export default JoinForm;