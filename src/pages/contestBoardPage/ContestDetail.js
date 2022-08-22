import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import "./ContestDetail.css";


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

    return<>

        <>
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
                    <div className="subjectTitle">
                        응모주제
                    </div>
                    <div className="subjectContent">
                        한국정보보호산업협회 한국정보보호교육원에서
                        AI보안 기술개발 교육과정 교육생을 모집합니다.<br/>
                        * 교육명 : AI보안 기술개발 전문교육과정
                    </div>
                </div>

                <div className="qualificationContainer">
                    <div className="qualificationTitle">
                        응모자격
                    </div>
                    <div className="qualificationContent">
                        ※ 자격요건을 충족하고 및 배제사유가 없어야 함<br/>
                        가. 정보보호 업계로의 진출을 희망하는 자<br/>
                        나. 우대요건: 정보보호 관련 자격증 소지자, 관련 학과 졸업(예정)자, 취업에 대한 의지와 열정이 있는 자 등<br/>
                        다. 참여배제자<br/>
                        ① 아동․청소년 관련 사업의 경우「아동·청소년의 성보호에 관한 법률」,「아동복지법」등에서 정한 범죄경력이 있는 자<br/>
                        ② 신청서, 정보제공 동의서 등 신청 구비서류를 제출하지 않은 자<br/>
                        ③ 기타 지병․건강쇠약 등으로 근로가 불가하다고 판단되는 자
                    </div>
                </div>

                <div className="benefitContainer">
                    <div className="benefitTitle">
                        혜택내역
                    </div>
                    <div className="benefitContent">
                        - 우수교육생 AI 국제자격증 취득 지원<br/>
                        - 산업체 멘토 배정 및 프로젝트 실습 진행<br/>
                        - 프로젝트 팀별 장비 및 클라우드 지원 (100만원 이내)<br/>
                        - 취업컨설팅 및 교육수료 후 취업 연계<br/>
                        - 성과등록 지원(특허출원, 앱등록, 프로그램 등록 등)<br/>
                        - 블렌디드 온라인 교육(Front-end, Back-end) 2,000여개 제공
                    </div>
                </div>

                <div className="wayContainer">
                    <div className="wayTitle">
                        접수방법
                    </div>
                    <div className="wayContent">
                        이메일 접수(aisec@kisia.or.kr)<br/>
                        ※ 신청서, 개인정보수집동의서 등 서명란은 모두 서명 필수<br/>
                        - 졸업(예정)증명서, 졸업장, 학위증명서 중 택1 (해당 시)<br/>
                        - 신청서 (필수)<br/>
                        - 개인정보수집동의서 (필수)
                    </div>
                </div>

                <img className="contestCoverFull" alt="cover" src={contestImageUrl.imageUrl} />
                <button className="contestList">목록</button>
            </div>
        </>
        <h1>공모전 구현중</h1>
        <h1>수정 예정</h1>
        <h1>응모 주제 / 접수 방법 / 응모 자격 / 혜택 내역 없음</h1>
        <h1>데이터 잘 받아옴</h1>
        <h1>id={contestboard.id}</h1>
        <h1>title={contestboard.title}</h1>
        <h1>hit={contestboard.hit}</h1>
        <h1>image={contestboard.image}</h1>
        <Button variant="danger" onClick={deleteContestBoard}>
            삭제
        </Button>
    </>
}

export default ContestDetail;