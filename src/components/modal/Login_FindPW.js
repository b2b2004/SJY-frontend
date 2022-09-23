import React, {useState} from "react";
import {Form} from "react-bootstrap";
import "./Login_FindPW.css";
import {doublepreviousStep, previousStep} from "../../store/loginStep";
import {useDispatch} from "react-redux";

const Login_FindPW = ({ handleClose }) => {

    const dispatch = useDispatch();
    const backhandleLoginStep = async () => {
        dispatch(doublepreviousStep());
    };
    const [User,setUser] = useState({
        username: '',
        email: '',
        image: "user.png"
    });

    const changeValue = (e) => {
        setUser({
            ...User,
            [e.target.name] : e.target.value
        });
    };

    const submitemailandid = (e) =>{
        e.preventDefault();
        fetch("http://localhost:8000/check/emailandid",{
            method : "POST",
            headers :{
                "Content-Type" : "application/json; charset=utf-8"
            },
            body: JSON.stringify(User)
        }).then((res) =>res.text())
            .then((res)=> {
                console.log(res);
                if(res == "유저 확인")
                {
                   fetch("http://localhost:8000/check/sendMail",{
                       method : "POST",
                       headers :{
                           "Content-Type" : "application/json; charset=utf-8"
                       },
                       body: JSON.stringify(User)
                   })
                       .then((res) =>{res.text()})
                       .then((res)=>{
                           alert("임시 비밀번호가 발송 되었습니다.");
                           window.location.href = "/";
                       })
                }
                else
                {
                    alert(res);
                }
            });
    };


    return (
        <div>
            <Form onSubmit={submitemailandid}>
                <div className='name'>
                   등록된 아이디
                </div>
                <input
                    name="username"
                    id="signupId"
                    type="text"
                    placeholder="아이디"
                    onChange={changeValue}
                />
                <div className='name'>
                   등록된 이메일
                </div>
                <input
                    name="email"
                    id="signupEmail"
                    type="email"
                    placeholder="이메일"
                    onChange={changeValue}
                />
                <button className="signinBtn" type="submit">
                    임시 비밀번호 발송
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

export default Login_FindPW;