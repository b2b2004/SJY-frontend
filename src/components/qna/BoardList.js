import React, {useState} from 'react';
import {Button, Card, Nav} from 'react-bootstrap';
import BoardUpdateForm from "./BoardUpdateForm";
import CommentSaveForm from "./comment/CommentSaveForm";
import CommentList from "./comment/CommentList";


const BoardList = (props) => {
  const { id, title, content } = props.board;
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
    <Card>
      <Card.Body onSubmit={toggleShow}>
        {isShow ?
            <BoardUpdateForm id={id}/> :
            <div>
            <Card.Title>{title}</Card.Title>
            <Card.Title> {content}</Card.Title>
          <Button variant="warning" onClick={toggleShow}>
          수정
          </Button>
        {'  '}
          <Button variant="danger" onClick={deleteBoard}>
          삭제
          </Button>
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
            <a onClick={toggleShow1}> 댓글보기 ∨</a>
        }
      </Card.Body>
      </Card>
  </div>
  );
};

export default BoardList;

// qna리스트 홈페이지 
