
import React, {Profiler} from "react";
import {Carousel, Container} from "react-bootstrap";
import JoinForm from "./pages/JoinForm";
import Home from "./pages/Home";
import {Route} from "react-router-dom";
import loginForm from "./pages/LoginForm";
import GoogleLoginForm from "./pages/GoogleLoginForm";
import chatbot from "./pages/Chatbot";
import Chatbot from "./pages/Chatbot";
import BoardSaveForm from "./components/qna/BoardSaveForm";
import BoardUpdateForm from "./components/qna/BoardUpdateForm";
import GoogleLoginRedirect from "./pages/GoogleLoginRedirect";
import Study from "./pages/Study";
import Contests from "./pages/Contests";
import Questions from "./pages/Questions";
import Navbar from "./components/nav/Navbar";
import Profile from "./pages/Profile";
import Board from "./pages/Board";
import Information from "./components/profile/Information";
import Manager from "./pages/Manager";
import StudyOrProjectBoard from "./pages/studyOrProjectBoardPage/StudyOrProjectBoard";
import SopWrite from "./pages/studyOrProjectBoardPage/SopWrite";
import SopDetail from "./pages/studyOrProjectBoardPage/SopDetail";

function App() {
    return (
        <div>
            <Navbar />
            <Container>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/loginForm" exact={true} component={loginForm}/>
                <Route path="/joinForm" exact={true} component={JoinForm}/>
                <Route path="/googleLoginForm/" exact={true} component={GoogleLoginForm}/>
                <Route path="/googleLoginRedirect/:token" exact={true} component={GoogleLoginRedirect}/>
                <Route path="/saveForm" exact={true} component={BoardSaveForm} />
                <Route path="/updateForm/:id" exact={true} component={BoardUpdateForm} />
                <Route path="/study" exact={true} component={Study } />
                <Route path="/contests" exact={true} component={Contests } />
                <Route path="/questions" exact={true} component={Questions } />
                <Route path="/profile" exact={true} component={Profile } />
                <Route path="/boardTest" exact={true} component={Board} />
                <Route path="/information" exact={true} component={Information} />
                <Route path="/manager" exact={true} component={Manager} />
                <Route path="/sopBoard" exact={true} component={StudyOrProjectBoard} />
                <Route path="/sopWrite" exact={true} component={SopWrite} />
                <Route path="/sopDetail/:id" exact={true} component={SopDetail} />
            </Container>
        </div>
    );
}




export default App;