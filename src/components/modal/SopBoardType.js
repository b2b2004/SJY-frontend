import React, {useState} from "react";
import {nextStep, previousStep, setBoardType} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import "./SopBoardType.css";

const SopBoardType = ({ handleSopStep }) => {
    const dispatch = useDispatch();

    const changeValue = (e) => {
        console.log("e.target.value = " +e.target.value);
        dispatch(setBoardType(e.target.value));
    };
    const nexthandleSopBoardStep = async () => {
        dispatch(nextStep());
    };

    return <>

        <div className='sopBoardType_wrapper'>
            <div className='fadein'>
                <h1 className="title">유형</h1>
            </div>

            {/*<select onChange={changeValue}   name="boardType">*/}
            {/*    <option value="STUDY" >스터디</option>*/}
            {/*    <option value="PROJECT" >프로젝트</option>*/}
            {/*</select>*/}


            <label className="box-radio-input">
                <input id="radio1" onChange={changeValue}  name="boardType" type="radio" value="STUDY"/>
                <span>스터디</span>
            </label>
            <label className="box-radio-input">
                <input id="radio2" onChange={changeValue}  name="boardType" type="radio" value="PROJECT"/>
                <span>프로젝트</span>
            </label>

        </div>


        <footer className='modal_footer'>

            <img
                className="arrow-right-tech"
                src="/images/arrow-right.png"
                onClick={nexthandleSopBoardStep} />
        </footer>


    </>
};

export default SopBoardType;