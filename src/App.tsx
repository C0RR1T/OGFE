import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import StartPage from "./routes/start-page/StartPage";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<StartPage />} />
            </Routes>
        </>
    );
}

export default App;
