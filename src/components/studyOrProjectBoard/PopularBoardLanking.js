import React, {useEffect, useState} from "react";
import {Card, CardGroup} from "react-bootstrap";
import TechStackImage from "../TechStackImage";

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
                <div className='NewBoard_Wrap'>
                    <CardGroup className='CardGroup' onClick={() =>{
                        window.location.href = "/SopDetail/"+ SopBoard.id;
                    }}>
                        <Card style={{
                            borderRadius: "20px",
                            border: "2px solid lightgrey",
                        }}>
                            <Card.Body className='Card_Body'>
                                <Card.Text className='Card_Text'>
                                    <Card.Text>시작 예정일</Card.Text>
                                    <Card.Title className='Card_Title'>{SopBoard.title}</Card.Title>
                                    <Card.Text className='HashTag'>#{SopBoard.boardType} #{SopBoard.meetType} #{SopBoard.recruitment}명</Card.Text>
                                    <small className="text-muted">{SopBoard.techStack}</small>
                                </Card.Text>
                                <div className='bottom_Text'>
                                    <hr/>
                                    <small>{SopBoard.username}</small>
                                    <div className='count_number'>
                                        <TechStackImage key={SopBoard.id} techStack={SopBoard.techStack} />
                                        <img className='eye_img' src="/images/eye.png" alt='img'/>
                                        <small className="text-muted">
                                            {SopBoard.hit}
                                        </small>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </CardGroup>

                </div>
            </div>
        ) }
    </>
}


export default PopularBoardLanking;
