import {Card} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import './SopDetailManage.css';

function SopDetailApplicant(props){

    const [recruit, setRecruit] = useState([]);
    const {username , content , sopboardid} = props.recuitMsg;

    useEffect(()=>{
        setRecruit(props.recuitMsg);
    },[])

    const approve = () =>{
        const check = window.confirm("해당 유저를 맴버로 영입하시겠습니까?");

        if(check === true)
        {
            fetch('http://localhost:8000/sopBoard/recruitApprove' ,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(recruit),
            })
                .then((res)=>res.text())
                .then(res=>{
                    alert("정상 처리 되었습니다.");
                    window.location.href = "/sopDetail/"+ props.id;
                })
        }

    }

    const refuse = () =>{
        const check = window.confirm("거절하시겠습니까?");
        if(check === true)
        {
            fetch('http://localhost:8000/sopBoard/recruitrefuse' ,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(recruit),
            })
                .then((res)=>res.text())
                .then(res=>{
                    alert("정상 처리 되었습니다.");
                    window.location.href = "/sopDetail/"+ props.id;
                })
        }
    }

    return<>
        <Card id="manage_apply_container">
            <Card.Body className="manage_apply_body">
                <div>
                    <Card.Text className='apply_username'>{username}</Card.Text>
                    <Card.Title className='apply_content'>{content}</Card.Title>
                    <button onClick={refuse}  className='manage_disagree'>취소 하기</button>
                    <button onClick={approve} className='manage_agree'>등록 하기</button>
                </div>
            </Card.Body>
        </Card>
    </>
}

export default SopDetailApplicant;