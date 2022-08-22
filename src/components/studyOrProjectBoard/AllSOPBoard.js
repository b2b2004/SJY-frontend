import {Card, CardGroup, ListGroup, ListGroupItem} from "react-bootstrap";
import TechStackImage from "../TechStackImage";
import './AllSopBoard.css';
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";


function AllSOPBoard(props){

    const { id, title, content, username, boardType, meetType, techStack, recruitment, hit} = props.SopBoard;

    return <>
        <CardGroup className='CardGroup' onClick={() =>{
            window.location.href = "/SopDetail/"+ id;
        }}>
            <Card style={{
                borderRadius: "20px",
                border: "2px solid lightgrey",
            }}>
                <Card.Body className='Card_Body'>
                    <Card.Text className='Card_Text'>
                        <Card.Text>시작 예정일</Card.Text>
                        <Card.Title className='Card_Title'>{title}</Card.Title>
                        <Card.Text className='HashTag'>#{boardType} #{meetType} #{recruitment}명</Card.Text>
                        <small className="text-muted">{techStack}</small>
                    </Card.Text>



                    {/*<small className="text-muted">content={content}
                        </small>*/}
                    <div className='bottom_Text'>
                        <hr/>
                        <small>{username}</small>
                        <div className='count_number'>
                            <TechStackImage key={id} techStack={techStack} />
                            <img className='eye_img' src="/images/eye.png" alt='img'/>
                            <small className="text-muted">
                                {hit}
                            </small>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </CardGroup>
    </>
}

export default AllSOPBoard;