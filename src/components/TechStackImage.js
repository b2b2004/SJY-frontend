import React, {useEffect} from "react";
import AllSOPBoard from "./studyOrProjectBoard/AllSOPBoard";
import "./TechStackImage.css"

function TechStackImage(props){
    const ts = props.techStack;
    const techStack = ts.split(',');
    console.log(techStack);
    return<>

        {techStack.map((techStack) => (
            <img src={`/images/languages/${techStack}.png`} />
        ))}
    </>
}

export default TechStackImage;