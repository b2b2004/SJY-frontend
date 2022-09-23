import React, { useState, useEffect } from 'react';
import styles from "./Navbar.module.css";
import Modal from "../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import LoginModal from "../modal/LoginModal";
import { setModalVisible } from "../../store/loginStep";


const Navbar = React.memo(() => {
    const dispatch = useDispatch();
    const [authorization, setAuthorization] = useState(localStorage.getItem("Authorization"));

    const closeModal = () => {
        document.body.style.overflow = "auto";
        dispatch(setModalVisible(false));
    };
    const openModal = () => {
        document.body.style.overflow = "hidden";
        dispatch(setModalVisible(true));
    };
    const modalVisible = useSelector((state) => state.loginStep.modalVisible);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const ChagePage = (e) => {
        window.location.href = `/${e.target.value}`;
    };

    const ChagePage1 = (e) => {
         window.location.href = `/${e.target.name}`;
    };

    const logout = (e) =>{
        window.confirm("로그아웃 하시겠습니까?");
        localStorage.setItem("Authorization", null);
        window.location.href = "/";
    }

    return (
        <>
            <nav className={styles.navbar}>
                <a>
                    <img
                        className={styles.logo}
                        src="/images/logo/codemeter_logo_.png"
                        alt="logo"
                        name=""
                        onClick={ChagePage1}
                    />
                    <img
                        src="/images/logo/loadingImg.ico"
                        className={styles.postRegister2}
                        name="introduce"
                        onClick={ChagePage1}
                    />
                </a>
                <div className={styles.loginElementWrapper}>
                    <button value="sopboard" className={styles.postRegister} onClick={ChagePage}>
                        스터디
                    </button>
                    <button value="contestboard" className={styles.postRegister} onClick={ChagePage}>
                        공모전
                    </button>
                    <button value="boardTest" className={styles.postRegister} onClick={ChagePage}>
                        질문게시판
                    </button>
                    {authorization !== 'null' ?
                        <button value="profile" className={styles.postRegister} onClick={ChagePage}>
                            내 정보
                        </button>
                        :
                    <></>}

                    {authorization !== 'null' ?
                        <button className={styles.postRegister} onClick={logout}>
                            로그아웃
                        </button>:                   
                        <button className={styles.postRegister} onClick={openModal}>
                            로그인
                        </button>
                    }
                    <Modal visible={modalVisible} name="login" onClose={closeModal}>
                        <LoginModal handleClose={closeModal} tabIndex={0}></LoginModal>
                    </Modal>
                </div>
            </nav>
        </>
    );
});

export default Navbar;