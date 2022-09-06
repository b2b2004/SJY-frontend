import React, {useEffect, useState} from 'react';
import './main.css';
import Slider from "../../components/imagesSlider/Slider";
import PopularBoardLanking from "../../components/studyOrProjectBoard/PopularBoardLanking";


function Main() {
    const [popularBoard, setPopularBoard] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8000/sopBoard/PopularBoard")
            .then((res)=> res.json())
            .then((res)=>{
                console.log(res);
                setPopularBoard(res.content);
            })
    },[])
    return <>
        <Slider />
        <div>

        </div>
        <div className='main_project_container'>
            <div className='Project_wrap'>
                <div className='newProject_wrap'>
                    <h3 className="studyOrProject_title">🔥인기 프로젝트 / 스터디🔥</h3>
                    {popularBoard.map((popularBoard) => (
                        <PopularBoardLanking key={popularBoard.id} popularBoard={popularBoard}/>
                    ))}
                </div>
            </div>
        </div>

        {/*<Chatbot />*/}


    </>;
}

export default Main;