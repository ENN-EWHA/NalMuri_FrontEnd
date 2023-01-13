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
import MemDelPage from "./pages/MemDelPage";
import FindIdPage from "./pages/FindIdPage";
import FindPwPage from "./pages/FindPwPage";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser, userInfo } from "./reducer/authSlice";

function App() {
    // useEffect(() => {
    //     axios({
    //         method: 'GET',
    //         url: "./board/question/nlp",
    //         body: {
    //             "sentence": "왜 안되는건데 진짜 짜증나"
    //         }

    //       }, { withCredentials : true })
    //         .then((Response)=>{
    //           console.log(Response.data);
    //       }).catch((Error)=>{
    //           console.log(Error);
    //       })
    // })

    // axios

    // useEffect(() => {
    //     axios
    //         .post("/board",{userid:"1", writeDate:"2022-01-05", diary:"1"}

    //         )
    //         .then((response) => {
    //             console.log("보내짐");

    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    // useEffect(() => {
    //     axios
    //         .get("/board/question/nlp", {
    //             "sentence":"안녕하세요"
    //             }

    //         )
    //         .then((response) => console.log(response.data))
    //         .catch((error) => console.log(error));
    // }, []);
    // useEffect(() => {
    //     fetch("./board/question/nlp", {params:{"sentence":"집에가고싶다"}},{withCredentials: true })
    //           .then((response) => console.log("response:", response))
    //           .catch((error) => console.log("error:", error));
    // })

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

    //로그인 검증
    const dispatch = useDispatch();
    const accessToken = window.localStorage.getItem("loginToken");
    if (accessToken) {
        dispatch(loginUser(accessToken));
        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${accessToken}`;
        axios
            .get("/member/my/info")
            .then((res) => {
                dispatch(userInfo(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    }

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
                <Route path="/memdel" element={<MemDelPage />} />
                <Route path="/findid" element={<FindIdPage />} />
                <Route path="/findpw" element={<FindPwPage />} />
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
