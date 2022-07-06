import React from 'react';
import './main.css';
import Slider from "../../components/imagesSlider/Slider";
import PopularBoardLanking from "../../components/StudyOrProjectBoard/PopularBoardLanking";


function Main() {
    return <>
        <Slider />
        <div>
            
        </div>
        <div className='main_project_container'>
            <div className='Project_wrap'>
                <div className='newProject_wrap'>
                    <h3 className="studyOrProject_title">🔥인기 프로젝트 / 스터디🔥</h3>
                    <PopularBoardLanking />
                </div>
            </div>
        </div>

        {/*<Chatbot />*/}


    </>;
}

export default Main;