
import React, {Profiler} from "react";
import {Carousel, Container} from "react-bootstrap";
import JoinForm from "./pages/JoinForm";
import {Route} from "react-router-dom";
import loginForm from "./pages/LoginForm";
import BoardSaveForm from "./components/qna/BoardSaveForm";
import BoardUpdateForm from "./components/qna/BoardUpdateForm";
import GoogleLoginRedirect from "./pages/GoogleLoginRedirect";
import Navbar from "./components/nav/Navbar";
import Profile from "./pages/Profile";
import Board from "./pages/qnaBoardPage/Board";
import Information from "./components/profile/Information";
import Manager from "./pages/Manager";
import StudyOrProjectBoard from "./pages/studyOrProjectBoardPage/StudyOrProjectBoard";
import SopDetail from "./pages/studyOrProjectBoardPage/SopDetail";
import ContestBoard from "./pages/contestBoardPage/ContestBoard";
import ContestDetail from "./pages/contestBoardPage/ContestDetail";
import ContestWrite from "./pages/contestBoardPage/ContestWrite";
import Main from "./pages/main/main";
import SopManage from "./pages/studyOrProjectBoardPage/SopManage";
import SopManageNoticeWrite from "./pages/studyOrProjectBoardPage/SopManageNoticeWrite";
import SopManageNoticeDetail from "./pages/studyOrProjectBoardPage/SopManageNoticeDetail";
import SopMangerWrite from "./pages/studyOrProjectBoardPage/SopMangerWrite";
import TeamIntroduction from "./pages/TeamIntroduction";

function App() {
    return (
        <div>
            <Navbar />
            <Route path="/" exact={true} component={Main}/>
            <Container>
                <Route path="/loginForm" exact={true} component={loginForm}/>
                <Route path="/joinForm" exact={true} component={JoinForm}/>
                <Route path="/googleLoginRedirect/:token" exact={true} component={GoogleLoginRedirect}/>
                <Route path="/saveForm" exact={true} component={BoardSaveForm} />
                <Route path="/updateForm/:id" exact={true} component={BoardUpdateForm} />
                <Route path="/profile" exact={true} component={Profile } />
                <Route path="/boardTest" exact={true} component={Board} />
                <Route path="/information" exact={true} component={Information} />
                <Route path="/manager" exact={true} component={Manager} />
                <Route path="/sopBoard" exact={true} component={StudyOrProjectBoard} />
                <Route path="/sopDetail/:id" exact={true} component={SopDetail} />
                <Route path="/contestBoard" exact={true} component={ContestBoard} />
                <Route path="/contestDetail/:id" exact={true} component={ContestDetail} />
                <Route path="/contestWrite" exact={true} component={ContestWrite} />
                <Route path="/sopManage/:id" exact={true} component={SopManage} />
                <Route path="/sopManageNoticeWrite/:id" exact={true} component={SopManageNoticeWrite} />
                <Route path="/sopManageNoticeDetail/:id" exact={true} component={SopManageNoticeDetail} />
                <Route path="/sopManagerWrite/:id" exact={true} component={SopMangerWrite} />
                <Route path="/introduce" exact={true} component={TeamIntroduction} />
            </Container>
        </div>
    );
}




export default App;