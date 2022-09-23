import {Card, CardGroup, ListGroup, ListGroupItem} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import "./AllContestBoard.css";

function AllContestBoard(props){


    const {username, image, host, duration_end, hit, title, contest, id} = props.contestBoard;
    const [contestImageUrl, setContestImageUrl] = (useState({
        imageUrl: ''
    }))

    useEffect(()=>{
        setContestImageUrl(
            {
                imageUrl: require(`../../image/ContestImage/${image}`)
            }
        )
    },[])

    const move = () =>{
        window.location.href = "/ContestDetail/"+ id;
    }

    return <>
        <div className="contestWrapper" onClick={move}>
            <div className="contestListContainer">
                <div className="contestListOne">
                    <img className="contestListImage" alt="basic" src={contestImageUrl.imageUrl} />
                    <div className="contestListTitleContentHost">
                        <div className="contestListTitle">
                            제목: {title}
                        </div>
                        <div className="contestListContent">
                            분야: 기획/아이디어, 웹/모바일/IT, 게임/소프트웨어, 과학/공학,
                            예체능/미술/음악
                        </div>
                        <div className="contestListHost">주최: {host}</div>
                    </div>
                    <div className="contestListDay">~{duration_end}</div>
                    <div className="contestListHit">{hit}</div>
                </div>
            </div>
        </div>


        {/*<CardGroup style={{width: '18rem'}} onClick={move}>*/}
        {/*    <Card>*/}
        {/*        <Card.Body>*/}
        {/*            <Card.Title>제목 = {title}</Card.Title>*/}
        {/*            <Card.Text>*/}
        {/*                <Card.Text><img src={contestImageUrl.imageUrl}/>{image}</Card.Text>*/}
        {/*                <Card.Text>username = {username}</Card.Text>*/}
        {/*                <Card.Text>주최사 = {host}</Card.Text>*/}
        {/*                <Card.Text>디데이</Card.Text>*/}
        {/*            </Card.Text>*/}
        {/*        </Card.Body>*/}
        {/*        <Card.Footer>*/}
        {/*            <small className="text-muted">조회수={hit}     </small>*/}
        {/*        </Card.Footer>*/}
        {/*    </Card>*/}
        {/*</CardGroup>*/}
    </>
}

export default AllContestBoard;