import React, {useState} from "react";
import styles from "./Signup.module.css";
import {Form} from "react-bootstrap";
import "./Signup.css";
import {previousStep} from "../../store/loginStep";
import {useDispatch} from "react-redux";

const Signup = ({ handleClose }) => {

    const dispatch = useDispatch();
    const backhandleLoginStep = async () => {
        dispatch(previousStep());
    };
    const [User,setUser] = useState({
        username: '',
        password: '',
        email: '',
        image: "user.png"
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

                            <button
                                onClick={backhandleLoginStep}
                                className={styles.buttonNext}
                            >
                                로그인창으로가기(구현 좀)
                            </button>
                        </Form>
    );
};

export default Signup;