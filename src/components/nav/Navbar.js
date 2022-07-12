import React, { useState, useEffect } from 'react';
import styles from "./Navbar.module.css";
import Modal from "../modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import LoginModal from "../modal/LoginModal";
import { setModalVisible } from "../../store/loginStep";
import {getValue} from "@testing-library/user-event/dist/utils";


const Navbar = React.memo(() => {
    const dispatch = useDispatch();
    //   const [modalOpen, setModalOpen] = useState(false);
    //   const openModal = () => setModalOpen(true);
    //   const closeModal = () => setModalOpen(false);

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

    return (
        <>
            <nav className={styles.navbar}>
                <a href="/">
                    <img
                        className={styles.logo}
                        src="/images/logo/codemeter_logo_.png"
                        alt="logo"
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
                    <button value="profile" className={styles.postRegister} onClick={ChagePage}>
                        내 정보
                    </button>
                    <button className={styles.postRegister} onClick={openModal}>
                        로그인
                    </button>
                    <Modal visible={modalVisible} name="login" onClose={closeModal}>
                        <LoginModal handleClose={closeModal} tabIndex={0}></LoginModal>
                    </Modal>

                </div>
            </nav>
        </>
    );
});

export default Navbar;