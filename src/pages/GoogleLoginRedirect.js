import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";


function GoogleLoginRedirect() {
    const params = useParams();

    useEffect(() => {
        console.log(params);
        localStorage.clear();
        localStorage.setItem("Authorization", params.token);
        window.location.replace("/");

    }, []);


    return <></>;
}
export default GoogleLoginRedirect;