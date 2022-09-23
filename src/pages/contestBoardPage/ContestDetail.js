import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import "./ContestDetail.css";
import Parser from 'html-react-parser';

function ContestDetail(props){
    const id = props.match.params.id;
    const Authorization = localStorage.getItem("Authorization");
    const [contestboard, setContestboard] = useState([])
    const [user, setUser] = useState([])
    const [contestImageUrl, setContestImageUrl] = (useState({
        imageUrl: ''
    }))

    useEffect(()=>{
        fetch(
            'http://localhost:8000/contestBoard/' + id,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',Authorization
                },
                body: JSON.stringify(id),
            }
        ).then((res)=>res.json())
            .then((res)=>{
                setContestboard(res);
                console.log(res);
                setContestImageUrl(
                    {
                        imageUrl: require(`../../image/ContestImage/${res.image}`)
                    }
                )
            })

        fetch("http://localhost:8000/profile",{
                method: 'GET',
                headers:{
                    Authorization
                }
            }
        ).then((res) =>res.json()
        ).then((data)=>{
            setUser(data);
            console.log(data);
        })

        if(user.username !== contestboard.username)
        {
            contestboard.hit =1;
            console.log(contestboard.hit);
        }
        else{
            console.log("d");
        }



    },[])

    const deleteContestBoard = () => {
        fetch('http://localhost:8000/contestBoard/' + id, {
            method: 'DELETE',
            body: JSON.stringify(contestboard.image),
        })
            .then((res) => res.text())
            .then((res) => {
                if (res === 'ok') {
                    window.location.href = "/ContestBoard";
                } else {
                    alert('삭제실패');
                }
            });
    };

    const changePage = (e) =>{
        window.location.href = `/${e.target.name}`;
    }

    return<>
        <div className="contestDetailTitle">{contestboard.title}</div>
        <div className="detail">
            <img className="contestCover" alt="cover" src={contestImageUrl.imageUrl} />
            <div className="contestInfo">
                <div className="dayContainer">
                    <div className="dayTitle">
                        접수기간
                    </div>
                    <div className="dayContent">
                        {contestboard.duration_start} ~ {contestboard.duration_end}
                    </div>
                </div>
                <div className="hostContainer">
                    <div className="hostTitle">
                        주최
                    </div>
                    <div className="hostContent">
                        {contestboard.host}
                    </div>
                </div>
                <div className="manageContainer">
                    <div className="manageTitle">
                        주관
                    </div>
                    <div className="manageContent">
                        {contestboard.supervision}
                    </div>
                </div>

                <div className="awardContainer">
                    <div className="awardTitle">
                        시상
                    </div>
                    <div className="awardContent">
                        시상금: {contestboard.prize} 만원
                    </div>
                </div>

                <div className="homeContainer">
                    <div className="homeTitle">
                        홈페이지
                    </div>
                    <div className="homeContent">
                        <a className="homepage" href={contestboard.homepage}>홈페이지 바로가기</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="contestDetail">
            <div className="chamgo">※ 본 내용은 참고 자료입니다.  반드시 주최사 홈페이지의 일정 및 상세 내용을 확인하세요.</div>

            <div className="block">공모요강</div>

            <div className="subjectContainer">
                <p>{Parser(`${contestboard.content}`)}</p>
            </div>

            <img className="contestCoverFull" alt="cover" src={contestImageUrl.imageUrl} />
            <button className="contestList"  onClick={changePage} name="contestboard">목록</button>
        </div>
    </>
}

export default ContestDetail;