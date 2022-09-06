import React, {useState} from "react";
import {nextStep, previousStep, set_duration_end, set_duration_start, setBoardType} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import "./SopDuration.css";
import Calendar from "react-calendar";
import moment from "moment";
import 'react-calendar/dist/Calendar.css';

const SopDuration = ({ handleClose }) => {

    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());

    const backhandleSopBoardStep = async () => {
        const duration_start = moment(date[0]).format("YYYY,MM,DD");
        const duration_end = moment(date[1]).format("YYYY,MM,DD");
        dispatch(set_duration_start(duration_start));
        dispatch(set_duration_end(duration_end));
        console.log("duration_start =" +duration_start);
        console.log("duration_end =" +duration_end);
        dispatch(previousStep());
    };

    const nexthandleSopBoardStep = async () => {
        const duration_start = moment(date[0]).format("YYYY,MM,DD");
        const duration_end = moment(date[1]).format("YYYY,MM,DD");
        dispatch(set_duration_start(duration_start));
        dispatch(set_duration_end(duration_end));
        console.log("duration_start =" +duration_start);
        console.log("duration_end =" +duration_end);
        dispatch(nextStep());
    };

    return  (
        <>
            <div className="sopCalendar_wrapper">
                <div className="fadein">
                    <h1 className="title">기간은 언제까지인가요?</h1>
                </div>
            </div>

            <div className="app">
                {/*{moment(date[0]).format("YYYY년 MM월 DD일")}   ~   {moment(date[1]).format("YYYY년 MM월 DD일")}*/}
                {/*<br/>*/}
                <div className="calendar-container">
                    <Calendar onChange={setDate} value={date} selectRange={true} />
                </div>
            </div>

            <footer className="modal_footer">
                <img
                    className="arrow-right-tech"
                    src="/images/arrow-right.png"
                    onClick={nexthandleSopBoardStep}
                />

                <img
                    className="arrow-left-tech"
                    src="/images/arrow-left.png"
                    onClick={backhandleSopBoardStep}
                />
            </footer>
        </>
    );
};

export default SopDuration;