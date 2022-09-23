import React, {useEffect, useState} from 'react';
import './main.css';
import Slider from "../../components/imagesSlider/Slider";
import PopularBoardLanking from "../../components/studyOrProjectBoard/PopularBoardLanking";
import TechStackImage from "../../components/TechStackImage";
import MainTechImage from "../../components/main/MainTechImage";
import styles from "../../components/nav/Navbar.module.css";
import AllSOPBoard from "../../components/studyOrProjectBoard/AllSOPBoard";
import LoadingSpinner from "../../components/loading/LoadingSpinner";


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
                console.log(res);
                setPopularBoard(res.content);
            })
    },[])
    const ShowTech = (e) => {
        setShow(true);
        console.log(e.target.attributes.value.nodeValue);
        let tech = e.target.attributes.value.nodeValue;

        fetch('http://localhost:8000/sopBoard/MainTech/' + tech)
            .then((res)=> res.json())
            .then((res)=>{
                setSopboard(res);
                console.log(res);
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
                            <div className='newProject_wrap'>
                                <h3 className="studyOrProject_title">🔥인기 프로젝트 / 스터디🔥</h3>
                                {popularBoard.map((popularBoard) => (
                                    <PopularBoardLanking key={popularBoard.id} popularBoard={popularBoard}/>
                                ))}
                            </div>
                        </div>


                    </div>

                    <div onClick={ShowTech}  value={languages.value} className='aa'>
                        {languages.map((languages) =>(
                            <MainTechImage key={languages.id} techStack={languages} />
                        ))}
                    </div>

                    { show == true
                        ?
                        <div>
                            {SopBoard.map((SopBoard) => (
                                <AllSOPBoard key={SopBoard.id} SopBoard={SopBoard}/>
                            ))}
                        </div>

                        :<div>bye</div>
                    }
                </>
        }
</>

}

export default Main;