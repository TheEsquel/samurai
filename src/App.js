import React from 'react';
import './App.css';
import Header  from './components/header/Header'
import Navbar  from './components/navbar/Navbar'
import Profile  from './components/profile/Profile'
import {BrowserRouter as Router}  from 'react-router-dom'
import { Route } from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";

function App(props) {
    return (
        <Router>
            <div className="wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path='/dialogs' render={()=>
                        <DialogsContainer
                            state={props.state}
                            dispatch={props.dispatch}
                        />}
                    />
                    <Route path='/profile' render={()=>
                        <Profile
                            state={props.state}
                            dispatch={props.dispatch}
                        />}
                    />
                </div>
            </div>
        </Router>
    );
}

export default App;
