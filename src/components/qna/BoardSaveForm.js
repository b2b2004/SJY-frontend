import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './BoardSaveForm.css'

const BoardSaveForm = (props) => {
      const Authorization = localStorage.getItem("Authorization");
      const [board, setBoard] = useState({
        content: '',
      });

  const changeValue = (e) => {
    setBoard({
      ...board,
      [e.target.name]: e.target.value,
    });
  };

  const submitBoard = (e) => {
    e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함.

    fetch('http://localhost:8000/board', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',Authorization
      },
      body: JSON.stringify(board),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        console.log(res);
        // Catch는 여기서 오류가 나야 실행됨.
        if (res !== null) {
            window.location.href = "/boardtest";
        } else {
          // alert('게시글 등록에 실패하였습니다.');
        }
      });
  };

  return (
      <Form onSubmit={submitBoard}>
          <div className="boardInput">
          <textarea
              placeholder="내용을 입력하세요"
              onChange={changeValue}
              name="content"
          ></textarea>
              <div className="buttonWrapper">
                  <button
                      className="buttonComplete"
                      name="content"
                      type="submit"
                  >
                      등록
                  </button>
              </div>
          </div>
      </Form>
  );
};

export default BoardSaveForm;
