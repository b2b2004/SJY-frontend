import React, {useEffect, useState} from "react";
import {Button, CloseButton, Form} from "react-bootstrap";
import Calendar from "react-calendar";
import '../../components/studyOrProjectBoard/SopCalendar.css'
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import './SopWrite.css';

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
        roleType: 'LEADER',
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
        if(sopBoard.meetType != null && sopBoard.boardType != null){
            fetch("http://localhost:8000/sopBoard/sopWrite",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',Authorization
                    },
                    body: JSON.stringify(sopBoard),
                })
                .then(()=>{
                    alert("????????? ??????");
                    window.location.href = "/sopboard";
                })
                .then()
        }
        else{
            alert("MeetType , BoardType ????????????");
        }
    }


    return(
        <Form onSubmit={SopSummit}>
        <h1>??????</h1>
        <select onChange={changeValue}  name="boardType">
            <option value="STUDY" >?????????</option>
            <option value="PROJECT" >????????????</option>
        </select>
        <h1>???/????????????</h1>
        <select onChange={changeValue} name="meetType">
            <option value="ONLINE">???</option>
            <option value="OFFLINE">??????</option>
        </select>
        <h1>??????</h1>
        <select onChange={changeValue} name="area">
            <option value="SEOUL">??????</option>
            <option value="GYEONGGIDO">?????????</option>
            <option value="BUSAN">??????</option>
        </select>
        <h1>?????? ??????</h1>
        <select onChange={changeValue} name="recruitment">
            <option value="0">??????</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>

        <h1>????????????</h1>
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


        <h1>??????</h1>
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
                    <Form.Label>??????</Form.Label>
                    <Form.Control onChange={changeValue} name="title" type="textarea" placeholder="??????" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>??????</Form.Label>
                    <Form.Control onChange={changeValue} name="content"  as="textarea" rows={10} placeholder="??????"  />
                </Form.Group>
            </Form>
            <Button  type="submit">??????</Button>
    </Form>
    )
}

export default SopWrite;