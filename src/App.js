import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import { createGlobalStyle } from "styled-components";
import MainPage from "./pages/MainPage";
import MainAfterLoginPage from "./pages/MainAfterLoginPage";
import ViewDiaryPage from "./pages/ViewDiaryPage";
import LoginPage from "./pages/LoginPage";
import WriteDiaryPage from "./pages/WriteDiaryPage";
import WriteQuestionPage from "./pages/WriteQuestionPage";
import { useSelector } from "react-redux";

function App() {
    const isLogin = useSelector((state) => state.auth.isLogin);

    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route
                    path="/"
                    element={
                        isLogin ? <MainAfterLoginPage /> : <MainPage></MainPage>
                    }
                ></Route>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/viewdiary" element={<ViewDiaryPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/writediary" element={<WriteDiaryPage />} />
                <Route path="/writeQuestion" element={<WriteQuestionPage />} />
            </Routes>
        </Router>
    );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;

    font-family: 'NanumSquare';
    src:url("https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css");
    font-weight: 400;
    font-size: 18px;
    color:#212529;
    }
`;

export default App;
