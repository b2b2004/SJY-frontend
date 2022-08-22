import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import AllContestBoard from "../../components/contestBordP/AllContestBoard";
import NewContestBoard from "../../components/contestBordP/NewContestBoard";

function ContestBoard(){
    const [contestBoard, setContestBoard] = useState([]);
    const [newContestBoard, setNewContestBoard] = useState([]);
    const Authorization = localStorage.getItem("Authorization");

    useEffect(()=>{
        fetch("http://localhost:8000/contestBoard/AllBoard")
            .then((res)=> res.json())
            .then(res =>{
                console.log(res);
                setContestBoard(res);
            })
    }, [])

    useEffect(()=>{

        fetch("http://localhost:8000/contestBoard/NewBoard")
            .then((res)=> res.json())
            .then((res)=>{
                console.log(res.content);
                console.log(res.content.image);
                setNewContestBoard(res.content);
            })
    },[])

    return<>
        <h1>공모전 페이지</h1>
        {Authorization !== 'null'
            ?
            <Button variant="primary" href="/contestwrite">글쓰기</Button>
            :
            <></>
        }

        <h1>공모전</h1>
        {contestBoard.map((contestBoard) => (
            <AllContestBoard key={contestBoard.id} contestBoard={contestBoard} />
        ))}

        <h1>최신 공모전</h1>
        {newContestBoard.map((newContestBoard) => (
            <NewContestBoard key={newContestBoard.id} newContestBoard={newContestBoard} />
        ))}
    </>
}

export default ContestBoard;