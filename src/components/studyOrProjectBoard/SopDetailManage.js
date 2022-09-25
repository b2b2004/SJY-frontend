import {Button, Card, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import './SopDetailManage.css';
import SopDetailApplicant from "./SopDetailApplicant";
import BoardList from "../qna/BoardList";
import SopDetailMember from "./SopDetailMember";
// 스터디 상세 관리 페이지

function SopDetailManage(props){
    const [recuitMsg, setRecuitMsg] = useState([]);
    const {id , member} = props.sopboard;
    const str = member;
    let arr = [];
    if(str != null)
    {
        arr = str.split(/[,]/);
    }
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
        setSopManageBoard({
            ...sopManageBoard,
            [e.target.name]: e.target.value,
        });
    }


    useEffect(()=>{
        setRecuitMsg(props.recuitMsg);
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

    const SopManageBoardSubmit = (e) =>{
        e.preventDefault();
        const a = parseInt(id);
        sopManageBoard.sopBoardId = a;

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
        fetch('http://localhost:8000/sopBoard/ManagerUpdate/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(sopManageBoard),
        })
            .then((res) => res.json())
            .then((res) => {
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
            <h3 id='team_manage_title'>팀원 관리</h3>
            <hr className='manage_hr'/>
        </div>
        {arr.map((arr , index) => (
            <SopDetailMember key={index} arr={arr} id={id}/>
        ))}
        <div>
            <h3 id='apply_title'>신청 인원</h3>
            <hr className='manage_hr'/>

        </div>
        {recuitMsg.map((recuitMsg) => (
            <SopDetailApplicant key={recuitMsg.id} recuitMsg={recuitMsg} id={id}/>
        ))}

    </>
}

export default SopDetailManage;