import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";

function SopDetailQnaUpdateForm(props){
    console.log(props);
    const id = props.id;
    const sopboardId = props.sopboardId;

    const [board, setBoard] = useState({
        title: '',
        content: '',
        Board_date:'',
    });

    useEffect(() => {
        fetch('http://localhost:8000/sopBoard/allqnaboard/' + id)
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

        fetch('http://localhost:8000/sopBoard/qnaboard/' + id, {
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
                    window.location.href = "/SopDetail/"+ sopboardId;
                } else {
                    alert('게시글 수정에 실패하였습니다.');
                }
            });
    };
    return<>
        <Form onSubmit={submitBoard}>
            <div className="commentInput">
          <textarea
              defaultValue={board.content}
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
    </>
}

export default SopDetailQnaUpdateForm;