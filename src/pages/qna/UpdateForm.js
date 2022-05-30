import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const UpdateForm = (props) => {
  console.log(props);
  const id = props.id;

  const [board, setBoard] = useState({
    title: '',
    content: '',
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
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="제목을 입력하세요"
          onChange={changeValue}
          name="title"
          value={board.title}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="내용을 입력하세요"
          onChange={changeValue}
          name="content"
          value={board.content}
        />
      </Form.Group>


      <Button variant="warning" type="submit">
        수정
      </Button>
    </Form>
  );
};

export default UpdateForm;
