import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BoardList from '../components/BoardList';
import SaveForm from "./qna/SaveForm";

const Board = () => {
    const [boards, setBoards] = useState([]);

    // 함수 실행시 최초 한번 실행되는 것 + 상태값이 변경될때마다 실행
    useEffect(() => {
        fetch('http://localhost:8000/board/')
            .then((res) => res.json())
            .then((res) => {
                setBoards(res);
            }); // 비동기 함수
    }, []);

    return (
        <div>
            <h1>질문 게시판</h1><br />
            <SaveForm /> <br />
            {boards.map((board) => (
                <BoardList key={board.id} board={board} />
            ))}
        </div>


    );
};

export default Board;
