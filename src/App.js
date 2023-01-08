import React ,{useEffect,useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import { createGlobalStyle } from "styled-components";
import MainPage from "./pages/MainPage";
import MainAfterLoginPage from "./pages/MainAfterLoginPage";
import ViewDiaryPage from "./pages/ViewDiaryPage";
import LoginPage from "./pages/LoginPage";
import WriteDiaryPage from "./pages/WriteDiaryPage";
import WriteQuestionPage from "./pages/WriteQuestionPage";

function App() {
    useEffect(() => {
        axios
            .get(
                "https://178d967c-5c77-493f-923e-7513668fcaa6.mock.pstmn.io/board"
            )
            .then((Response) => {
                console.log("연결성공");
            })
            .catch((Error) => {
                console.log(Error);
            });
    }, []);
    useEffect(() => {
        axios
            .post("/board", {
                userid: "12",
                writeDate: "2023-01-01",
                diary: "오늘은 어쩌고 저쩌고",
            })
            .then((response) => console.log("post성공"))
            .catch((error) => console.log(error));
    }, []);

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
