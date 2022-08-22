import React, {useState} from "react";
import {nextStep, previousStep, setTechStack} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import './SopTechStack.css';
import Select from "react-select";

const SopTechStack = ({ handleClose }) => {

    const formData = [
        { id: 1, name: "react"},
        { id: 2, name: "node.js"},
        { id: 3, name: "spring"},
        { id: 4, name: "vue"},
        { id: 5, name: "c++"},
        { id: 6, name: "java"},
    ]
    const Checkbox = new Set();

    const changetechStack = (e) => {
        if(Checkbox.has(e.target.value) === false){
            Checkbox.add(e.target.value);
            console.log(Checkbox);
        }else if (Checkbox.has(e.target.value) === true)
        {
            Checkbox.delete(e.target.value);
            console.log(Checkbox);
        }
        const test = [...Checkbox];
        const techStack = test.join(',');
        console.log("techStack = " + techStack);
        dispatch(setTechStack(techStack));
    }


    const dispatch = useDispatch();
    const backhandleSopBoardStep = async () => {
        dispatch(previousStep());
    };

    const nexthandleSopBoardStep = async () => {
        dispatch(nextStep());
    };

    const options = [
        { value: 1, label: "react"},
        { value: 2, label: "node.js"},
        { value: 3, label: "spring"},
        { value: 4, label: "vue"},
        { value: 5, label: "c++"},
        { value: 6, label: "java"},
    ] //원래는 select 태그 안에 들어가는 애들을 배열로 만들어준다.

    return<>
        <div className='title-wrapper-tech'>
            <div className='fadein'>
                <h1 className="title">어떤 기술을 쓰실 건가요?</h1>
            </div>
        </div>

        <Select
            isMulti
            name="area"
            onChange={changetechStack}
            className="languages"
            options={options}
            placeholder="인원을 선택해주세요."
        />

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

export default SopTechStack;