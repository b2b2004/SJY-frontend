import {Card} from "react-bootstrap";
import React from "react";
import './SopDetailMember.css';
function SopDetailMember(props){
    const member = props.arr;
    const id = props.id;
    const deleteMember = (e) =>{
        const check = window.confirm("해당 유저를 맴버에서 제외시키겠습니까?");

        if(check === true)
        {
            fetch('http://localhost:8000/sopBoard/deleteMember/'  + member,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: id,
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
                    <Card.Title className='apply_content_1'>{member}</Card.Title>
                    <button className='manage_disagree' onClick={deleteMember}>탈퇴 처리</button>
                </div>
            </Card.Body>
        </Card>
    </>
}

export default SopDetailMember;