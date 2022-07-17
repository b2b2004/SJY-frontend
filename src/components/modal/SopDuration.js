import React, {useState} from "react";
import {nextStep, previousStep, set_duration_end, set_duration_start, setBoardType} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import styles from "./Set_Login.module.css";
import Calendar from "react-calendar";
import moment from "moment";

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

    return <>
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


        <button
            onClick={backhandleSopBoardStep}
            className={styles.buttonNext}
        >이전 단계
        </button>

        <button
            onClick={nexthandleSopBoardStep}
            className={styles.buttonNext}
        >다음 단계
        </button>
    </>;
};

export default SopDuration;