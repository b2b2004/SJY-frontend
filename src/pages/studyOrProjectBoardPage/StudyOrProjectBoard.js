import {Button} from "react-bootstrap";
import AllSOPBoard from "../../components/StudyOrProjectBoard/AllSOPBoard";
import NewBoard from "../../components/StudyOrProjectBoard/NewBoard";
import React, {useEffect, useState} from "react";
import PopularBoardLanking from "../../components/StudyOrProjectBoard/PopularBoardLanking";
import './StudyOrProjectBoard.css';

function StudyOrProjectBoard(){
    const [SopBoard, setSopboard] = useState([]);

    useEffect(()=>{
        fetch(
            "http://localhost:8000/sopBoard/AllBoard"
        )
            .then((res)=> res.json())
            .then(res =>{
                console.log(res);
                setSopboard(res);
            })
    }, [])

    return<>
        <div className='project_container'>
            <h6 className='main'>recruit</h6>
            <h3 className="studyOrProject_write_title">프로젝트 or 스터디</h3>
            <Button  className='button_write' variant="primary" href="/sopwrite">글쓰기</Button>

            <div className='Project_wrap'>
                <div className='newProject_wrap'>
                    <h3 className="studyOrProject_title">🔥인기프로젝트🔥</h3>
                    <PopularBoardLanking />
                </div>
                {/*<div className='popularProject_wrap'>*/}
                {/*    <h3 className="studyOrProject_title">인기프로젝트</h3>*/}
                {/*    <PopularBoardLanking/>*/}
                {/*</div>*/}
            </div>
            <div className='allProject_wrap'>        <h3 className="studyOrProject_title">✨프로젝트 / 스터디✨</h3>

                {/*받아오기*/}
                {SopBoard.map((SopBoard) => (
                    <AllSOPBoard key={SopBoard.id} SopBoard={SopBoard}/>
                ))}
            </div>

        </div>
    </>
}

export default StudyOrProjectBoard;