import React from "react";
import {setRecruitment} from "../../store/SopBoardStep";
import './MainTechImage.css';

function MainTechImage(props){

    console.log(props.techStack.value);
    const techStack = props.techStack.value;
    return<>
        <img src={`/images/languages/${techStack}.png`} value={techStack} className='main_tech_img'/>
    </>
}

export default MainTechImage;