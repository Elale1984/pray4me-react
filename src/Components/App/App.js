import React from "react";
import "./App.css"
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={
                            <Home />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;