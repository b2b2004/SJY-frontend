import React from "react";
import styles from "./LoginModal.module.css";
import { useSelector } from "react-redux";
import SetLoginContainer from "./Set_Login_Container";
import Signup from "./Signup";
/*
LoginModal Component
로그인 시도 시 가입 여부에 따라서 가입 된 유저면 모달을 닫고,
미가입된 유저면 회원가입을 진행합니다.
loginStep에 따라
true면 <SocialLogin>, false면 <SignUp>
component를 rendering 합니다.
to-do
꼭 modalvisible이 전역 state로 관리가 되어야 하는가?
*/

const SIGNIN = 1;
const SIGNUP = 2;

const LoginModal = ({ handleClose }) => {
    const loginStep = useSelector((state) => state.loginStep.currentStep);
    console.log(loginStep);
    const renderByLoginStep = (loginStep) => {
        switch (loginStep) {
            case SIGNIN:
                return <SetLoginContainer />;
            case SIGNUP:
                return <Signup handleClose={handleClose}></Signup>;
            default:
                return <div></div>;
        }
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.modalHeader}>
                <img
                    className={styles.logo}
                    src="/images/logo/hola_logo_y.png"
                    alt="welcome"
                ></img>
                <div className={styles.exitWrapper} onClick={handleClose}>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        tabIndex="1"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                </div>
            </div>
            <div className={styles.modalContent}>{renderByLoginStep(loginStep)}</div>
        </div>
    );
};

export default LoginModal;