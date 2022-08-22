import React, {useState} from "react";
import {nextStep, previousStep, setMeetType} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import './SopMeetType.css';

const SopMeetType = ({ handleClose }) => {

    const changeValue = (e) => {
        console.log("e.target.value = " +e.target.value);
        dispatch(setMeetType(e.target.value));
    };

    const dispatch = useDispatch();
    const backhandleSopBoardStep = async () => {
        dispatch(previousStep());
    };

    const nexthandleSopBoardStep = async () => {
        dispatch(nextStep());
    };

    return <>
        <div className='sopMeetType_wrapper'>
            <div className='fadein'>
                <h1 className="title">온/오프라인</h1>
            </div>
            {/*<select onChange={changeValue} name="meetType">*/}
            {/*    <option value="ONLINE">온</option>*/}
            {/*    <option value="OFFLINE">오프</option>*/}
            {/*</select>*/}

            <label className="box-radio-input">
                <input id="radio1" onChange={changeValue}  name="meetType" type="radio" value="ONLINE"/>
                <span>온라인</span>
            </label>
            <label className="box-radio-input">
                <input id="radio2" onChange={changeValue}  name="meetType" type="radio" value="OFFLINE"/>
                <span>오프라인</span>
            </label>

        </div>


        <footer className='modal_footer'>

            <img
                className="arrow-right-tech"
                src="/images/arrow-right.png"
                onClick={nexthandleSopBoardStep} />

            <img
                className="arrow-left-tech"
                src="/images/arrow-left.png"
                onClick={backhandleSopBoardStep} />
        </footer>
    </>;
};

export default SopMeetType;