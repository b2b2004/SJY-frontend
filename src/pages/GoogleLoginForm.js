import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";


    function GoogleLoginForm() {

        return (
            <div>
                <a href="http://localhost:8000/oauth2/authorization/kakao">카카오 로그인</a><br />
                <a href="http://localhost:8000/oauth2/authorization/google">구글 로그인</a><br />
                <a href="http://localhost:8000/oauth2/authorization/naver">네이버 로그인</a>
            </div>

        );
    }
export default GoogleLoginForm;