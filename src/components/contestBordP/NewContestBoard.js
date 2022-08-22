import React, {useEffect, useState} from "react";
import {Card, CardGroup} from "react-bootstrap";

function NewContestBoard(props){

    const {username, image, host,duration_start , duration_end, hit, title, contest, id} = props.newContestBoard;
    const [contextImage, setContestImage] = useState([{
        imageUrl: ''
    }])

    useEffect(()=>{
                setContestImage({
                    imageUrl: require(`../../image/ContestImage/${image}`)
                });

    },[])



    const move = () =>{
        window.location.href = "/ContestDetail/"+ id;
    }
    return<>
        <CardGroup style={{width: '18rem'}} onClick={move}>
            <Card>
                <Card.Body>
                    <Card.Title>제목 = {title}</Card.Title>
                    <Card.Text>
                        <Card.Text><img src={contextImage.imageUrl}/></Card.Text>
                        <Card.Text>username = {username}</Card.Text>
                        <Card.Text>주최사 = {host}</Card.Text>
                        <Card.Text>시작일 = {duration_start}</Card.Text>

                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">조회수={hit}     </small>
                </Card.Footer>
            </Card>
        </CardGroup>
    </>
}

export default NewContestBoard;