import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';
import BoardUpdateForm from "./BoardUpdateForm";
import CommentSaveForm from "./comment/CommentSaveForm";
import CommentList from "./comment/CommentList";
import './BoardList.css'
import moment from "moment";


const BoardList = (props) => {
  const Authorization = localStorage.getItem("Authorization");
  const { id, title, content, board_date, username } = props.board;
  const date = moment(board_date).format("YYYY,MM,DD, H:mm:ss");
  const [comment,setComment] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [isShow1, setIsShow1] = useState(false);
  const [image, setImage] = useState({
    image_file: '',
    preview_URL: ''
  });


  const toggleShow = () =>{
    setIsShow(!isShow);
  }
  const toggleShow1 = () =>{
    setIsShow1(!isShow1);
    console.log(isShow1);
  }
  const deleteBoard = () => {
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


      fetch('http://localhost:8000/comment/' + id)
          .then(res => res.json())
          .then((res) => {
              setComment(res);
              console.log(res);
          });
  },[])


  return (

    <div>
    <Card className="board_container">
      <Card.Body onSubmit={toggleShow} className="board_body">
        {isShow ?
            <BoardUpdateForm id={id} key={id} /> :
            <div>
              <button onClick={deleteBoard} className="b-X-button">
                  삭제
              </button>
              <button onClick={toggleShow} className="b-button">
                수정
              </button>
              {'  '}
                이미지(위치수정)<img src={image.preview_URL} /> <br />
                시간(위치수정){date}
              <Card.Title>{username}</Card.Title>
            <Card.Title> {content}</Card.Title>

            </div>
        }
            </Card.Body>

      <Card.Body onSubmit={toggleShow1}>
        {isShow1 ?
            <div>
                {comment.map((comment) => (
                    <CommentList comment={comment} />
                ))}
              <CommentSaveForm id={id} key={id}/>
              <br /><br />
              <button onClick={toggleShow1}> 댓글닫기 ＾</button>
            </div>

            :
            <button onClick={toggleShow1}> 댓글보기 ∨</button>
        }

      </Card.Body>
      </Card>
      <br className="br_class"/>
  </div>
  );
};

export default BoardList;

// qna리스트 홈페이지 
