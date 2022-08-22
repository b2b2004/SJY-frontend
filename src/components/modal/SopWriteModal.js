import React from "react";
import styles from "./SopWriteModal.module.css";
import { useSelector } from "react-redux";
import SopMeetType from "./SopMeetType";
import SopArea from "./SopArea";
import SopRecruitment from "./SopRecruitment";
import SopDuration from "./SopDuration";
import SopTechStack from "./SopTechStack";
import SopTitle from "./SopTitle";
import SopContent from "./SopContent";
import SopBoardType from "./SopBoardType";

const SOPBOARDTYPE = 1;
const SOPMEETTYPE = 2;
const SOPAREA = 3;
const SOPRECRUITMENT = 4;
const SOPDURATION = 5;
const SOPTECHSTACK = 6;
const SOPTITLE = 7;
const SOPCONTENT = 8;

const LoginModal = ({ handleClose }) => {
    const SopBoardStep = useSelector((state) => state.sopBoardStep.currentStep);
    console.log(SopBoardStep);
    const renderByLoginStep = (SopBoardStep) => {
        switch (SopBoardStep) {
            case SOPBOARDTYPE:
                return <SopBoardType handleClose={handleClose}></SopBoardType>
            case SOPMEETTYPE:
                return <SopMeetType handleClose={handleClose}></SopMeetType>;
            case SOPAREA:
                return <SopArea handleClose={handleClose}></SopArea>
            case SOPRECRUITMENT:
                return <SopRecruitment handleClose={handleClose}></SopRecruitment>;
            case SOPDURATION:
                return <SopDuration handleClose={handleClose}></SopDuration>
            case SOPTECHSTACK:
                return <SopTechStack handleClose={handleClose}></SopTechStack>;
            case SOPTITLE:
                return <SopTitle handleClose={handleClose}></SopTitle>;
            case SOPCONTENT:
                return <SopContent handleClose={handleClose}></SopContent>;
            default:
                return <div></div>;
        }
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.modalHeader}>
                <img
                    className={styles.logo}
                    src="/images/logo/codemeter_logo_.png"
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
            <div className={styles.modalContent}>{renderByLoginStep(SopBoardStep)}</div>
        </div>
    );
};

export default LoginModal;