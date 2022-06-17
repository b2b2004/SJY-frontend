import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {Button, Form} from "react-bootstrap";

function SopWrite(){
    const Authorization = localStorage.getItem("Authorization");
    const [sopBoard, setsopBoard] = useState({
        boardType: '',
        meetType: '',
        area: '',
        recruitment: '',
        duration_start: '',
        duration_end: '',
        techStack: 'Vue',
        title: '',
        content: '',
    });

    const changeValue = (e) => {
        setsopBoard({
            ...sopBoard,
            [e.target.name]: e.target.value,
        });
    };

    const SopSummit = (e) => {
        e.preventDefault();
        console.log(sopBoard);
        // const str = sopBoard.techStack.join(','); 배열처리에서 쓸것
        // console.log(str);


        fetch("http://localhost:8000/sopBoard/sopWrite",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',Authorization
                },
                body: JSON.stringify(sopBoard),
            })
            .then()
            .then()
    }


    return(
        <Form onSubmit={SopSummit}>
        <h1>유형</h1>
        <select onChange={changeValue}  name="boardType">
            <option value="STUDY" >스터디</option>
            <option value="PROJECT" >프로젝트</option>
        </select>
        <h1>온/오프라인</h1>
        <select onChange={changeValue} name="meetType">
            <option value="ONLINE">온</option>
            <option value="OFFLINE">오프</option>
        </select>
        <h1>지역</h1>
        <select onChange={changeValue} name="area">
            <option value="SEOUL">서울</option>
            <option value="GYEONGGIDO">경기도</option>
            <option value="BUSAN">부산</option>
        </select>
        <h1>모집 인원</h1>
        <select onChange={changeValue} name="recruitment">
            <option value="0">미정</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>

        <h1>기술스택</h1>
            <input onClick={changeValue} type="checkbox" name="techStack" value="리엑트" className="checkbox1" />
            <label htmlFor="check1">리엑트</label>
            <input onClick={changeValue} type="checkbox" name="techStack" value="앵귤러" className="checkbox2" />
            <label htmlFor="check2">앵귤러</label>
            <input onChange={changeValue} type="checkbox" name="techStack[2]" value="뷰" className="checkbox3" />
            <label htmlFor="check3">뷰</label>
            <input onChange={changeValue} type="checkbox" name="techStack[3]" value="노드" className="checkbox4" />
            <label htmlFor="check4">노드</label>
            <input onChange={changeValue} type="checkbox" name="techStack[4]" value="익스프레스" className="checkbox5" />
            <label htmlFor="check5">익스프레스</label>

        <h1>기간</h1>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control onChange={changeValue} name="duration_start" type="text" placeholder="시작일" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control onChange={changeValue} name="duration_end"  type="text"  placeholder="마감일"  />
                </Form.Group>
            </Form>
            <br />


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

export default SopWrite;