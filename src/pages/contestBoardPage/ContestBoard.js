import {Button, Container, Image} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import AllContestBoard from "../../components/contestBordP/AllContestBoard";
import NewContestBoard from "../../components/contestBordP/NewContestBoard";
import styled from 'styled-components';
import Slider from "react-slick";
import "./ContestBoard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContestSlider from "../../components/contestBordP/ContestSlider";
import LoadingSpinner from "../../components/loading/LoadingSpinner";

function ContestBoard(){
    const [contestBoard, setContestBoard] = useState([]);
    const [newContestBoard, setNewContestBoard] = useState([]);
    const Authorization = localStorage.getItem("Authorization");
    const [loading, setLoading] = useState(null);



    useEffect(()=>{
        fetch("http://localhost:8000/contestBoard/AllBoard")
            .then((res)=> res.json())
            .then(res =>{
                console.log(res);
                setContestBoard(res);
            })


    }, [])

    useEffect(()=>{
        setLoading(true);
        fetch("http://localhost:8000/contestBoard/NewBoard")
            .then((res)=> res.json())
            .then((res)=>{
                setLoading(false);
                console.log(res.content);
                console.log(res.content.image);
                setNewContestBoard(res.content);
            })
    },[])


    return<>
        { loading
            ?<LoadingSpinner />
            :<> {Authorization !== 'null'
                ?
                <Button variant="primary" href="/contestwrite">글쓰기</Button>
                :
                <></>
            }
                <ContestSlider  />

                <div className="contestWrapperWrapper">
                    <div className="contestListContainer">
                        <div className="contestListName">
                            <div className="contestName">공모전명</div>
                            <div className="contestDay">접수기간</div>
                            <div className="contestHit">조회수</div>
                        </div>
                    </div>
                </div>
                {contestBoard.map((contestBoard) => (
                    <AllContestBoard key={contestBoard.id} contestBoard={contestBoard} />
                ))}

                {/*<h1>최신 공모전</h1>*/}
                {/*{newContestBoard.map((newContestBoard) => (*/}
                {/*    <NewContestBoard key={newContestBoard.id} newContestBoard={newContestBoard} />*/}
                {/*))}*/} </>
        }

    </>
}

export default ContestBoard;