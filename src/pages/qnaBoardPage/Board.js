import React, { useEffect, useState } from 'react';
import BoardList from '../../components/qna/BoardList';
import BoardSaveForm from "../../components/qna/BoardSaveForm";

import './Board.css'
import LoadingSpinner from "../../components/loading/LoadingSpinner";

const Board = () => {
    const [boards, setBoards] = useState([]);
    const Authorization = localStorage.getItem("Authorization");
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8000/board/')
            .then((res) => res.json())
            .then((res) => {
                setLoading(false);
                setBoards(res);
                console.log(res);
            });
    }, []);

    return (
        <>
        {
            loading
            ? <LoadingSpinner />
            :<>
            <div className='qna_wrapper'>
                <br />
                <h1 className="main">Q&A</h1>
                <h1 className="Qna_title">질문 게시판</h1>
                <br />
                <BoardSaveForm /> <br />
                {boards.map((board) => (
                    <BoardList key={board.id} board={board} />
                ))}

            </div>
            </>
        }
        </>
    );

};

export default Board;
