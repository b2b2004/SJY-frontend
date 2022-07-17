import React, {useState} from "react";
import {nextStep, previousStep, setMeetType} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import styles from "./Set_Login.module.css";

const SopMeetType = ({ handleClose }) => {

    const changeValue = (e) => {
        console.log("e.target.value = " +e.target.value);
        dispatch(setMeetType(e.target.value));
    };

    const dispatch = useDispatch();
    const backhandleSopBoardStep = async () => {
        dispatch(previousStep());
    };

    const nexthandleSopBoardStep = async () => {
        dispatch(nextStep());
    };

    return <>
        <h1>온/오프라인</h1>
        <select onChange={changeValue} name="meetType">
            <option value="ONLINE">온</option>
            <option value="OFFLINE">오프</option>
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

export default SopMeetType;