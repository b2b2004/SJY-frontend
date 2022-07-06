import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import BoardUpdateForm from "./BoardUpdateForm";
import CommentSaveForm from "./comment/CommentSaveForm";
import CommentList from "./comment/CommentList";
import './boardList.css'


const BoardList = (props) => {
  const { id, title, content, Board_date, username } = props.board;
  const [isShow, setIsShow] = useState(false);
  const [isShow1, setIsShow1] = useState(false);


  const toggleShow = () =>{
    setIsShow(!isShow);
  }

  const toggleShow1 = () =>{
    setIsShow1(!isShow1);
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


  return (

    <div>
    <Card className="board_container">
      <Card.Body onSubmit={toggleShow} className="board_body">
        {isShow ?
            <BoardUpdateForm id={id}/> :
            <div>
              <button onClick={deleteBoard} className="b-X-button">
                  삭제
              </button>
              <button onClick={toggleShow} className="b-button">
                수정
              </button>
              {'  '}
              <Card.Title>{username}</Card.Title>
            <Card.Title> {content}</Card.Title>

            </div>
        }
            </Card.Body>

      <Card.Body onSubmit={toggleShow1}>
        {isShow1 ?
            <div>
              <CommentList id={id}/>
              <CommentSaveForm id={id}/>
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
