import {Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import ManageNotice from "./manageBoard/ManageNotice";
import './SopDetailNotice.css';
import {CopyToClipboard} from "react-copy-to-clipboard/src";

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


        {sopManageBoard != null ?
            <div id='Detail_address'>
                <img className='github' src="/images/github.png" alt='img'/>
                <CopyToClipboard text={sopManageBoard.githubAddress} onCopy={()=>alert("주소가 복사되었습니다")}>
                    <div className="URL">{sopManageBoard.githubAddress}<div className='text'>📋</div></div>
                </CopyToClipboard>
                <img className='zoom' src="/images/zoom.png" alt='img'/>
                <CopyToClipboard text={sopManageBoard.zoomAddress} onCopy={()=>alert("주소가 복사되었습니다")}>
                    <div className="URL">{sopManageBoard.zoomAddress}<div className='text'>📋</div></div>
                </CopyToClipboard>
                <img className='kakao_logo' src="/images/kakao-logo.png" alt='img'/>
                <CopyToClipboard text={sopManageBoard.kakaoOpenAddress} onCopy={()=>alert("주소가 복사되었습니다")}>
                    <div className="URL">{sopManageBoard.kakaoOpenAddress}<div className='text'>📋</div></div>
                </CopyToClipboard>
                {/*클립보드로 구현*/}
            </div>
            : <div className='sopDetail_notice_null'>공지사항이 없습니다.</div>}

        <div className='sopDetailContainer'>
            {sopManageNotice != null
                ?
                <div>
                    {sopManageNotice.map((sopManageNotice) => (
                        <ManageNotice key={sopManageNotice.id} sopManageNotice={sopManageNotice}/>
                    ))}
                </div>
                : <><div></div></>
            }
        </div>
    </>
}


export default SopDetailNotice;