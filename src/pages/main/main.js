import React, {useEffect, useState} from 'react';
import './main.css';
import Slider from "../../components/imagesSlider/Slider";
import PopularBoardLanking from "../../components/studyOrProjectBoard/PopularBoardLanking";
import TechStackImage from "../../components/TechStackImage";
import MainTechImage from "../../components/main/MainTechImage";
import styles from "../../components/nav/Navbar.module.css";
import AllSOPBoard from "../../components/studyOrProjectBoard/AllSOPBoard";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import ContestSlider from "../../components/contestBordP/ContestSlider";
import MainContestSlider from "../../components/main/MainContestSlider";


function Main() {
    const [popularBoard, setPopularBoard] = useState([]);
    const [show , setShow] = useState(false);
    const [SopBoard, setSopboard] = useState([]);
    const [loading, setLoading] = useState(null);

    useEffect(()=>{
        setLoading(true);
        fetch("http://localhost:8000/sopBoard/MainBoard")
            .then((res)=> res.json())
            .then((res)=>{
                setLoading(false);
                setPopularBoard(res.content);
            })
    },[])
    const ShowTech = (e) => {
        setShow(true);
        let tech = e.target.attributes.value.nodeValue;

        fetch('http://localhost:8000/sopBoard/MainTech/' + tech)
            .then((res)=> res.json())
            .then((res)=>{
                setSopboard(res);
            })
    };


    const languages = [
        {id:"1", value: "angular" },
        {id:"2", value: "c++"},
        {id:"3", value: "django"},
        {id:"4", value: "java",},
        {id:"5", value: "javascript",},
        {id:"6", value: "kotlin",},
        {id:"7", value: "node.js",},
        {id:"8", value: "python",},
        {id:"9", value: "react",},
        {id:"10", value: "spring",},
        {id:"11", value: "typescript",},
        {id:"12", value: "vue",},
    ]

    return<>
        {
            loading
                ? <LoadingSpinner /> :

                <>
                    <Slider />
                    <div className='main_project_container'>
                        <div className='Project_wrap'>
                            {/*                            <div className='newProject_wrap'>
                                <h3 className="studyOrProject_title">🔥인기 프로젝트 / 스터디🔥</h3>
                                {popularBoard.map((popularBoard) => (
                                    <PopularBoardLanking key={popularBoard.id} popularBoard={popularBoard}/>
                                ))}
                            </div>*/}
                        </div>




                        <div onClick={ShowTech}  value={languages.value} className='aa'>
                            {languages.map((languages) =>(
                                <MainTechImage key={languages.id} techStack={languages} />
                            ))}
                        </div>

                        { show == true
                            ?
                            <div className='sopboard_container_main'>
                                {SopBoard.map((SopBoard) => (
                                    <AllSOPBoard key={SopBoard.id} SopBoard={SopBoard}/>
                                ))}
                            </div>

                            :<div className='sopboard_container_main'>
                                {popularBoard.map((popularBoard) => (
                                    <PopularBoardLanking key={popularBoard.id} popularBoard={popularBoard}/>
                                ))}</div>
                        }</div>

                    <img
                        className="main_photo"
                        src="/images/main_photo.png"/>


                    <div className='contest_container_main'>
                        <MainContestSlider  />
                    </div>


                    <footer className='footer_1'>
                        <div className="inner">

                            <div className="info">
                                <span>중부대학교 정보보호학전공 3조</span>
                                <span>주소 : 경기도 고양시 덕양구</span>
                                <span>TEL : 031) 0000-0000 / FAX : 031) 0000-0000</span>
                                <span>개인정보 책임자 : 권용호</span>
                            </div>

                            <p className="copyright">
                                &copy; <span className="this-year"></span> Copyright ⓒ 2022 CODEMETER. All rights reserved.
                            </p>

                        </div>
                    </footer>
                </>
        }
    </>

}

export default Main;