import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {Button, Form, Spinner} from "react-bootstrap";
import axios from "axios";
import moment from "moment";
import "./ContestWrite.css";


function ContestWrite(){
    const Authorization = localStorage.getItem("Authorization");
    const [image, setImage] = useState({
        image_file: '',
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

        const FrontName = moment().format('YYYYMMDDHHmmss');
        const BackName = image.image_file.name;
        const imageName = FrontName + BackName;
        console.log(imageName);


        if(image.image_file){
            console.log(image.image_file);
            const formData = new FormData()
            formData.append('multipartFiles', image.image_file);
            formData.append('imageName', imageName);
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

        contestBoard.image = imageName;
        console.log(contestBoard.image);

        fetch("http://localhost:8000/contestBoard/contestBoardWrite",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8', Authorization
                },
                body: JSON.stringify(contestBoard)
            })
            .then(()=>{
                alert("글쓰기 완료");
                window.location.href = "/contestboard";
            })
            .then()
    }


    return(
        <>
            <textarea onChange={changeValue} name="title" className="contestWriteTitle" placeholder="제목" />
            <div className="writeWrite">

                <div className="uploader-wrapper">
                    <input type="file" accept="image/*"
                           onChange={saveImage}
                           ref={refParam => inputRef = refParam}
                           style={{ display: "none" }}
                    />
                    <div className="contestCoverWrapper">
                        {loaded === false || loaded === true ? (
                            <img src={image.preview_URL} alt="포스터 등록" className="posterCover"/>
                        ) : (
                            <Spinner className="img-spinner" tip = "이미지 불러오는중"/>
                        )}
                    </div>
                    <div className="upload-button">
                        <button className="posterIn" type="primary" onClick={() => inputRef.click()}>
                            등록하기
                        </button>
                        <button className="posterOut" type="primary" danger>       {/*onclick*/}
                            삭제하기
                        </button>
                    </div>
                </div>

                <Form onSubmit={SopSummit}>
                    <div className="contestWriteWrapper">
                        <div className="inDurationContainer">
                            <div className="inDurationTitle">
                                접수기간
                            </div>
                            <div className="inDurationContent">
                                <textarea onChange={changeValue} name="duration_start" className="duration_start" placeholder="ex)20XX.XX.XX" />
                                <div className="m">~</div>
                                <textarea onChange={changeValue} name="duration_end" className="duration_end" placeholder="ex)20XX.XX.XX"  />
                            </div>
                        </div>
                        <div className="inHostContainer">
                            <div className="inHostTitle">
                                주최
                            </div>
                            <div className="inHostContent">
                                <textarea onChange={changeValue} name="host" className="host" placeholder="주최기관명"  />
                            </div>
                        </div>
                        <div className="inSupervisionContainer">
                            <div className="inSupervisionTitle">
                                주관
                            </div>
                            <div className="inSupervisionContent">
                                <textarea onChange={changeValue} name="supervision" className="supervision" placeholder="주관기관명"  />
                            </div>
                        </div>
                        <div className="inSponsorContainer">
                            <div className="inSponsorTitle">
                                후원/협찬
                            </div>
                            <div className="inSponsorContent">
                                <textarea onChange={changeValue} name="sponsor" className="sponsor" placeholder="후원/협찬 기관명"  />
                            </div>
                        </div>
                        <div className="inPrizeContainer">
                            <div className="inPrizeTitle">
                                시상
                            </div>
                            <div className="inPrizeContent">
                                <textarea onChange={changeValue} name="prize" className="prize" placeholder="시상금(만원)"  />
                            </div>
                        </div>
                        <div className="inHomepageContainer">
                            <div className="inHomepageTitle">
                                홈페이지
                            </div>
                            <div className="inHomepageContent">
                                <textarea onChange={changeValue} name="homepage" className="homepageUrl" placeholder="웹사이트 (https:// 포함)"  />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="contestIn">등록하기</button>
                </Form>
            </div>
        </>
    )
}

export default ContestWrite;