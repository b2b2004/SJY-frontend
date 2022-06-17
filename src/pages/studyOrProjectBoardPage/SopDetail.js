import {useEffect, useState} from "react";

function SopDetail(props){

    const id = props.match.params.id;
    const Authorization = localStorage.getItem("Authorization");
    const [sopboard, setSopboard] = useState([])
    const [user, setUser] = useState([])

    useEffect(()=>{
        fetch(
            'http://localhost:8000/sopBoard/' + id,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',Authorization
                },
                body: JSON.stringify(id),
            }


        ).then((res)=>res.json())
            .then((res)=>{
                setSopboard(res);
                console.log(res);

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

        if(user.username !== sopboard.username)
        {
            sopboard.hit =1;
            console.log(sopboard.hit);
        }
        else{
            console.log("d");
        }

    },[])

    return<>
    <h1>SOP 상세페이지 구현중</h1>
        <h1>데이터 잘 받아옴</h1>
        <h1>id={sopboard.id}</h1>
        <h1>user.username={user.username}</h1>
        <h1>sopboard.username={sopboard.username}</h1>
        <h1>title={sopboard.title}</h1>
        <h1>hit={sopboard.hit}</h1>
    </>
}

export default SopDetail;