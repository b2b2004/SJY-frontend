import React, {useEffect, useState} from "react";
import moment from "moment";
import {Card} from "react-bootstrap";

function SopDetailCommentList(props){

    console.log(props);
    const { id, username, content, board_date } = props.comment;
    const date = moment(board_date).format("YYYY,MM,DD, H:mm:ss");
    const Authorization = localStorage.getItem("Authorization");
    const [image, setImage] = useState({
        image_file: '',
        preview_URL: ''
    });

    useEffect(()=>{
        fetch('http://localhost:8000/profile/sopboard/'+ username ,{
                method: 'GET',
                headers:{
                    Authorization
                }
            }
        ).then((res) =>res.json()
        ).then((data)=>{
            console.log(data.image);
            setImage(
                {
                    preview_URL: require(`../../image/ProfileImage/${data.image}`)
                }
            )
        })
    },[])

    return<>
        <div>
            <div className="commentContainer">
                <div className="userNickname">
                    <div className='commentList_img_wrapper'>
                        <img src={image.preview_URL}/> <br/>
                        <Card.Title className='board_user_name'>{username}</Card.Title>
                    </div>
                </div>
                <div className='comment_content_wrapper'>
                    <Card.Title className='board_content'>
                        <div className='comment_content'>{content}</div>
                    </Card.Title>
                </div>
                <footer><div className='commentList_date'>{date}</div></footer>
            </div>

        </div>
    </>
}

export default SopDetailCommentList;