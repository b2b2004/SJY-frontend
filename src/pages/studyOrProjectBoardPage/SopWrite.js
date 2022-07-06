import React, {useEffect, useState} from "react";
import {Button, CloseButton, Form} from "react-bootstrap";
import Calendar from "react-calendar";
import '../../components/StudyOrProjectBoard/SopCalendar.css'
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import './sopWrite.css';

function SopWrite(){
    const Authorization = localStorage.getItem("Authorization");
    const [date, setDate] = useState(new Date());
    const Checkbox = new Set();
    const [sopBoard, setsopBoard] = useState({
        boardType: '',
        meetType: '',
        area: '',
        recruitment: '',
        duration_start: '',
        duration_end: '',
        techStack: '',
        title: '',
        content: '',
    });
        const formData = [
            { id: 1, name: "react"},
            { id: 2, name: "node.js"},
            { id: 3, name: "spring"},
            { id: 4, name: "vue"},
            { id: 5, name: "c++"},
            { id: 6, name: "java"},
        ]

    useEffect(()=>{
        console.log(date);
    })

        const changeValue = (e) => {
            setsopBoard({
                ...sopBoard,
                [e.target.name]: e.target.value,
            });
        };

        const changetechStack = (e) => {
            if(Checkbox.has(e.target.value) === false){
                Checkbox.add(e.target.value);
                console.log(Checkbox);
            }else if (Checkbox.has(e.target.value) === true)
            {
                Checkbox.delete(e.target.value);
                console.log(Checkbox);
            }
        }

    const SopSummit = (e) => {
        e.preventDefault();

        const a = [...Checkbox];
        sopBoard.techStack = a.join(',');
        sopBoard.duration_start = moment(date[0]).format("YYYY,MM,DD");
        sopBoard.duration_end = moment(date[1]).format("YYYY,MM,DD");


        console.log(sopBoard);
        fetch("http://localhost:8000/sopBoard/sopWrite",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',Authorization
                },
                body: JSON.stringify(sopBoard),
            })
            .then(()=>{
                alert("글쓰기 완료");
                window.location.href = "/sopboard";
            })
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
            {formData.map((item)=>(
                <label key={item.id}>
                    {item.name}
                    <input
                        type="checkbox"
                        value={item.name}
                        onClick={changetechStack}
                    />
                </label>
            ))}


        <h1>기간</h1>
            <div className='app'>
                <div className='calendar-container'>
                    <Calendar
                        onChange={setDate}
                        value={date}
                        selectRange={true}
                    />
                    {moment(date[0]).format("YYYY,MM,DD")}
                    <br />
                    {moment(date[1]).format("YYYY,MM,DD")}
                </div>
            </div>

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