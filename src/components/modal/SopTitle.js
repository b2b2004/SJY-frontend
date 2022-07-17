import React, {useState} from "react";
import {nextStep, previousStep, setTitle} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import styles from "./Set_Login.module.css";
import {Form} from "react-bootstrap";

const SopTitle = ({ handleClose }) => {

    const dispatch = useDispatch();

    const changeValue = (e) => {
        console.log("e.target.value = " +e.target.value);
        dispatch(setTitle(e.target.value));
        console.log("e.target.value = " +e.target.value);
    };

    const backhandleSopBoardStep = async () => {
        dispatch(previousStep());
    };

    const nexthandleSopBoardStep = async () => {
        dispatch(nextStep());
    };

    return <>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>제목</Form.Label>
                <Form.Control onChange={changeValue} name="title" type="textarea" placeholder="제목" />
            </Form.Group>
        </Form>

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

export default SopTitle;