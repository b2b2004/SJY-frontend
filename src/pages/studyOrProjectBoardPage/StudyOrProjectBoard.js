import {Button} from "react-bootstrap";
import AllSOPBoard from "../../components/StudyOrProjectBoard/AllSOPBoard";
import NewBoard from "../../components/StudyOrProjectBoard/NewBoard";
import React, {useEffect, useState} from "react";
import PopularBoardLanking from "../../components/StudyOrProjectBoard/PopularBoardLanking";


function StudyOrProjectBoard(){
    const [SopBoard, setSopboard] = useState([]);


    useEffect(()=>{

        fetch(
            "http://localhost:8000/sopBoard/AllBoard"
        )
            .then((res)=> res.json())
            .then(res =>{
                console.log(res);
                setSopboard(res);
            })
    }, [])

    return<>
        <h1>프로젝트 or 스터디</h1>
        <Button variant="primary" href="/sopwrite">글쓰기</Button>


        <h1>신규프로젝트</h1>
        <NewBoard />
        <h1>인기프로젝트</h1>
        <PopularBoardLanking />
        <h1>프로젝트</h1>
        {SopBoard.map((SopBoard) => (
            <AllSOPBoard key={SopBoard.id} SopBoard={SopBoard} />
        ))}
    </>
}

export default StudyOrProjectBoard;