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
        <div>
            <Form onSubmit={submitUser}>
                <div className='name'>
                    아이디
                </div>
                <input
                    name="username"
                    id="signupId"
                    type="text"
                    placeholder="아이디"
                    onChange={changeValue}
                />
                <div className='name'>
                    비밀번호
                </div>
                <input
                    name="password"
                    id="signupId"
                    type="password"
                    placeholder="비밀번호"
                    onChange={changeValue}
                />
                <div className='name'>
                    이메일
                </div>
                <input
                    name="email"
                    id="signupEmail"
                    type="email"
                    placeholder="이메일"
                    onChange={changeValue}
                />
                <button className="signinBtn" type="submit">
                    회원가입
                </button>
                <button
                    onClick={backhandleLoginStep}
                    id='signupLine'
                >
                    뒤로가기
                </button>

            </Form>

        </div>
    );
};

export default Signup;