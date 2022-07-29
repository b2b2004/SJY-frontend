import {useEffect, useState} from "react";

function SopDetailCP(props){

    const [sopboard,setSopboard] = useState({
        boardType: '',
        meetType: '',
        area: '',
        recruitment: '',
        duration_start: '',
        duration_end: '',
        techStack: '',
        title: '',
        content: '',
        roleType: '',
    });


    // sopboard에 boardType / meetType / username / title / content / area
    // techStack / hit / duration_start / duration_end / date 있음
    useEffect(()=>{
        setSopboard(props.sopboard);
    },[])
    console.log(props.sopboard);
    return<>

        <h1>상세페이지</h1>
        {sopboard.boardType} / {sopboard.meetType} / {sopboard.area} <br />
        {sopboard.duration_start} ~ {sopboard.duration_end}
        <h1>프로젝트 소개</h1>
        {sopboard.content}
        <h1>개발환경</h1>
        {sopboard.techStack}

    </>

}

export default SopDetailCP;