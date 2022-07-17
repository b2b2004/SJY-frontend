import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalVisible: false,
    currentStep: 1,
    boardType: undefined,
    meetType: undefined,
    area: undefined,
    recruitment: undefined,
    duration_start: undefined,
    duration_end: undefined,
    techStack: undefined,
    title: undefined,
    content: undefined,
    roleType: 'LEADER'
};

const SopBoardStepSlice = createSlice({
    name: "sopBoardStep",
    initialState,
    reducers: {
        nextStep: (state, action) => ({
            ...state,
            currentStep: state.currentStep + 1,
        }),
        previousStep: (state, action) => ({
            ...state,
            currentStep: state.currentStep - 1,
        }),
        clearStep: () => initialState,
        setSignUpUser: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        }),
        setModalVisible: (state, action) => ({
            ...state,
            modalVisible: action.payload,
        }),
        setBoardType: (state, action) => ({
            ...state,
            boardType: action.payload,
        }),
        setMeetType: (state, action) => ({
            ...state,
            meetType: action.payload,
        }),
        setArea: (state, action) => ({
            ...state,
            area: action.payload,
        }),
        setRecruitment: (state, action) => ({
            ...state,
            recruitment: action.payload,
        }),
        set_duration_start: (state, action) => ({
            ...state,
            duration_start: action.payload,
        }),
        set_duration_end: (state, action) => ({
            ...state,
            duration_end: action.payload,
        }),
        setTechStack: (state, action) => ({
            ...state,
            techStack: action.payload,
        }),
        setTitle: (state, action) => ({
            ...state,
            title: action.payload,
        }),
        setContent: (state, action) => ({
            ...state,
            content: action.payload,
        }),
    },
});

export const {
    nextStep,
    previousStep,
    setModalVisible,
    setBoardType,
    setArea,
    setRecruitment,
    set_duration_start,
    set_duration_end,
    setTechStack,
    setMeetType,
    setTitle,
    setContent
} = SopBoardStepSlice.actions;
export default SopBoardStepSlice.reducer;