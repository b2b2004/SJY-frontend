import React, {useEffect, useState} from 'react';
import {Button, Form, Spinner} from "react-bootstrap";
import BoardList from "../components/qna/BoardList";
import axios from "axios";
import "./Profile.css";
import moment from "moment";
import LoadingSpinner from "../components/loading/LoadingSpinner";


function Profile() {
    const Authorization = localStorage.getItem("Authorization");
    const [boards, setBoards] = useState([]);
    const [users, setuser] = useState([]);
    const [passwords, setPassword] = useState({
        password: '',
        password1: '',
        password2: ''
    });
    const [image, setImage] = useState({
        image_file: '',
        preview_URL: ''
    });
    const [loaded, setLoaded] = useState(false);
    const [username,setUsername] = useState();
    const [loading, setLoading] = useState(null);
    let inputRef;



    const changeValue = (e) => {
        setPassword({
            ...passwords,
            [e.target.name] : e.target.value
        });
    };


    useEffect(() => {
        setLoading(true);
            fetch("http://localhost:8000/profile",{
                    method: 'GET',
                    headers:{
                        Authorization
                    }
                }
            ).then((res) =>res.json()
            ).then((data)=>{
                setLoading(false);
                setuser(data);
                console.log(data);
                    setImage(
                        {
                            preview_URL: require(`../image/ProfileImage/${data.user.image}`)
                        }
                    )
            })


         fetch("http://localhost:8000/profile/board",{
            method: 'GET',
             headers:{
                Authorization
             }
         })
             .then(res => res.json())
             .then(res => {
                     setBoards(res);
                     console.log(res);
                 }
             )


    },[])

    const deleteId = () =>{
        if(window.confirm("정말 삭제할까요?")){
            fetch(
                "http://localhost:8000/profile/delete",{
                    method: 'DELETE',
                    headers:{
                        Authorization
                    }
                }
            ).then((res) =>res.text()
            ).then((res)=>{
                localStorage.clear();
                window.location.href = "/";
            })
        }
        else {

        }
    }

    const changePw = (e) =>{
        e.preventDefault();
        const password = e.target[0].value;
        const password1 = e.target[1].value;
        const password2 = e.target[2].value;

        if(password1 === password2){
            fetch(
                "http://localhost:8000/profile/chagePassword",{
                    method: 'POST',
                    headers:{
                        "Content-Type" : "application/json; charset=utf-8",
                        Authorization
                    },
                    body: JSON.stringify(passwords)
                }
            ).then((res) =>res.text()
            ).then((res)=>{
                alert(res);
                window.location.href = "/";
            })
        }
        else{
            alert("바꿀 비밀번호가 맞지 않습니다.");

        }
    }


    const saveImage = (e) =>{
        e.preventDefault();
        const fileReader = new FileReader();

        if(e.target.files[0]){
            setLoaded("loading")
            fileReader.readAsDataURL(e.target.files[0])
        }
        fileReader.onload = () => {
            setImage(
                {
                    image_file: e.target.files[0],
                    preview_URL: fileReader.result
                }
            )
            setLoaded(true);
        }
    }

    const deleteImage = async () => {
        setImage({
            image_file: "",
            preview_URL: require("../image/user.png"),
        });

        const formData = new FormData()
        formData.append('imageName', users.user.image);
        formData.append('username', users.username);
        await axios.post('http://localhost:8000/deleteImage/profile', formData);
        alert("삭제 완료");
    }

    const sendImageToServer = async () => {

        const FrontName = moment().format('YYYYMMDDHHmmss');
        const BackName = image.image_file.name;
        const imageName = "P" + FrontName + BackName;
        console.log(imageName);

        if(image.image_file){
            const formData = new FormData()
            formData.append('multipartFiles', image.image_file);
            formData.append('imageName', imageName);
            formData.append('username', users.username);
            await axios.post('http://localhost:8000/uploadImage/profile', formData);
            alert("등록 완료");
        }
        else{
            alert("사진을 등록하세요!")
        }
    }

    const changeNicknameValue = (e) =>{
        console.log(e.target.value);
        setUsername({
            ...username,
            [e.target.name]: e.target.value,
        });
    }

    const chageNickname = (e) =>{

        console.log(username.username);
        const Chagneusername = username.username;
        fetch("http://localhost:8000/profile/changeNickname/"+Chagneusername,{
                method: 'PUT',
                headers:{
                    "Content-Type" : "application/json; charset=utf-8",
                    Authorization
                },
            })
            .then()
            .then()
    }

    return <div>

        {
            loading
                ?<LoadingSpinner />
                :
                <div className='information'>
                    <h1 className='profile_title'>내 정보</h1>
                    <div className="image">
                        <input type="file" accept="image/*"
                               onChange={saveImage}
                               ref={refParam => inputRef = refParam}
                               style={{ display: "none" }}
                        />
                        <div className="img-wrapper">
                            {loaded === false || loaded === true ? (
                                <img src={image.preview_URL} className="imgWrapperIn"/>
                            ) : (
                                <Spinner className="img-spinner" tip = "이미지 불러오는중"/>
                            )}
                        </div>
                        <div className="imageControl">
                            <button className="imageUpload" onClick={() => inputRef.click()}>
                                이미지 선택
                            </button>
                            <button className="imageDelete" onClick={deleteImage}>
                                이미지 제거
                            </button>
                            <button className="imageDelete" onClick={sendImageToServer}>
                                이미지 저장
                            </button>
                        </div>
                    </div>
                    <div className="description">Codmeter에서 사용되는 이름입니다.</div>
                    <div className='nicknameTitle' >닉네임</div>
                    <div className='nickname_input_tag'>
                        <input
                            onChange={changeNicknameValue}
                            defaultValue={users.username}
                            name="username"
                            className="inNickname"
                            type="text"
                        />
                    </div>
                    <button className='apply' onClick={chageNickname}>적용</button>
                    <div className="description2">Codmeter에서 사용되는 비밀번호입니다.</div>
                    <Form onSubmit={changePw}>
                        <div>
                            <input type="password" placeholder="현재 비밀번호"  onChange={changeValue} name = "password" className="currentPw"/>
                        </div>
                        <div>
                            <input type="password1" placeholder="바꿀 비밀번호"  onChange={changeValue} name = "password1" className="currentPw"/>
                        </div>
                        <div>
                            <input type="password2" placeholder="바꿀 비밀번호 확인"  onChange={changeValue} name = "password2" className="currentPw"/>
                        </div>
                        <button variant="primary" type="submit" className="InPwChange">비밀번호 변경하기</button>
                    </Form>

                    {/*{boards.map((board) => (*/}
                    {/*    <BoardList key={board.id} board={board} />*/}
                    {/*))}*/}
                    <button className='memberDrop' onClick={deleteId}>회원탈퇴</button>
                </div>
        }

    </div>
}
export default Profile;