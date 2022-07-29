import {Button, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";

function SopDetailManage(props){
    const {id} = props.sopboard;
    const Authorization = localStorage.getItem("Authorization");
    const [testSopManageBoard, setTestSopManageBoard] = useState({
        id:'',
        sopBoardID:'',
        githubAddress:'',
        zoomAddress:'',
        kakaoOpenAddress:''
    });
    const [sopManageBoard , setSopManageBoard] = useState();
    const [help, setHelp] = useState(true);

    const changeValue = (e) =>{
        console.log(e.target.value);
        setSopManageBoard({
            ...sopManageBoard,
            [e.target.name]: e.target.value,
        });
    }

    useEffect(()=>{

        fetch('http://localhost:8000/sopBoard/aaa/'+ id,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=utf-8', Authorization
            },
        }).then((res)=> {
                if(help != true)
                {
                    return res.json();
                }
                return res.text();
            })
            .then(async res => {
                if (res === '')
                {}
                else {
                    await setHelp(false);
                    setTestSopManageBoard(res);
                    setSopManageBoard(res);
                }
            })

    },[help])

    const SopManageBoardSumit = (e) =>{
        e.preventDefault();
        const a = parseInt(id);
        sopManageBoard.sopBoardId = a;
        console.log("sopBoardId = " + sopManageBoard.sopBoardId);

        fetch(
            "http://localhost:8000/sopBoard/ManagerWrite",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(sopManageBoard),
            }
        ).then((res)=>res.json())
            .then((res)=>{
                alert("등록 완료");
                window.location.href = "/SopDetail/"+ id;
            });

    }

    const SopManageBoardUpdate = (e) =>{
        e.preventDefault();
        console.log(sopManageBoard);
        fetch('http://localhost:8000/sopBoard/ManagerUpdate/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(sopManageBoard),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setTestSopManageBoard(res);
                alert("수정 완료");
                window.location.href = "/SopDetail/"+ id;
            });

    }




    const move = (e) =>{
        window.location.href = "/SopManageNoticeWrite/" + id;
    }

    const move1 = (e) =>{
        window.location.href = "/SopManagerWrite/" + id;
    }

    return<>

    <hi>팀장 페이지</hi> <br />
        <Button onClick={move}>공지시항 글쓰기(팀장)</Button><br /><br />
        <Button onClick={move1}>관리자 관리창(관리자) (진행중)</Button>

        {testSopManageBoard.id === ''
            ?
            <Form onSubmit={SopManageBoardSumit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>깃헙 주소</Form.Label>
                    <Form.Control onChange={changeValue} name="githubAddress" type="textarea"   />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>줌 주소</Form.Label>
                    <Form.Control onChange={changeValue} name="zoomAddress" type="textarea"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>카카오 오픈채팅방 주소</Form.Label>
                    <Form.Control onChange={changeValue} name="kakaoOpenAddress" type="textarea"   />
                </Form.Group>
                <Button type="submit">등록</Button>
            </Form>
            :
            <Form onSubmit={SopManageBoardUpdate}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>깃헙 주소</Form.Label>
                    <Form.Control onChange={changeValue} name="githubAddress" type="textarea"  defaultValue={testSopManageBoard.githubAddress}  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>줌 주소</Form.Label>
                    <Form.Control onChange={changeValue} name="zoomAddress" type="textarea" defaultValue={testSopManageBoard.zoomAddress} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>카카오 오픈채팅방 주소</Form.Label>
                    <Form.Control onChange={changeValue} name="kakaoOpenAddress" type="textarea"  defaultValue={testSopManageBoard.kakaoOpenAddress} />
                </Form.Group>
                <Button type="submit">수정</Button>
            </Form>
        }
        <div><a>팀원한테 과제 낼수 있는 창 추가</a></div>
    </>
}

export default SopDetailManage;