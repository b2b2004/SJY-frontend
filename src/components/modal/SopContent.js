import React, {useEffect, useState} from "react";
import {nextStep, previousStep, setBoardType, setContent} from "../../store/SopBoardStep";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Set_Login.module.css";
import {Form} from "react-bootstrap";
import './SopContent.css';
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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

        <div className='content_wrapper'>
            <div className='fadein'>
                <h1 className='title'>
                    내용을 입력해줄 수 있나요?
                </h1>

            </div>

            <Form>
                <div className="sopContentButton">
          <textarea
              placeholder="내용을 입력하세요"
              onChange={changeValue}
              name="content"
          ></textarea>
                </div>
            </Form>

        </div>
        <footer className='modal_footer'>



            <img
                className="arrow-left-tech"
                src="/images/arrow-left.png"
                onClick={backhandleSopBoardStep} />
            <button
                className='sopContent_button'
                onClick={SopSummit}

            >
                등록하기
            </button>
        </footer>





    </>;
};

export default SopContent;