import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import ManageNotice from "../../components/studyOrProjectBoard/manageBoard/ManageNotice";
import ManageAddress from "../../components/studyOrProjectBoard/manageBoard/ManageAddress";
function SopManage(props){
    const sopBoardId = props.match.params.id;
    const [sopManageNotice, setManageNotice] = useState();
    const [sopManager, setSopManager] = useState({
        githubAddress: '',
        zoomAddress: '',
        kakaoOpenAddress: '',
    });
    const [help, setHelp] = useState(true);

    useEffect(()=>{
            fetch('http://localhost:8000/sopBoard/aaa/'+ sopBoardId,{
                method: "GET",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
            })
                .then((res)=> {
                    if(help != true)
                    {
                        return res.json();
                    }
                    return res.text();
                })
                .then(async res => {
                    if (res === '')
                    {}
                    else {
                        await setHelp(false);
                        setSopManager(res);
                    }
                })

    },[help])


    useEffect(()=>{
        fetch('http://localhost:8000/sopBoard/ManageNotice/'+ sopBoardId,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        })
            .then((res)=>res.json())
            .then(res=>{
                console.log(res);
                setManageNotice(res);
            })

    },[])


    const move = (e) =>{
        window.location.href = "/SopManageNoticeWrite/" + sopBoardId;
    }

    const move1 = (e) =>{
        window.location.href = "/SopManagerWrite/" + sopBoardId;
    }


    return<>
        {sopBoardId}
        <h1>프로젝트 상세페이지 꾸미기</h1><br />
        <h1>프로젝트 스터디 일정(전체적으로 github 잔디처럼)</h1><br />
        {sopManageNotice != null
            ?
            <div>
                {sopManageNotice.map((sopManageNotice) => (
                    <ManageNotice key={sopManageNotice.id} sopManageNotice={sopManageNotice}/>
                ))}
            </div>
            : <></>
        }
        <Button onClick={move}>공지시항 글쓰기(관리자) (완료)</Button><br /><br />
        <Button onClick={move1}>관리자 관리창(관리자) (진행중)</Button>
        {/*{sopManager != null ?<ManageAddress sopManager={sopManager}/> : <h1>hi</h1>}*/}
        <ManageAddress sopManager={sopManager}/>

        <h1>프로젝트 스터디 세부일정(팀원이 보는 창) + 팀원에게 스터디 세부일정 부여하는 창(관리자가 보는 창) </h1><br />
        <h1>팀원이 팀장에게 질문 할 수 있는 창 (공지사항과 별도의 창) + 관리자 및 팀원이 피드백 해줄수 있는 창</h1><br />


    </>
}
export default SopManage;