import {Button} from "react-bootstrap";
import AllSOPBoard from "../../components/studyOrProjectBoard/AllSOPBoard";
import NewBoard from "../../components/studyOrProjectBoard/NewBoard";
import React, {useEffect, useState} from "react";
import PopularBoardLanking from "../../components/studyOrProjectBoard/PopularBoardLanking";
import './StudyOrProjectBoard.css';
import styles from "../../components/nav/Navbar.module.css";
import SopModal from "../../components/modal/SopModal";
import SopWriteModal from "../../components/modal/SopWriteModal";
import {setModalVisible} from "../../store/SopBoardStep";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import LoadingSpinner from "../../components/loading/LoadingSpinner";

function StudyOrProjectBoard(){
    const [SopBoard, setSopboard] = useState([]);
    const [popularBoard, setPopularBoard] = useState([]);
    const dispatch = useDispatch();
    const modalVisible = useSelector((state) => state.sopBoardStep.modalVisible);
    const Authorization = localStorage.getItem("Authorization");
    const [loading, setLoading] = useState(null);

    useEffect(()=>{
        setLoading(true);
        fetch(
            "http://localhost:8000/sopBoard/AllBoard"
        )
            .then((res)=> res.json())
            .then(res =>{
                setLoading(false);
                console.log(res);
                setSopboard(res);
            })
    }, [])

    useEffect(()=>{
        fetch("http://localhost:8000/sopBoard/PopularBoard")
            .then((res)=> res.json())
            .then((res)=>{
                console.log(res);
                setPopularBoard(res.content);
            })
    },[])


    const closeModal = () => {
        document.body.style.overflow = "auto";
        dispatch(setModalVisible(false));
    };
    const openModal = () => {
        document.body.style.overflow = "hidden";
        dispatch(setModalVisible(true));
    };

    return<>
        {
            loading
            ? <LoadingSpinner />
                :<>
                    <div className='project_container'>
                        <h6 className='main'>recruit</h6>
                        <h3 className="studyOrProject_write_title">프로젝트 or 스터디</h3>

                        <SopModal visible={modalVisible} name="login" onClose={closeModal}>
                            <SopWriteModal handleClose={closeModal} tabIndex={0}></SopWriteModal>
                        </SopModal>

                        {Authorization !== 'null'
                            ?
                            <Button className='button_write' onClick={openModal}>
                                글쓰기
                            </Button>
                            :
                            <></>
                        }

                        <div className='Project_wrap'>
                            <div className='newProject_wrap'>
                                <h3 className="studyOrProject_title">🔥인기프로젝트🔥</h3>
                                {popularBoard.map((popularBoard) => (
                                    <PopularBoardLanking key={popularBoard.id} popularBoard={popularBoard}/>
                                ))}
                            </div>

                        </div>
                        <div className='allProject_wrap'>
                            <h3 className="studyOrProject_title">✨프로젝트 / 스터디✨</h3>
                            {/*받아오기*/}
                            {SopBoard.map((SopBoard) => (
                                <AllSOPBoard key={SopBoard.id} SopBoard={SopBoard}/>
                            ))}

                        </div>

                    </div>
                </>
        }
    </>
}

export default StudyOrProjectBoard;