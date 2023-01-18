import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import Axios from "./Axios";
import { loginUser, userInfo } from "./reducer/authSlice";

import SignupPage from "./pages/SignupPage";
import MainPage from "./pages/MainPage";
import MainAfterLoginPage from "./pages/MainAfterLoginPage";
import ViewDiaryPage from "./pages/ViewDiaryPage";
import LoginPage from "./pages/LoginPage";
import WriteDiaryPage from "./pages/WriteDiaryPage";
import WriteQuestionPage from "./pages/WriteQuestionPage";
import MemDelPage from "./pages/MemDelPage";
import FindIdPage from "./pages/FindIdPage";
import FindPwPage from "./pages/FindPwPage";
import MyInfoPage from "./pages/MyInfoPage";

function App() {
    useEffect(() => {
        axios(
            {
                method: "POST",
                url: "http://34.64.209.5:5000/api",
                data: JSON.stringify({
                    sentence: "집에가고싶다요",
                }),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            },
            { withCredentials: true }
        )
            .then((Response) => {
                console.log(Response.data);
            })
            .catch((Error) => {
                console.log(Error);
            });
    });
    const dispatch = useDispatch();
    const accessToken = window.localStorage.getItem("accessToken");
    const isLogin = useSelector((state) => state.auth.isLogin);

    //로그인 검증
    if (accessToken) {
        dispatch(loginUser(accessToken));
        Axios.get("/member/my/info")
            .then((res) => {
                dispatch(userInfo(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    }

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
                <Route path="/memdel" element={<MemDelPage />} />
                <Route path="/findid" element={<FindIdPage />} />
                <Route path="/findpw" element={<FindPwPage />} />
                <Route path="/myinfo" element={<MyInfoPage />} />
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
    }
`;

export default App;
