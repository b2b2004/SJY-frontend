import React, {useState} from 'react';
import "./Signup.css"
import {Form} from "react-bootstrap";

const Signup = (props) => {
    const { open, close } = props;

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
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        <div className='signuptitle'>
                            회원가입
                        </div>
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>
                        <Form onSubmit={submitUser}>
                        {/*<div className='user'>*/}
                        {/*    이름*/}
                        {/*</div>*/}
                        {/*<input*/}
                        {/*    name="username"*/}
                        {/*    className="userName"*/}
                        {/*    type="text"*/}
                        {/*    placeholder="이름을 입력해주세요."*/}
                        {/*/>*/}
                        <div className='id'>
                            아이디
                        </div>
                        <input
                            name="username"
                            className="signupId"
                            type="text"
                            placeholder="아이디를 입력해주세요."
                            onChange={changeValue}
                        />
                        <div className='pw'>
                            비밀번호
                        </div>
                        <input
                            name="password"
                            className="signupPw"
                            type="password"
                            placeholder="비밀번호를 입력해주세요."
                            onChange={changeValue}
                        />
                        <div className='pwCheck'>
                            이메일
                        </div>
                        <input
                            name="email"
                            className="signupPwCheck"
                            type="email"
                            placeholder="이메일을 입력해주세요."
                            onChange={changeValue}
                        />
                        <button className="signupBtn" type='submit'>
                            가입하기
                        </button>
                        </Form>
                    </main>
                </section>
            ) : null}
        </div>
    );
};

export default Signup;
