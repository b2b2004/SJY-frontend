import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SaveForm = (props) => {
  const [board, setBoard] = useState({
    title: '',
    content: '',
  });

  const changeValue = (e) => {
    setBoard({
      ...board,
      [e.target.name]: e.target.value,
    });
  };

  const submitBoard = (e) => {

      const Authorization = localStorage.getItem("Authorization");
    e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함.

    fetch('http://localhost:8000/board', {
      method: 'POST',
      headers: {
          Authorization,
        'Content-Type': 'application/json; charset=utf-8',
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
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="제목을 입력하세요"
          onChange={changeValue}
          name="title"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="내용을 입력하세요"
          onChange={changeValue}
          name="content"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        등록하기
      </Button>

    
    </Form>
  );
};

export default SaveForm;
