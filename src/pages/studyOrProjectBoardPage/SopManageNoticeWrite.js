import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {useParams} from "react-router-dom";


function SopManageNoticeWrite() {

    const param = useParams();
    const [sopManageBoard, setSopManageBoard] = useState({
        sopBoardId: '',
        title: '',
        content: '',
        }
    );

    const changeValue = (e) =>{
        console.log(e.target.value);
        setSopManageBoard({
            ...sopManageBoard,
            [e.target.name]: e.target.value,
        });
    }
    const SopManageBoardSumit = (e) =>{
        const a = parseInt(param.id);
        sopManageBoard.sopBoardId = a;
        console.log("sopBoardId = " + sopManageBoard.sopBoardId);
        e.preventDefault();
        fetch("http://localhost:8000/sopBoard/NoticeWrite",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(sopManageBoard),
            })
            .then(()=>{
                alert("글쓰기 완료");
                window.location.href = "/SopManage/"+ param.id;
            })
            .then()
    }
    return(
        <Form onSubmit={SopManageBoardSumit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>제목</Form.Label>
                <Form.Control onChange={changeValue} name="title" type="textarea" placeholder="제목" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>내용</Form.Label>
                <Form.Control onChange={changeValue} name="content"  as="textarea" rows={10} placeholder="내용"  />
            </Form.Group>
            <Button  type="submit">글쓰기</Button>
        </Form>
    )
}

export default SopManageNoticeWrite;