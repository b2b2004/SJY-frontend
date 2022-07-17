import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import ManageNotice from "../../components/studyOrProjectBoard/manageBoard/ManageNotice";
function SopManage(props){
    const sopBoardId = props.match.params.id;
    const [sopManageNotice, setManageNotice] = useState();


    useEffect(()=>{
        fetch('http://localhost:8000/sopBoard/ManageNotice/'+ sopBoardId,)
            .then((res)=>res.json())
            .then(res=>{
                console.log(res);
            setManageNotice(res);
        })
    },[])

    const move = (e) =>{
        window.location.href = "/SopManageNoticeWrite/" + sopBoardId;
    }


    return<>
        {sopBoardId}
        <h1>프로젝트 상세페이지 꾸미기</h1>
        <h1>프로젝트 스터디 일정(전체적으로 github 잔디처럼)</h1>
        <h1>프로젝트 스터디 세부일정(팀원이 보는 창) + 팀원에게 스터디 세부일정 부여하는 창(관리자가 보는 창) </h1>
        <h1>스터디 공지사항 창(게시판 형식 줌 같은거 / 만나면 어디서 만나는지)</h1>
        <Button onClick={move}>공지시항 글쓰기(관리자)</Button>
        <h1>Zoom 주소 / github 주소 / 오픈 카톡방 주소 넣을 수 있는 공간(스터디 공지사항 창이랑 같은 창에 있으면 좋음 한눈에 보기)</h1>
        <h1>스터디 관리창 (팀장이 팀원 관리하는 창) + github / zoom 주소 / 오픈 카톡방 주소 입력 할 수 있는 창 (팀장 전용 창)</h1>
        <h1>팀원이 팀장에게 질문 할 수 있는 창 (공지사항과 별도의 창) + 관리자 및 팀원이 피드백 해줄수 있는 창</h1>
        <h1>마이페이지에서 스터디 관리창 바로 갈 수 있게 설계</h1>
        {sopManageNotice != null
            ?
            <div>
                {sopManageNotice.map((sopManageNotice) => (
                <ManageNotice key={sopManageNotice.id} sopManageNotice={sopManageNotice}/>
            ))}
            </div>
            : <></>
        }
        </>
}
export default SopManage;