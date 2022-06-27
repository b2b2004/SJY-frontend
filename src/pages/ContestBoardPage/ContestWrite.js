import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {Button, Form, Spinner} from "react-bootstrap";
import axios from "axios";


function ContestWrite(){
    const Authorization = localStorage.getItem("Authorization");
    const [image, setImage] = useState({
        image_file: "",
        preview_URL: "img/default_image.png"
        });
    const [loaded, setLoaded] = useState(false);
    let inputRef;

    const [contestBoard, setContestBoard] = useState({
        image: '',
        host: '',
        supervision: '',
        sponsor: '',
        homepage: '',
        prize:'',
        duration_start: '',
        duration_end: '',
        title: '',
        content: '',
    });

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

    const changeValue = (e) => {
        setContestBoard({
            ...contestBoard,
            [e.target.name]: e.target.value,
        });
    };


    const SopSummit = async (e) => {
        e.preventDefault();
        if(image.image_file){
            const formData = new FormData()
            formData.append('multipartFiles', image.image_file);
            console.log(image.image_file);
            await axios.post('http://localhost:8000/uploadImage', formData);
            alert("서버에 등록이 완료되었습니다!");
            setImage({
                image_file: "",
                preview_URL: "img/default_image.png",
            });
            setLoaded(false);
        }
        else{
            alert("사진을 등록하세요!")
        }


        contestBoard.image = image.image_file.name;
        console.log(contestBoard.image);
        fetch("http://localhost:8000/contestBoard/contestBoardWrite",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
                body: JSON.stringify(contestBoard)
            })
            .then()
            .then()
    }


    return(
        <Form onSubmit={SopSummit}>
            <div>사진칸</div>
            <div className="uploader-wrapper">
                <input type="file" accept="image/*"
                       onChange={saveImage}
                       ref={refParam => inputRef = refParam}
                       style={{ display: "none" }}
                />
                <div className="img-wrapper">
                    {loaded === false || loaded === true ? (
                        <img src={image.preview_URL} />
                    ) : (
                        <Spinner className="img-spinner" tip = "이미지 불러오는중"/>
                    )}
                </div>

                <div className="upload-button">
                    <Button type="primary" onClick={() => inputRef.click()}>
                        Preview
                    </Button>
                    <Button type="primary" danger>
                        Delete
                    </Button>
                </div>
            </div>


            <h1>접수 기간</h1>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control onChange={changeValue} name="duration_start" type="text" placeholder="시작일" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control onChange={changeValue} name="duration_end"  type="text"  placeholder="마감일"  />
                </Form.Group>
            </Form>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>주최</Form.Label>
                    <Form.Control onChange={changeValue} name="host"  type="textarea" rows={10} placeholder="주최"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>주관</Form.Label>
                    <Form.Control onChange={changeValue} name="supervision"  type="textarea" rows={10} placeholder="주관"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>후원/협찬</Form.Label>
                    <Form.Control onChange={changeValue} name="sponsor"  type="textarea" rows={10} placeholder="후원/협찬"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>상금</Form.Label>
                    <Form.Control onChange={changeValue} name="prize"  type="textarea" rows={10} placeholder="시상"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>홈페이지</Form.Label>
                    <Form.Control onChange={changeValue} name="homepage"  type="textarea" rows={10} placeholder="홈페이지"  />
                </Form.Group>
            </Form>


            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>제목</Form.Label>
                    <Form.Control onChange={changeValue} name="title" type="textarea" placeholder="제목" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>내용</Form.Label>
                    <Form.Control onChange={changeValue} name="content"  as="textarea" rows={10} placeholder="내용"  />
                </Form.Group>
            </Form>
            <Button  type="submit">생성</Button>
        </Form>
    )
}

export default ContestWrite;