import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Login/Login';

function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </Router>
    )
}

export default Rotas;