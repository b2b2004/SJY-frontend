import React, {useState} from "react";
import styles from "./Set_Login.module.css";
import {Form} from "react-bootstrap";
import kakao_login from "../../image/kakao1.png";
import naver_login from "../../image/naver1.png";
import google_login from "../../image/google1.png";
import "./Singnin.css"
import LoadingSpinner from "../loading/LoadingSpinner";

const SetNickname = ({ nickname, setNickname, handleLoginStep ,FindPWLoginStep}) => {
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

            if(res.status === 401){
                alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
                window.location.href = "/";
            }
            else{
                let jwtToken = res.headers.get("Authorization");
                console.log(jwtToken);
                localStorage.setItem("Authorization", jwtToken);
                alert("로그인 완료");
                window.location.href = "/";
            }

        })
            .then((res) => {
                console.log("????????????????");
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
                    id="signinId"
                    type="text"
                    placeholder="아이디"
                    onChange={changeValue}
                />
                <input
                    name="password"
                    id="signinPw"
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

            <button
                onClick={handleLoginStep}
                className={styles.buttonNext}
            >
                회원가입
            </button>
            <button
                onClick={FindPWLoginStep}
                className={styles.buttonNext}
            >
                비밀번호 찾기
            </button>
        </>
    );
};

export default SetNickname;