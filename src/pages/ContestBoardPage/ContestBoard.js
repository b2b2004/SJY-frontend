import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import AllContestBoard from "../../components/contestBordP/AllContestBoard";

function ContestBoard(){
    const [contestBoard, setContestBoard] = useState([]);


    useEffect(()=>{
        fetch("http://localhost:8000/contestBoard/AllBoard")
            .then((res)=> res.json())
            .then(res =>{
                console.log(res);
                setContestBoard(res);
            })
    }, [])

    return<>
        <h1>공모전 페이지</h1>
        <Button variant="primary" href="/contestwrite">글쓰기</Button>
        <h1>공모전</h1>
        {contestBoard.map((contestBoard) => (
            <AllContestBoard key={contestBoard.id} contestBoard={contestBoard} />
        ))}
    </>
}

export default ContestBoard;