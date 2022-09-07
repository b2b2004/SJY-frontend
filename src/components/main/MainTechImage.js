import React from "react";
import {setRecruitment} from "../../store/SopBoardStep";

function MainTechImage(props){

    console.log(props.techStack.value);
    const techStack = props.techStack.value;
    return<>
            <img src={`/images/languages/${techStack}.png`} value={techStack}/>
    </>
}

export default MainTechImage;