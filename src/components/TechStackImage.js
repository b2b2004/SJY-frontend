import React, {useEffect} from "react";
import "./TechStackImage.css"

function TechStackImage(props){
    console.log(props);
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