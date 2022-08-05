import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "./BoardUpdateForm.css"
import backdrop from "bootstrap/js/src/util/backdrop";

const BoardUpdateForm = (props) => {
  console.log(props);
  const id = props.id;

  const [board, setBoard] = useState({
    title: '',
    content: '',
    Board_date:'',
  });

  useEffect(() => {
    fetch('http://localhost:8000/board/' + id)
      .then((res) => res.json())
      .then((res) => {
        setBoard(res);
      });
  }, []);

  const changeValue = (e) => {
    setBoard({
      ...board,
      [e.target.name]: e.target.value,
    });
  };

  const submitBoard = (e) => {
    e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함.

    fetch('http://localhost:8000/board/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(board),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res !== null) {
          window.location.href = "/boardTest";
        } else {
          alert('게시글 수정에 실패하였습니다.');
        }
      });
  };

  return (
      <Form onSubmit={submitBoard}>
        <div className="commentInput">
          <textarea
              placeholder={board.content}
              onChange={changeValue}
              name="content"
          ></textarea>
          <div className="buttonWrapper">
            <button
                className="c-button-complete"
                name="content"
                type="submit"
            >
              완료
            </button>

          </div>
        </div>
      </Form>
  );
};

export default BoardUpdateForm;
