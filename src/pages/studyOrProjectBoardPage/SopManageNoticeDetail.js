import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Button} from "react-bootstrap";


function SopManageNoticeDetail(){
    const [sopManageBoard, setSopManageBoard] = useState([]);
    const param = useParams();
    const id = param.id;
    console.log(id);

    useEffect(()=>{

        fetch(
            'http://localhost:8000/sopBoard/ManageNoticeDetail/'+ id
            ).then((res)=>res.json())
             .then((res)=>{
                 setSopManageBoard(res);
                 console.log(res);
                 console.log(sopManageBoard);
             })
    },[])

    const move = () =>{
        window.location.href = "/SopDetail/"+ sopManageBoard.sopBoardId;
    }

    return<>
        <h1>제목 : {sopManageBoard.title}</h1>
        <h2>내용 : {sopManageBoard.content}</h2>
        <Button onClick={move}> 뒤로가기</Button>
    </>
}

export default SopManageNoticeDetail;