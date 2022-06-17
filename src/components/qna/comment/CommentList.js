import {Button, Card, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import BoardUpdateForm from "../BoardUpdateForm";
import BoardList from "../BoardList";
import CommentShow from "./CommentShow";

const CommentList = (props) => {
    console.log(props.id);

    const boardid = props.id;
    const [comment,setComment] = useState([]);




    useEffect(() => {
        fetch('http://localhost:8000/comment/' + boardid)
            .then(res => res.json())
            .then((res) => {
                setComment(res);
                console.log(res);
            });
    }, []);


    return <div>
        {comment.map((comment) => (
            <CommentShow comment={comment} />
        ))}
    </div>;

}

export default CommentList;
