import React, {useEffect, useState} from "react";
import moment from "moment";

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
                    작성자 : {username} <br />
                    이미지(위치수정)<img src={image.preview_URL} /> <br />
                    시간(위치수정){date}
                </div>

                <div className="title">
                    내용 : {content}
                </div>
            </div>

        </div>
    </>
}

export default SopDetailCommentList;