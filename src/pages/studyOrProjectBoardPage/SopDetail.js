import React, {useEffect, useState} from "react";
import {Button, Spinner} from "react-bootstrap";
import SopNav from "../../components/studyOrProjectBoard/SopNav";
import {useHistory} from "react-router-dom";
import SopDetailNotice from "../../components/studyOrProjectBoard/SopDetailNotice";
import SopDetailCP from "../../components/studyOrProjectBoard/SopDetailCP";
import SopDetailManage from "../../components/studyOrProjectBoard/SopDetailManage";
import SopDetailSchedule from "../../components/studyOrProjectBoard/SopDetailSchedule";
import SopDetailQnaList from "../../components/studyOrProjectBoard/SopDetailQnaList";
import SopDetailQnaWrite from "../../components/studyOrProjectBoard/SopDetailQnaWrite";
import BoardList from "../../components/qna/BoardList";

function SopDetail(props){
    const id = props.match.params.id;
    const Authorization = localStorage.getItem("Authorization");
    const [sopboard, setSopboard] = useState({
        username:""
    })
    const [user, setUser] = useState([])
    const [component, setComponent] = useState({
        detail: true,
        schedule: false,
        notice: false,
        Qna: false,
        manage: false
    })
    const [sopDetailQna , setSopDetailQna] = useState({
        id:"",
        username:""
    });

    useEffect( () => {
        fetch(
            "http://localhost:8000/sopBoard/OneBoard", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
                body: JSON.stringify(id),
            }
        ).then((res) => res.json())
            .then((res) => {
                setSopboard(res);
                console.log(sopboard);
            })
    },[])

    useEffect(()=>{
        // 현재 접속한 유저
        fetch("http://localhost:8000/profile",{
                method: 'GET',
                headers:{
                    Authorization
                }
            }
        ).then((res) =>res.json()
        ).then((data)=>{
            setUser(data);
            console.log(data);
        })
    },[])

    useEffect(() => {
        fetch('http://localhost:8000/sopBoard/qnaboard/' + id)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setSopDetailQna(res);
                console.log(res);
            }); // 비동기 함수
    }, []);


    useEffect(()=>{
        // 조회수 관리
        if(user.username !== sopboard.username)
        {
            sopboard.hit +=1;
        }
        else{
            console.log("hit++");
        }
    },[])


    const move = () =>{
        window.location.href = "/SopManage/"+ id;
    }
    const setmenu = (e) =>{
        setComponent({[e.target.name] : true}
        )
    }

    return<>
        <SopNav sopboard={sopboard} key={sopboard.id} />
        <button onClick={move}>관리페이지로 이동(추후 팀원/팀장만 넘어갈 수 있게 만듬)</button>
        <div>
            <Button onClick={setmenu} name="detail" variant="outline-primary">상세페이지</Button> {' '}
            <Button onClick={setmenu} name="schedule" variant="outline-primary">세부일정</Button>{' '}
            <Button onClick={setmenu} name="notice" variant="outline-primary">공지사항</Button>{' '}
            <Button onClick={setmenu} name="Qna" variant="outline-primary">질문게시판</Button>{' '}
            <Button onClick={setmenu} name="manage" variant="outline-primary">관리</Button>{' '}

            <div>
                {component.detail === true ? <SopDetailCP sopboard={sopboard} key={sopboard.id} /> : <></>}
                {component.schedule === true ? <SopDetailSchedule sopboard={sopboard} key={sopboard.id} /> : <></>}
                {component.notice === true ? <SopDetailNotice sopboard={sopboard} key={sopboard.id} /> : <></>}
                {component.Qna === true ?
                    <div>
                        <SopDetailQnaWrite sopboard={sopboard} key={sopboard.id} /> <br />
                        {sopDetailQna.map((sopDetailQna) => (
                            <SopDetailQnaList key={sopDetailQna.id} sopDetailQna={sopDetailQna} />
                        ))}
                    </div>
                    : <></>}
                {component.manage === true ? <SopDetailManage sopboard={sopboard} key={sopboard.id} /> : <></>}
            </div>

        </div>
    </>
}

export default SopDetail;