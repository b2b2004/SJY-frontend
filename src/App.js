
import React, {Profiler} from "react";
import {Container} from "react-bootstrap";

import Header from "./components/Header";
import JoinForm from "./pages/JoinForm";
import Home from "./pages/Home";
import {Route} from "react-router-dom";
import loginForm from "./pages/LoginForm";
import GoogleLoginForm from "./pages/GoogleLoginForm";
import chatbot from "./pages/Chatbot";
import Chatbot from "./pages/Chatbot";
import BoardHome from "./pages/qna/BoardHome";
import SaveForm from "./pages/qna/SaveForm";
import Detail from "./pages/qna/Detail";
import UpdateForm from "./pages/qna/UpdateForm";
import GoogleLoginRedirect from "./pages/GoogleLoginRedirect";
import Study from "./pages/Study";
import Contests from "./pages/Contests";
import Questions from "./pages/Questions";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Board from "./pages/Board";

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
                <Route path="/board" exact={true} component={BoardHome} />
                <Route path="/saveForm" exact={true} component={SaveForm} />
                <Route path="/board/:id" exact={true} component={Detail} />
                <Route path="/updateForm/:id" exact={true} component={UpdateForm} />
                <Route path="/study" exact={true} component={Study } />
                <Route path="/contests" exact={true} component={Contests } />
                <Route path="/questions" exact={true} component={Questions } />
                <Route path="/profile" exact={true} component={Profile } />
                <Route path="/boardTest" exact={true} component={Board} />
            </Container>
        </div>
    );
}




export default App;