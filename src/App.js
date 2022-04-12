
import React from "react";
import {Container} from "react-bootstrap";

import Header from "./components/Header";
import LoginForm from "./pages/LoginForm";
import JoinForm from "./pages/JoinForm";
import Home from "./pages/Home";
import {BrowserRouter, Route, Router} from "react-router-dom";
import loginForm from "./pages/LoginForm";


function App() {
    return (
        <div>
            <Header/>
            <Container>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/loginForm" exact={true} component={loginForm}/>
                <Route path="/joinForm" exact={true} component={JoinForm}/>
            </Container>
        </div>
    );
}




export default App;