import {Button, Card, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import './SopDetailManage.css';
import SopDetailApplicant from "./SopDetailApplicant";
import BoardList from "../qna/BoardList";
// 스터디 상세 관리 페이지

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
    const [recuitMsg, setRecuitMsg] = useState([]);

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


    useEffect(()=>{
        fetch('http://localhost:8000/sopBoard/recruitMsg/'+ id,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=utf-8', Authorization
            },
        }).then(res=>
            res.json()
        ).then((res)=>{
            setRecuitMsg(res);
            })
    },[])

    const SopManageBoardSubmit = (e) =>{
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
        <div className='SopDetailManage_container'>
            <div className='SopDetailManage_button_container'>
                <button className='sopDetail_manage_button1' onClick={move}>공지시항 등록</button>
                <button className='sopDetail_manage_button2' onClick={move1}>과제 등록</button>
            </div>

            <div className='SopDetailManage_content_container'>
                {testSopManageBoard.id === ''
                    ?
                    <div id='Manage_address'>
                        <Form onSubmit={SopManageBoardSubmit}>
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
                    </div>
                    :
                    <div>
                        <div id='Manage_address'>
                            <Form onSubmit={SopManageBoardUpdate}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Github 주소</Form.Label>
                                    <Form.Control onChange={changeValue} name="githubAddress" type="textarea"  defaultValue={testSopManageBoard.githubAddress}  />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Zoom 주소</Form.Label>
                                    <Form.Control onChange={changeValue} name="zoomAddress" type="textarea" defaultValue={testSopManageBoard.zoomAddress} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>KaKao 오픈채팅방 주소</Form.Label>
                                    <Form.Control onChange={changeValue} name="kakaoOpenAddress" type="textarea"  defaultValue={testSopManageBoard.kakaoOpenAddress} />
                                </Form.Group>
                                <button className='sopDetail_manage_button3' type="submit">등록</button>
                            </Form>
                        </div>

                    </div>
                }
            </div>
        </div>
        <div>
            <h3 className='team_manage_title'>팀원 관리</h3>
            <Card id="manage_team_container">
                <Card.Body className="manage_apply_body">

                    <div>
                        <Card.Text className='apply_username'>팀원 이름</Card.Text>
                        <Card.Title className='apply_content'>담당 업무</Card.Title>

                        <button className='manage_disagree'>탈퇴 처리</button>
                        <button className='manage_agree'>과제 등록</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
        <div>
            <hr className='manage_hr'/>
            <h3 className='apply_title'>신청 인원</h3>
        </div>
        {recuitMsg.map((recuitMsg) => (
            <SopDetailApplicant key={recuitMsg.id} recuitMsg={recuitMsg} />
        ))}

    </>
}

export default SopDetailManage;