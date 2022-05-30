
import {Button, Card, Form} from "react-bootstrap";
import React from "react";
import UpdateForm from "../qna/UpdateForm";
import CommentList from "./CommentList";
import CommentSaveForm from "./CommentSaveForm";

const commentShow = (props) => {
    const { id, username, content } = props.comment;

    return (
        <div>
            <Card>
                <Card.Body>
                            <Card.Title>username : {username}</Card.Title>
                            <Card.Title>내용 : {content}</Card.Title>
                </Card.Body>

            </Card>
            <br />
        </div>
    );
}
export default commentShow;