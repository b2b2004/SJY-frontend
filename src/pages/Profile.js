import React, {useEffect, useState} from 'react';
import {Form} from "react-bootstrap";
import {stringify} from "qs";
import BoardList from "../components/BoardList";

function Profile() {
    const Authorization = localStorage.getItem("Authorization");
    const [boards, setBoards] = useState([]);
    const [users, setuser] = useState([]);
    // const [users, setuser] = useState({
    //     user: '',
    //     username: '',
    // });

    const [passwords, setPassword] = useState({
        password: '',
        password1: '',
        password2: ''
    });

    const changeValue = (e) => {
        setPassword({
            ...passwords,
            [e.target.name] : e.target.value
        });
    };


    useEffect(() => {

        fetch("http://localhost:8000/profile",{
                method: 'GET',
                headers:{
                    Authorization
                }
            }
            ).then((res) =>res.json()
            ).then((data)=>{
                setuser(data);
                console.log(data);
        })


         fetch("http://localhost:8000/profile/board",{
            method: 'GET',
             headers:{
                Authorization
             }
         })
             .then(res => res.json())
             .then(res => {
                     setBoards(res);
                     console.log(res);
                 }
             )


    },[])

    const deleteId = () =>{
        if(window.confirm("정말 삭제할까요?")){
            fetch(
                "http://localhost:8000/profile/delete",{
                    method: 'DELETE',
                    headers:{
                        Authorization
                    }
                }
            ).then((res) =>res.text()
            ).then((res)=>{
                localStorage.clear();
                window.location.href = "/";
            })
        }
        else {

        }
    }

    const changePw = (e) =>{
        e.preventDefault();
        const password = e.target[0].value;
        const password1 = e.target[1].value;
        const password2 = e.target[2].value;

        if(password1 === password2){
            fetch(
                "http://localhost:8000/profile/chagePassword",{
                    method: 'POST',
                    headers:{
                        "Content-Type" : "application/json; charset=utf-8",
                        Authorization
                    },
                    body: JSON.stringify(passwords)
                }
            ).then((res) =>res.text()
            ).then((res)=>{
                alert(res);
                window.location.href = "/";
            })
        }
        else{
            alert("바꿀 비밀번호가 맞지 않습니다.");

        }
    }


    return <div>
       username : {users.username}
        <br /><br />
        <button onClick={deleteId}>아이디 삭제하기</button><br /><br />


            <Form onSubmit={changePw}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="현재 비밀번호"  onChange={changeValue} name = "password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password1" placeholder="바꿀 비밀번호"  onChange={changeValue} name = "password1" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password2" placeholder="바꿀 비밀번호 확인"  onChange={changeValue} name = "password2" />
            </Form.Group>
            <button variant="primary" type="submit">비밀번호 변경하기</button>
            </Form>

        {boards.map((board) => (
            <BoardList key={board.id} board={board} />
        ))}


    </div>
}
export default Profile;