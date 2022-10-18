import React, {useEffect, useState} from "react";
import SopNav from "../../components/studyOrProjectBoard/SopNav";
import SopDetailNotice from "../../components/studyOrProjectBoard/SopDetailNotice";
import SopDetailCP from "../../components/studyOrProjectBoard/SopDetailCP";
import SopDetailManage from "../../components/studyOrProjectBoard/SopDetailManage";
import SopDetailSchedule from "../../components/studyOrProjectBoard/SopDetailSchedule";
import SopDetailQnaList from "../../components/studyOrProjectBoard/SopDetailQnaList";
import SopDetailQnaWrite from "../../components/studyOrProjectBoard/SopDetailQnaWrite";
import './SopDetail.css';


function SopDetail(props){
    const id = props.match.params.id;
    const Authorization = localStorage.getItem("Authorization");
    const [recuitMsg, setRecuitMsg] = useState([]);
    const [sopboard, setSopboard] = useState({
        username:"",
    })
    const [user, setUser] = useState([]);
    const [checkmember, setCheckMember] = useState();
    const [component, setComponent] = useState({
        detail: true,
        schedule: false,
        notice: false,
        Qna: false,
        manage: false
    })
    const [sopDetailQna , setSopDetailQna] = useState({
        id:"",
        username:""
    });

    useEffect( () => {
        fetch(
            "http://localhost:8000/sopBoard/OneBoard", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
                body: JSON.stringify(id),
            }
        ).then((res) => res.json())
            .then((res) => {
                setSopboard(res);
            })
    },[])

    useEffect(()=>{
        // 현재 접속한 유저
        fetch("http://localhost:8000/profile",{
                method: 'GET',
                headers:{
                    Authorization
                }
            }
        ).then((res) =>res.json()
        ).then((data)=>{
            setUser(data);

            fetch('http://localhost:8000/sopBoard/recruitMemberCheck/' + data.username,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: id,
             })
                .then((res)=> res.text())
                .then((res)=>{
                    if(res == "Member")
                    {
                        setCheckMember(1);
                    }
                    else if(res == "Membercheck")
                    {
                        setCheckMember(2);
                    }
                    else
                    {
                        setCheckMember(3);
                    }
                })

        })
    },[])

    useEffect(() => {
        fetch('http://localhost:8000/sopBoard/qnaboard/' + id)
            .then((res) => res.json())
            .then((res) => {
                setSopDetailQna(res);
            });
    }, []);

    useEffect(()=>{
        fetch('http://localhost:8000/sopBoard/recruitMsg/'+ id,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=utf-8', Authorization
            },
        }).then(res=>
            res.json()
        ).then((res)=>{
            setRecuitMsg(res);
        })
    },[])


    useEffect(()=>{
        // 조회수 관리
        if(user.username !== sopboard.username)
        {
            sopboard.hit +=1;
        }
        else{
        }
    },[])



    const move = () =>{
        window.location.href = "/SopManage/"+ id;
    }
    const setmenu = (e) =>{
        setComponent({[e.target.name] : true}
        )
    }

    return<>
        <SopNav sopboard={sopboard} key={sopboard.id} />
        <div>
            <div className='menu-wrapper'>
                <button onClick={setmenu} name="detail" className='w-btn-outline w-btn-blue-outline'>상세페이지</button> {' '}

                {/*{checkmember === 1 || user.username === sopboard.username ?*/}
                {/*    <button onClick={setmenu} name="schedule" className='w-btn-outline w-btn-blue-outline'>세부일정</button>*/}
                {/*:*/}
                {/*    <button onClick={setmenu} name="schedule" className='w-btn-outline w-btn-blue-outline' disabled>🔒세부일정</button>*/}
                {/*}*/}
                {/*{' '}*/}
                {checkmember === 1 || user.username === sopboard.username ?
                    <button onClick={setmenu} name="notice" className='w-btn-outline w-btn-blue-outline'>공지사항</button>
                    :
                    <button onClick={setmenu} name="notice" className='w-btn-outline w-btn-blue-outline' disabled>🔒공지사항</button>
                }
                {' '}
                {checkmember === 1 || user.username === sopboard.username ?

                    <button onClick={setmenu} name="Qna"className='w-btn-outline w-btn-blue-outline'>질문게시판</button>
                    :

                    <button onClick={setmenu} name="Qna"className='w-btn-outline w-btn-blue-outline' disabled>🔒질문게시판</button>
                }
                {' '}

                {user.username === sopboard.username ?  <button onClick={setmenu} name="manage" className='w-btn-outline w-btn-blue-outline'>관리</button> :
                    <button  onClick={setmenu} name="manage" className='w-btn-outline w-btn-blue-outline' disabled>🔒관리</button>}
            </div>

            <div>
                {component.detail === true ? <SopDetailCP sopboard={sopboard} key={sopboard.id} checkmember={checkmember} /> : <></>}
                {/*{component.schedule === true ? <SopDetailSchedule sopboard={sopboard} key={sopboard.id} /> : <></>}*/}
                {component.notice === true ? <SopDetailNotice sopboard={sopboard} key={sopboard.id} /> : <></>}
                {component.Qna === true ?
                    <div>
                        <SopDetailQnaWrite sopboard={sopboard} key={sopboard.id} /> <br />
                        {sopDetailQna.map((sopDetailQna) => (
                            <SopDetailQnaList key={sopDetailQna.id} sopDetailQna={sopDetailQna} />
                        ))}
                    </div>
                    : <></>}
                {component.manage === true ? <SopDetailManage sopboard={sopboard} key={sopboard.id} recuitMsg={recuitMsg} /> : <></>}
            </div>

        </div>
    </>

}

export default SopDetail;