import React, {useEffect, useState} from "react";

function PopularBoardLanking(){

    const [SopBoard, setSopBoard] = useState([]);

    useEffect(()=>{

        fetch("http://localhost:8000/sopBoard/PopularBoard")
            .then((res)=> res.json())
            .then((res)=>{
                setSopBoard(res.content);
            })
    },[])

    return<>

        {SopBoard.map((SopBoard, idx) =>
            <div key={idx}>
                <a>순위={idx+1} id={SopBoard.id} 조회수={SopBoard.hit} <br/></a>
            </div>
        ) }
    </>
}


export default PopularBoardLanking;
