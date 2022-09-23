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
                .then((res)=>res.json())
                .then(res=>{
                    console.log(res);
                    alert("해당 유저를 팀원으로 등록했습니다.");

                })
        }

    }

    return<>
            <Card id="manage_apply_container">
                <Card.Body className="manage_apply_body">
                    <div>
                        {sopboardid}
                        <Card.Text className='apply_username'>지원자 이름 {username}</Card.Text>
                        <Card.Title className='apply_content'>지원 내용 {content}</Card.Title>
                        <button className='manage_disagree'>취소 하기</button>
                        <button onClick={approve} className='manage_agree'>등록 하기</button>
                    </div>
                </Card.Body>
            </Card>
    </>
}

export default SopDetailApplicant;