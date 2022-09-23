import {useParams} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";

function SopMangerWrite(){
    const param = useParams();
    const id = param.id;
    const [help, setHelp] = useState(true);
    const [testSopManageBoard, setTestSopManageBoard] = useState({
        id:'',
        sopBoardID:'',
        githubAddress:'',
        zoomAddress:'',
        kakaoOpenAddress:''
    });
    const [sopManageBoard , setSopManageBoard] = useState();


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
                'Content-Type': 'application/json; charset=utf-8',
            },
        })
            .then((res)=> {
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
                 window.location.href = "/SopManage/"+ id;
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
                window.location.href = "/SopManage/"+ id;
            });

    }

    return<>
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

export default SopMangerWrite;