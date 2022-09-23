import React, {useEffect, useState} from "react";
import {Card, CardGroup} from "react-bootstrap";
import TechStackImage from "../TechStackImage";

function PopularBoardLanking(props){
    console.log(props.popularBoard);
    const Authorization = localStorage.getItem("Authorization");
    const [image, setImage] = useState({
        imageUrl: '',
    });

    const { id, title, content, username, boardType, meetType, techStack, recruitment, hit ,duration_start } = props.popularBoard;

    useEffect(()=>{
        if(username !== ''){
            fetch('http://localhost:8000/profile/sopboard/' + username, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.image);
                    setImage(
                        {
                            imageUrl: require(`../../image/ProfileImage/${data.image}`)
                        }
                    )
                })
        }

    },[])

    return<>

        <div>
            <div className='NewBoard_Wrap'>
                <CardGroup className='CardGroup' onClick={() =>{
                    window.location.href = "/SopDetail/"+ id;
                }}>
                    <Card style={{
                        borderRadius: "20px",
                        border: "2px solid lightgrey",
                    }}>
                        <Card.Body className='Card_Body'>
                            <Card.Text className='Card_Text'>
                                <Card.Text>시작 예정일  |  {duration_start}</Card.Text>
                                <Card.Title className='Card_Title'>{title}</Card.Title>
                                <Card.Text className='HashTag'>#{boardType} #{meetType} #{recruitment}명</Card.Text>
                                <TechStackImage key={id} techStack={techStack} />
                            </Card.Text>
                            <div className='bottom_Text'>
                                <hr className='board_hr'/>
                                <br/>
                                <div className='boardList_img_wrapper'>
                                    <img src={image.imageUrl}/>
                                </div>
                                <small>{username}</small>
                                <div className='count_number'>

                                    <img className='eye_img' src="/images/eye.png" alt='img'/>
                                    <small className="text-muted">
                                        {hit}
                                    </small>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </CardGroup>

            </div>
        </div>
    </>
}


export default PopularBoardLanking;
