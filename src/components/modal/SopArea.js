import React, {useState} from "react";
import {nextStep, previousStep, setArea} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import styles from "./Set_Login.module.css";

const SopArea = ({ handleClose }) => {
    const dispatch = useDispatch();

    const changeValue = (e) => {
        console.log("e.target.value = " +e.target.value);
        dispatch(setArea(e.target.value));
    };

    const backhandleSopBoardStep = async () => {
        dispatch(previousStep());
    };

    const nexthandleSopBoardStep = async () => {
        dispatch(nextStep());
    };

    return <>
        <h1>지역</h1>
        <select onChange={changeValue} name="area">
            <option value="SEOUL">서울</option>
            <option value="GYEONGGIDO">경기도</option>
            <option value="BUSAN">부산</option>
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

export default SopArea;