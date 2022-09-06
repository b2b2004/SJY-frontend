import React, {useState} from "react";
import {nextStep, previousStep, setTechStack} from "../../store/SopBoardStep";
import {useDispatch} from "react-redux";
import './SopTechStack.css';
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import contestSlider from "../contestBordP/ContestSlider";

const SopTechStack = ({ handleClose }) => {

    const formData = [
        { id: 1, name: "react"},
        { id: 2, name: "node.js"},
        { id: 3, name: "spring"},
        { id: 4, name: "vue"},
        { id: 5, name: "c++"},
        { id: 6, name: "java"},
    ]

    const [selected, setSelected] = useState([]);
    const Checkbox = new Set();

    const changetechStack = (e) => {
        console.log(e);
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

    const changetechStack1 = (e) => {
        let length = e.length;
        if(Checkbox.has(e[length-1].value) === false){
            Checkbox.add(e[length-1].value);
            console.log(Checkbox);
        }else if (Checkbox.has(e[length-1].value) === true)
        {
            Checkbox.delete(e[length-1].value);
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
        {id:1, value: "react", label: "react"},
        {id:2,value: "node.js", label: "node.js"},
        {id:3, value: "spring", label: "spring"},
        {id:4, value: "vue", label: "vue"},
        {id:5, value: "c++", label: "c++"},
        {id:6, value: "java", label: "java"},
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
            onChange={changetechStack1}
            className="languages"
            options={options}
            placeholder="기술을 선택해주세요."
        />

        {/*<MultiSelect*/}
        {/*    options={options}*/}
        {/*    value={selected}*/}
        {/*    labelledBy="Select"*/}
        {/*    onChange={changetechStack1}*/}
        {/*/>*/}

        {/*{formData.map((item)=>(*/}
        {/*    <label key={item.id}>*/}
        {/*        {item.name}*/}
        {/*        <input*/}
        {/*            type="checkbox"*/}
        {/*            value={item.name}*/}
        {/*            onClick={changetechStack}*/}
        {/*        />*/}
        {/*    </label>*/}
        {/*))}*/}


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