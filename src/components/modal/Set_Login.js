import React, {useState} from "react";
import styles from "./Set_Login.module.css";
import {Form} from "react-bootstrap";
import kakao_login from "../../image/kakao1.png";
import naver_login from "../../image/naver1.png";
import google_login from "../../image/google1.png";
import "../modal/Singnin.css"

const SetNickname = ({ nickname, setNickname, handleLoginStep }) => {
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
        <>
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


            {/*<h1 className={styles.title}>*/}
            {/*    Hola에 처음 오셨군요!*/}
            {/*    <br />*/}
            {/*    우선, 사용하실 닉네임을 설정해 볼까요?*/}
            {/*</h1>*/}
            {/*<div className={styles.inputWrapper}>*/}
            {/*    <h3 className={styles.nicknameText}>닉네임</h3>*/}
            {/*    <input*/}
            {/*        className={styles.nicknameInput}*/}
            {/*        type="text"*/}
            {/*        name="nickNameInput"*/}
            {/*        value={nickname}*/}
            {/*        onChange={(e) => {*/}
            {/*            setNickname(e.target.value);*/}
            {/*        }}*/}
            {/*    />*/}
            {/*</div>*/}


            <button
                onClick={handleLoginStep}
                className={styles.buttonNext}
            >
                회원가입
            </button>
        </>
    );
};

export default SetNickname;