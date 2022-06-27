import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

function ContestDetail(props){
    const id = props.match.params.id;
    const Authorization = localStorage.getItem("Authorization");
    const [contestboard, setContestboard] = useState([])
    const [user, setUser] = useState([])

    useEffect(()=>{
        fetch(
            'http://localhost:8000/sopBoard/' + id,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',Authorization
                },
                body: JSON.stringify(id),
            }

        ).then((res)=>res.json())
            .then((res)=>{
                setContestboard(res);
                console.log(res);

            })

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

        if(user.username !== contestboard.username)
        {
            contestboard.hit =1;
            console.log(contestboard.hit);
        }
        else{
            console.log("d");
        }

    },[])

    const deleteContestBoard = () => {
        fetch('http://localhost:8000/contestBoard/' + id, {
            method: 'DELETE',
        })
            .then((res) => res.text())
            .then((res) => {
                if (res === 'ok') {
                    window.location.href = "/ContestBoard";
                } else {
                    alert('삭제실패');
                }
            });
    };

    return<>
        <h1>공모전 구현중</h1>
        <h1>수정 예정</h1>
        <h1>데이터 잘 받아옴</h1>
        <h1>id={contestboard.id}</h1>
        <h1>title={contestboard.title}</h1>
        <h1>hit={contestboard.hit}</h1>
        <Button variant="danger" onClick={deleteContestBoard}>
            삭제
        </Button>
    </>
}

export default ContestDetail;