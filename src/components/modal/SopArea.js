import React, {useState} from "react";
import {nextStep, previousStep, setArea, setRecruitment} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import Select from "react-select";
import './SopArea.css';

const SopArea = ({ handleClose }) => {
    const dispatch = useDispatch();

    const changeValue = (e) => {
        console.log(e.value);
        console.log("e.target.value = " +e.value);
        dispatch(setArea(e.value));
    };

    const backhandleSopBoardStep = async () => {
        dispatch(previousStep());
    };

    const nexthandleSopBoardStep = async () => {
        dispatch(nextStep());
    };

    const areas = [
        { value: "상관없음", label: "상관없음" },
        { value: "서울", label: "서울" },
        { value: "경기도", label: "경기도" },
        { value: "부산광역시", label: "부산광역시" },
        { value: "인천광역시", label: "인천광역시" },
        { value: "대구광역시", label: "대구광역시" },
        { value: "경상남도", label: "경상남도" },
        { value: "경상북도", label: "경상북도" },
        { value: "대전광역시", label: "대전광역시" },
        { value: "충청남도", label: "충청남도" },
        { value: "충청북도", label: "충청북도" },
        { value: "전라남도", label: "전라남도" },
        { value: "전라북도", label: "전라북도" },
        { value: "광주광역시", label: "광주광역시" },
        { value: "강원도", label: "강원도" },
        { value: "울산광역시", label: "울산광역시" },
        { value: "제주특별자치도", label: "제주특별자치도" },
    ] //원래는 select 태그 안에 들어가는 애들을 배열로 만들어준다.



    return<>
        <div className='sopArea_wrapper'>
            <div className='fadein'>
                <h1 className="title">어디 지역에서 하시나요?</h1>
            </div>
            {/*<select onChange={changeValue} name="area">*/}
            {/*    <option value="SEOUL" className="font">서울</option>*/}
            {/*    <option value="GYEONGGIDO">경기도</option>*/}
            {/*    <option value="BUSAN">부산</option>*/}
            {/*</select>*/}
            <Select
                name="area"
                onChange={changeValue}
                className="languages"
                classNamePrefix="select"
                options={areas}
                placeholder="지역을 선택해주세요."
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

export default SopArea;