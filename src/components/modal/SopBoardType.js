import React, {useState} from "react";
import {nextStep, previousStep, setBoardType} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import styles from "./Set_Login.module.css";

const SopBoardType = ({ handleSopStep }) => {
    const dispatch = useDispatch();

    const changeValue = (e) => {
        console.log("e.target.value = " +e.target.value);
        dispatch(setBoardType(e.target.value));
    };
    const nexthandleSopBoardStep = async () => {
        dispatch(nextStep());
    };

    return <>
        <h1>유형</h1>
        <select onChange={changeValue}   name="boardType">
            <option value="STUDY" >스터디</option>
            <option value="PROJECT" >프로젝트</option>
        </select>

        <button
            onClick={nexthandleSopBoardStep}
            className={styles.buttonNext}
        >다음 단계
        </button>


    </>
};

export default SopBoardType;