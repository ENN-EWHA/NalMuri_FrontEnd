import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import { createGlobalStyle } from "styled-components";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </Router>
    );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;

    font-family: 'NanumSquareOTF_acR';
    src:url("./assets/font/NanumSquareOTF_acR.otf");
    font-weight: 400;
    font-size: 18px;
    }
`;

export default App;
