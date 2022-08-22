import React, {useState} from "react";
import {nextStep, previousStep, setTitle} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import styles from "./Set_Login.module.css";
import {Form} from "react-bootstrap";
import './SopTitle.css';


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
                <div className='title-wrapper'>
                    <div className='fadein'>
                        <Form.Label className="title">제목을 입력해주실 수 있나요?</Form.Label>
                    </div>
                </div>
                <input onChange={changeValue}  name="title" placeholder="제목" className="sopBoardTitleWrapper"></input>
            </Form.Group>
        </Form>


        <footer className='modal_footer'>
            <img
                className="arrow-right-title"
                src="/images/arrow-right.png"
                onClick={nexthandleSopBoardStep} />

            <img
                className="arrow-left-title"
                src="/images/arrow-left.png"
                onClick={backhandleSopBoardStep} />

        </footer>
    </>;
};

export default SopTitle;