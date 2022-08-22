import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import ManageNotice from "./manageBoard/ManageNotice";
import './SopDetailNotice.css';

function SopDetailNotice(props){

    const {id} = props.sopboard;
    const [sopManageNotice, setManageNotice] = useState();
    const [sopManageBoard , setSopManageBoard] = useState();
    const Authorization = localStorage.getItem("Authorization");
    const [help, setHelp] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:8000/sopBoard/ManageNotice/'+ id,{
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

    useEffect(()=>{

        fetch('http://localhost:8000/sopBoard/aaa/'+ id,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=utf-8', Authorization
            },
        }).then((res)=> {
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
                    setSopManageBoard(res);
                }
            })

    },[help])


    return<>
        <div className='sopDetailContainer'>
            {sopManageBoard != null ?
                <div>
                    <h1 className='sopNoticeFont'>깃헙 주소 : {sopManageBoard.githubAddress}</h1>
                    <h1 className='sopNoticeFont'>줌 주소 : {sopManageBoard.zoomAddress}</h1>
                    <h1 className="sopNoticeFont">카카오 주소 : {sopManageBoard.kakaoOpenAddress}</h1>
                </div>
                :<h1>hi</h1>}


            {sopManageNotice != null
                ?
                <div>
                    {sopManageNotice.map((sopManageNotice) => (
                        <ManageNotice key={sopManageNotice.id} sopManageNotice={sopManageNotice}/>
                    ))}
                </div>
                : <></>
            }
        </div>
    </>
}


export default SopDetailNotice;