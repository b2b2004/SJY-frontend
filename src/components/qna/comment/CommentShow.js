
import {Button, Card, Form} from "react-bootstrap";
import React from "react";
import BoardUpdateForm from "../BoardUpdateForm";
import CommentList from "./CommentList";
import CommentSaveForm from "./CommentSaveForm";
import './commentShow.css';

const commentShow = (props) => {
    const { id, username, content, Board_date } = props.comment;

    return (
        <div>
            <div className="commentContainer">
                <div className="userNickname">
                    {username}
                </div>

                <div className="title">
                    {content}
                </div>
            </div>

        </div>
    );
}
export default commentShow;