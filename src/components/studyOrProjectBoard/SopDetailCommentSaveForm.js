import {Form} from "react-bootstrap";
import React, {useState} from "react";
import './SopDetailCommentSaveForm.css';

function SopDetailCommentSaveForm(props){
    console.log(props);
    const Authorization = localStorage.getItem("Authorization");
    const id = props.id;
    const sopboardId = props.sopboardId;


    const [comment, setComment] = useState({
        content: '',
        boardId: props.id
    });

    const changeValue = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value,
        });
    };

    const submitComment = (e) => {
        e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함.

        fetch('http://localhost:8000/sopQnaComment', {
            method: 'POST',
            headers: {
                Authorization,
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(comment),
        })
            .then((res) => {
                console.log(res);
                if (res.status === 201) {
                    return res.json();
                } else {
                    return null;
                }
            })
            .then((res) => {
                console.log(res);
                // Catch는 여기서 오류가 나야 실행됨.
                if (res !== null) {
                    window.location.href = "/SopDetail/" + sopboardId;
                } else {
                    // alert('게시글 등록에 실패하였습니다.');
                }
            });
    };

    return<>
        <div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Form onSubmit={submitComment} className="comment_saveForm">

                <div className='comment_form_wrapper'>
                    <Form.Group >
                        <Form.Control
                            className='comment_Form_sopDetail'
                            type="text"
                            placeholder="내용을 입력하세요"
                            onChange={changeValue}
                            name="content"
                        />
                    </Form.Group>
                </div>

                <button
                    className="comment_input_sopDetail"
                    name="content"
                    type="submit"

                >
                    등록
                </button>

            </Form>
        </div>
    </>
}

export default SopDetailCommentSaveForm;