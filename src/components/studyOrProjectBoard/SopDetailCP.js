import React, {useEffect, useState} from "react";
import './SopDetailCP.css';
import Parser from "html-react-parser";
// 상세페이지

function SopDetailCP(props){

    const [checkrecruit, setCheckrecruit] = useState(false);
    console.log(props.checkmember);
    const [sopboard,setSopboard] = useState({
        id: '',
        boardType: '',
        meetType: '',
        area: '',
        recruitment: '',
        recruitment_cnt: '',
        duration_start: '',
        duration_end: '',
        techStack: '',
        title: '',
        content: '',
        roleType: '',
    });
    const Authorization = localStorage.getItem("Authorization");
    const [recuitMsg, setRecuitMsg] = useState({
        username: '',
        content: '',
        sopboardid: ''
    });

    // sopboard에 boardType / meetType / username / title / content / area
    // techStack / hit / duration_start / duration_end / date 있음
    useEffect(()=>{
        setSopboard(props.sopboard);
        setCheckrecruit(props.checkmember);
        fetch("http://localhost:8000/profile",{
                method: 'GET',
                headers:{
                    Authorization
                }
            }
        ).then((res) =>res.json()
        ).then((data)=>{
            console.log(data.user);
            recuitMsg.username = data.user.username;

        })
    },[])


    const changeValue = (e) =>{
        console.log(e.target.name);
        console.log(e.target.value);
       setRecuitMsg({
           ...recuitMsg,
           [e.target.name]: e.target.value,
       });
    };

    const sendMsg = (e) =>{
        e.preventDefault();
        recuitMsg.sopboardid = props.sopboard.id;
        console.log(recuitMsg);
            fetch("http://localhost:8000/sopBoard/recruitMsg",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8', Authorization
                    },
                    body: JSON.stringify(recuitMsg)
                })
            .then((res)=>{res.json()})
            .then((res)=>{
                console.log(res);
                alert("신청 되었습니다. 팀장 확인까지 기다려주세요!");
            });
    }


    return<>
                {sopboard.recruitment === sopboard.recruitment_cnt
                    ?
                    <>
                    <div className='sidebar_detail_wrapper'>
                        <div className='v-line_detail_cp'></div>
                        <div className='sopboard_detailCP_font'>
                            이 프로젝트에<br/> 관심이 있으신가요?
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                        <form className='SopDatail_team_apply' onSubmit={sendMsg}>
                            <h6>지원 이유</h6>
                            {sopboard.recruitment_cnt} / {sopboard.recruitment}
                            <div className='boardInput'>
                                마감되었습니다.
                            </div>
                        </form>
                    </>
                    :
                    <>
                    <div className='sidebar_detail_wrapper'>
                        <div className='v-line_detail_cp'></div>
                        <div className='sopboard_detailCP_font'>
                            이 프로젝트에<br/> 관심이 있으신가요?
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>

                    <form className='SopDatail_team_apply' onSubmit={sendMsg}>
                    <h6>지원 이유</h6>
                {sopboard.recruitment_cnt} / {sopboard.recruitment}
                    <div className='boardInput'>
                    <textarea onChange={changeValue} style={{resize:'none'}} name="content" id="sopDetail_textarea" cols="30" rows="3"></textarea>
                    </div>
                    <button className='sopDetail_manage_button3' type="submit">지원하기</button>
                    </form>
                    </>
                }




        <div id='sop_detail_cp_container'>
            <div id='detail_cp_1'>
                <h4 className='detail_cp_title'>모집 구분</h4>
                <div className='detail_cp_content'>{sopboard.boardType}</div>
                <br/>
                <br/>
                <br/>
                <h4 className='detail_cp_title'>모집 인원</h4>
                <div className='detail_cp_content'>{sopboard.recruitment}명</div>
                <br/>
                <br/>
                <br/>
                <h4 className='detail_cp_title'>사용 언어</h4>
                <div className='detail_cp_content'>{sopboard.techStack}</div>
                <br/>
                <br/>
                <br/>
            </div>

            <div id='detail_cp_2'>
                <h4 className='detail_cp_title'>진행 방식</h4>
                <div className='detail_cp_content'>{sopboard.meetType}</div>
                <br/>
                <br/>
                <br/>
                <h4 className='detail_cp_title'>시작 예정</h4>
                <div className='detail_cp_content'>{sopboard.duration_start}</div>
                <br/>
                <br/>
                <br/>
                <h4 className='detail_cp_title'>예상 기간</h4>
                <div className='detail_cp_content'>{sopboard.duration_end} 까지</div>
                <br/>
                <br/>
                <br/>
            </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr className='sopDetail_hr_tag'/>
        <div className='project_detail_wrapper'>
            <h1 id='h122'>프로젝트 소개</h1>
            <div>
                <p>{Parser(`${sopboard.content}`)}</p>
            </div>
        </div>


    </>

}

export default SopDetailCP;