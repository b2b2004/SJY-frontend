import React, {useEffect, useState} from 'react';
import "./Singnin.css"
import { Link } from "react-router-dom";
import Modal2 from '../modal/Signup';
import kakao_login from "../../image/kakao1.png";
import naver_login from "../../image/naver1.png";
import google_login from "../../image/google1.png";
import {Form} from "react-bootstrap";


const Signin = (props) => {

    const { open, close } = props;
    const [setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);


    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {setModalOpen(true);}
    const closeModal = () => setModalOpen(false);

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


    const outh2Login = (e) =>{
        const UrlId = e.target.id;
        window.location.href="http://localhost:8000/oauth2/authorization/"+UrlId;
    }


    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        로그인
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>

                        <Form onSubmit={loginUser} >
                        <input
                            name="username"
                            className="signinId"
                            type="text"
                            placeholder="아이디"
                            onChange={changeValue}
                        />
                        <input
                            name="password"
                            className="signinPw"
                            type="password"
                            placeholder="비밀번호"
                            onChange={changeValue}
                        />
                        <button className="signinBtn" type="submit">
                            로그인
                        </button>
                        </Form>

                        <div className="socialBox">
                            <div className="kakao" id="kakao"  onClick={outh2Login}>
                                <img className="kakaoLogo" alt="kakao" src={kakao_login} />
                                <div className="kakaoText" id="kakao">
                                    카카오 계정으로 로그인
                                </div>
                            </div>
                            <div className="naver" id="naver" onClick={outh2Login}>
                                <img className="naverLogo" alt="naver" src={naver_login} />
                                <div className="naverText"  id="naver">
                                    네이버 계정으로 로그인
                                </div>
                            </div>
                            <div className="google" id="google" onClick={outh2Login}>
                                <img className="googleLogo" alt="google" src={google_login} />
                                <div className="googleText" id="google">
                                    구글 계정으로 로그인
                                </div>
                            </div>
                        </div>
                        <div className="signinLine">
                            회원이 아니신가요?
                        </div>
                        <div className="nsignup" onClick={openModal} >
                            회원가입
                        </div>
                        <Modal2 open={modalOpen} close={closeModal}></Modal2>
                    </main>
                </section>
            ) : null}
        </div>
    );
};

export default Signin;
