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
import axios from 'axios';
import { useSelector } from "react-redux";
function App() {
    // useEffect(() => {
    //     axios({
    //         method: 'GET',
    //         url: "./board/question/nlp",
    //         body: {
    //           "sentence":"집에가고싶다요"
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
    //         fetch("http://34.64.209.5:8080/board/question/nlp", {params:{"sentence":"집에가고싶다"}},{withCredentials: true })
    //           .then((response) => console.log("response:", response))
    //           .catch((error) => console.log("error:", error));
    // })


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
