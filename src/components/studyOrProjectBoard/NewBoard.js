import React, {useEffect, useState} from "react";
import {Card, CardGroup} from "react-bootstrap";
import './NewBoard.css';
function NewBoard(){

const [SopBoard, setSopBoard] = useState([]);

    useEffect(()=>{

        fetch("http://localhost:8000/sopBoard/NewBoard")
            .then((res)=> res.json())
            .then((res)=>{
                setSopBoard(res.content);
            })
    },[])



    const move = () =>{
        window.location.href = "/SopDetail/"+ SopBoard.id;
    }
    return<>

        {SopBoard.map((SopBoard, idx) =>
            <div key={idx}>
                <div className='NewBoard_Wrap'>
                    <CardGroup className='CardGroup' onClick={move}>
                        <Card>
                            <Card.Body className='Card_Body'>
                                <Card.Text className='Card_Text'>
                                    <Card.Text>시작 예정일</Card.Text>
                                    <Card.Title className=''>{SopBoard.title}</Card.Title>
                                    <Card.Text className='HashTag'>#{SopBoard.boardType} #{SopBoard.meetType} #{SopBoard.recruitment}명</Card.Text>
                                    <small className="text-muted">{SopBoard.techStack}</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        ) }
    </>
}


export default NewBoard;