import React, {useState} from "react";
import {nextStep, previousStep, setTechStack} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import styles from "./Set_Login.module.css";

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

    return <>
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

export default SopTechStack;