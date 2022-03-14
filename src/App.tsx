import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import StartPage from "./routes/components/start-page/StartPage";

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<StartPage />} />
            </Routes>
        </>
    );
}
