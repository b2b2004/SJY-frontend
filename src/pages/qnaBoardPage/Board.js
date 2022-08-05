import React, { useEffect, useState } from 'react';
import BoardList from '../../components/qna/BoardList';
import BoardSaveForm from "../../components/qna/BoardSaveForm";

import './Board.css'

const Board = () => {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/board/')
            .then((res) => res.json())
            .then((res) => {
                setBoards(res);
                console.log(res);
            });
    }, []);

    return (
        <div>
            <br />
            <h1 className="main">Q&A</h1>
                <h1 className="title">질문 게시판</h1>
            <br />
                <BoardSaveForm /> <br />
                {boards.map((board) => (
                    <BoardList key={board.id} board={board} />
                ))}
        </div>
    );
};

export default Board;
