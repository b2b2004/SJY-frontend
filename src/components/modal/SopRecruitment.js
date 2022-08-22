import React, {useState} from "react";
import {nextStep, previousStep, setBoardType, setRecruitment} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import Select from "react-select";
import './SopRecruitment.css';

const SopRecruitment = ({ handleClose }) => {

    const dispatch = useDispatch();


    const changeValue = (e) => {
        console.log(e.value);
        console.log("e.target.value = " +e.value);
        dispatch(setRecruitment(e.value));
    };

    const backhandleSopBoardStep = async () => {
        dispatch(previousStep());
    };

    const nexthandleSopBoardStep = async () => {

        dispatch(nextStep());
    };

    const peopleNumber = [
        { value: "0", label: "미정" },
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6명 이상", label: "6" },
    ]

    return <>
        <div className ="sopRecruitment_wrapper">
            <div className='fadein'>
                <h1 className="title">모집 인원은 몇명인가요?</h1>
            </div>
            {/*<Select*/}
            {/*    onChange={changeValue}*/}
            {/*    name="recruitment"*/}
            {/*    options={ peopleNumber }*/}
            {/*    defaultValue={peopleNumber[0]}/>*/}
            <Select
                name="recruitment"
                onChange={changeValue}
                className="languages"
                classNamePrefix="select"
                options={peopleNumber}
                placeholder="인원을 선택해주세요."
            />

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

export default SopRecruitment;