import React, {useEffect, useState} from "react";
import {nextStep, previousStep, setBoardType, setContent} from "../../store/SopBoardStep";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Set_Login.module.css";
import {Form} from "react-bootstrap";
import moment from "moment";

const SopContent = ({ handleClose }) => {

    const dispatch = useDispatch();
    const sopBoard = useSelector((state) => state.sopBoardStep);
    const Authorization = localStorage.getItem("Authorization");
    const changeValue = (e) => {
        console.log("e.target.value = " +e.target.value);
        dispatch(setContent(e.target.value));
    };

    useEffect(()=>{
        console.log(sopBoard);
    },[])

    const SopSummit = (e) => {
        e.preventDefault();
        console.log(sopBoard);
        if (sopBoard.meetType != null && sopBoard.boardType != null) {
            fetch("http://localhost:8000/sopBoard/sopWrite",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8', Authorization
                    },
                    body: JSON.stringify(sopBoard),
                })
                .then(() => {
                    alert("글쓰기 완료");
                    window.location.href = "/sopboard";
                })
                .then()
        }
        else{
            alert("meetType / boardType를 입력해주세요");
        }
    }


    const backhandleSopBoardStep = async () => {
        dispatch(previousStep());
    };
    const nexthandleSopBoardStep = async () => {
        dispatch(nextStep());
    };

    return <>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>내용</Form.Label>
            <Form.Control onChange={changeValue} name="content"  as="textarea" rows={10} placeholder="내용"  />
        </Form.Group>
        </Form>

        <button
            onClick={backhandleSopBoardStep}
            className={styles.buttonNext}
        >이전 단계
        </button>


        <button
            onClick={SopSummit}
            className={styles.buttonNext}
        >만들기
        </button>
    </>;
};

export default SopContent;