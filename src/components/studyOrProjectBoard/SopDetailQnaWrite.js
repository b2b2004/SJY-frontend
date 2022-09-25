import {Form} from "react-bootstrap";
import React, {useState} from "react";
import './SopDetailQnaWrite.css';

function SopDetailQnaWrite(props){
    const Authorization = localStorage.getItem("Authorization");
    const [sopQnaboard, setSopQnaBoard] = useState({
        content: '',
        sopboardId: props.sopboard.id
    });

    const changeValue = (e) => {
        setSopQnaBoard({
            ...sopQnaboard,
            [e.target.name]: e.target.value,
        });
    };

    const submitBoard = (e) => {
        e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함.

        fetch('http://localhost:8000/sopBoard/qnaboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',Authorization
            },
            body: JSON.stringify(sopQnaboard),
        })
            .then((res) => {
                if (res.status === 201) {
                    return res.json();
                } else {
                    return null;
                }
            })
            .then((res) => {
                if (res !== null) {
                    window.location.href = "/sopDetail/"+props.sopboard.id;
                } else {
                    // alert('게시글 등록에 실패하였습니다.');
                }
            });
    };

    return<>
        <Form onSubmit={submitBoard}>
            <div className="sop_board_wrapper">


                <div className='boardInput'>
                    <textarea
                        placeholder={sopQnaboard.content}
                        onChange={changeValue}
                        name="content">

                    </textarea>
                    <div className="buttonWrapper">
                        <button
                            className="buttonComplete"
                            name="content"
                            type="submit"
                        >
                            등록
                        </button>

                    </div>
                </div>
            </div>
        </Form>
    </>
}

export default SopDetailQnaWrite;