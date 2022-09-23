import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {doubleStep, nextStep, previousStep, setSignUpUser} from "../../store/loginStep";
import SetLogin from "./Set_Login";
import { toast } from "react-toastify";

const SetNicknameContainer = (props) => {
    const dispatch = useDispatch();
    const [nickname, setNickname] = useState("");
    const userId = useSelector((state) => state.loginStep.id);
    const handleLoginStep = async () => {
        dispatch(nextStep());
    };

    const backhandleLoginStep = async () => {
        dispatch(previousStep());
    };

    const FindPWLoginStep = async () => {
        dispatch(doubleStep());
    };

    return (
        <SetLogin
            setNickname={setNickname}
            FindPWLoginStep={FindPWLoginStep}
            handleLoginStep={handleLoginStep}
            backhandleLoginStep={backhandleLoginStep}
            nickname={nickname}
        ></SetLogin>
    );
};

export default SetNicknameContainer;