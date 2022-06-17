import React, {useEffect, useState} from "react";

function NewBoard(){

const [SopBoard, setSopBoard] = useState([]);

    useEffect(()=>{

        fetch("http://localhost:8000/sopBoard/NewBoard")
            .then((res)=> res.json())
            .then((res)=>{
                setSopBoard(res.content);
            })
    },[])

    return<>

        {SopBoard.map((SopBoard, idx) =>
            <div key={idx}>
            <a>id={SopBoard.id} title={SopBoard.title} <br/></a>
            </div>
        ) }
    </>
}


export default NewBoard;