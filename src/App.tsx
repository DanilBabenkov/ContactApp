import React from 'react';
import {Route, Routes} from "react-router-dom";
import Contacts from "./pages/Contacts";
import {CONTACTS} from "./consts";
import Auth from "./pages/Auth";
import './App.css'
import {Container} from "@mui/material";

const App = () => {
    return (
        <Container>
            <Routes>
                <Route path={'/'} element={<Auth/>}/>
                <Route path={CONTACTS} element={<Contacts/>}/>
            </Routes>
        </Container>
    );
};

export default App;
