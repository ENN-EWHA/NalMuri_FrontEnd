import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import { createGlobalStyle } from "styled-components";
import MainPage from "./pages/MainPage";
import MainAfterLoginPage from "./pages/MainAfterLoginPage";
import ViewDiaryPage from "./pages/ViewDiaryPage";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<MainPage></MainPage>}></Route>
                <Route
                    path="/mainafterlogin"
                    element={<MainAfterLoginPage />}
                ></Route>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/viewdiary" element={<ViewDiaryPage />} />
            </Routes>
        </Router>
    );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;

    font-family: NanumSquareOTF_ac;
    src:url("./assets/fonts/NanumSquareOTF_acR.otf");
    font-weight: 400;
    font-size: 18px;
    color:#212529;
    }
`;

export default App;
