import React, {useState} from "react";
import styles from "./Signup.module.css";
import {Form} from "react-bootstrap";
import "./Signup.css";
import {previousStep} from "../../store/loginStep";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const Signup = ({ handleClose }) => {

    const formSchema = yup.object({
        username: yup
            .string()
            .required('아이디를 입력해주세요.')
            .max(12, '아이디는 12자리 이하여야 합니다.')
            .min(6, '아이디는 6자리 이상이어야 합니다.'),

        email: yup
            .string()
            .required('이메일을 입력해주세요')
            .email('이메일 형식이 아닙니다.'),
        password: yup
            .string()
            .required('영문,숫자,기호 포함 8자리 입력')
            .min(8, '최소 8자 이상 가능합니다')
            .max(15, '최대 15자 까지만 가능합니다')
            .matches(
                /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-]).{8,16}$/,
                '영문 숫자 특수문자 포함 8자리 입력'
            ),
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(formSchema),
    });

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

    const submitUser = (e) =>{
        User.email = e.email;
        User.password = e.password;
        User.username = e.username;
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
            });
    };

    return (
        <div>
            <Form onSubmit={handleSubmit(submitUser)}>
                <div className='name'>
                    아이디
                </div>
                <input
                    name="username"
                    id="signupId"
                    type="text"
                    placeholder="아이디"
                    {...register('username')}
                />
                {errors.username && <p className="ptag">{errors.username.message}</p>}
                <div className='name'>
                    비밀번호
                </div>
                <input
                    name="password"
                    id="signupId"
                    type="password"
                    placeholder="비밀번호"
                    {...register('password')}
                />
                {errors.password && <p className="ptag">{errors.password.message}</p>}
                <div className='name'>
                    이메일
                </div>
                <input
                    name="email"
                    id="signupEmail"
                    type="email"
                    placeholder="이메일"
                    {...register('email')}
                />
                {errors.email && <p className="ptag">{errors.email.message}</p>}
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