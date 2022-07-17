import React, {useState} from "react";
import {nextStep, previousStep, setBoardType, setRecruitment} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import styles from "./Set_Login.module.css";

const SopRecruitment = ({ handleClose }) => {

    const dispatch = useDispatch();
    const changeValue = (e) => {
        console.log("e.target.value = " +e.target.value);
        dispatch(setRecruitment(e.target.value));
    };
    const backhandleSopBoardStep = async () => {
        dispatch(previousStep());
    };

    const nexthandleSopBoardStep = async () => {

        dispatch(nextStep());
    };

    return <>
        <h1>모집 인원</h1>
        <select onChange={changeValue} name="recruitment">
            <option value="0">미정</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>


        <button
            onClick={backhandleSopBoardStep}
            className={styles.buttonNext}
        >이전 단계
        </button>

        <button
            onClick={nexthandleSopBoardStep}
            className={styles.buttonNext}
        >다음 단계
        </button>
    </>;
};

export default SopRecruitment;