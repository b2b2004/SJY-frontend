import {Card} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import moment from "moment";
import SopDetailCommentSaveForm from "./SopDetailCommentSaveForm";
import SopDetailCommentList from "./SopDetailCommentList";
import SopDetailQnaUpdateForm from "./SopDetailQnaUpdateForm";
import './SopDetailQnaList.css';

function SopDetailQnaList(props){
    console.log(props);
    const Authorization = localStorage.getItem("Authorization");
    const { id, title, content, board_date, username, sopboardId } = props.sopDetailQna;
    const date = moment(board_date).format("YYYY,MM,DD, H:mm:ss");
    const [comment,setComment] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [isShow1, setIsShow1] = useState(false);
    const [image, setImage] = useState({
        image_file: '',
        preview_URL: ''
    });


    const toggleShow = () =>{
        // 수정창 누르면 바뀌는 부분
        setIsShow(!isShow);
    }

    const toggleShow1 = () =>{
        // 댓글보기 누르면 바뀌는 부분
        setIsShow1(!isShow1);
    }

    const deleteBoard = () => {
        // 삭제 버튼 클릭시 질문게시판 삭제
        fetch('http://localhost:8000/board/' + id, {
            method: 'DELETE',
        })
            .then((res) => res.text())
            .then((res) => {
                if (res === 'ok') {
                    window.location.href = "/boardTest";
                } else {
                    alert('삭제실패');
                }
            });
    };


    useEffect(()=>{
        // 프로필 이미지 가져오기
        fetch('http://localhost:8000/profile/sopboard/'+ username ,{
                method: 'GET',
                headers:{
                    Authorization
                }
            }
        ).then((res) =>res.json()
        ).then((data)=>{
            console.log(data.image);
            setImage(
                {
                    preview_URL: require(`../../image/ProfileImage/${data.image}`)
                }
            )
        })


        fetch('http://localhost:8000/sopQnaComment/' + id)
            .then(res => res.json())
            .then((res) => {
                setComment(res);
                console.log(res);
            });
    },[])

    return<>

        <div>
            <Card className="sopDetail_container">
                <Card.Body onSubmit={toggleShow} className="board_body">
                    {isShow ?
                        <SopDetailQnaUpdateForm sopboardId={sopboardId} id={id} key={id} /> :
                        <div>
                            <Card.Text className='boardList_date'>{date}</Card.Text>
                            <div className='boardList_img_wrapper'>
                                <img src={image.preview_URL}/>
                                <Card.Title className='board_user_name'>{username}</Card.Title>
                            </div>
                            <br/>
                            <div className='board_content_wrapper'>
                                <Card.Title className='board_content'> {content}</Card.Title>
                            </div>
                        </div>
                    }
                </Card.Body>

                <Card.Body onSubmit={toggleShow1} className="board_body">
                    <button onClick={deleteBoard} className="b-X-button">
                        삭제
                    </button>
                    <button onClick={toggleShow} className="b-button">
                        수정
                    </button>
                    {isShow1 ?
                        <div>
                            <hr className='board_hr'/>
                            {comment.map((comment) => (
                                <SopDetailCommentList comment={comment} />
                            ))}
                            <SopDetailCommentSaveForm sopboardId={sopboardId} id={id} key={id}/>
                            <br /><br />
                            <button onClick={toggleShow1}> 댓글닫기 <img id='comment_img' src="/images/arrow-top.png"/></button>
                        </div>

                        :
                        <button onClick={toggleShow1}> 댓글보기 <img id='comment_img' src="/images/arrow-bottom.png"/></button>
                    }

                </Card.Body>
            </Card>
            <br className="br_class"/>
        </div>
    </>
}

export default SopDetailQnaList;