import React, { useState, useEffect, useCallback } from "react";
import * as authAction from "./authAction";
let logoutTimer;

const AuthContext = React.createContext({
    token: "",
    userObj: { email: "", birth: "", userpw: "", userid: "" },
    isLoggedIn: false,
    isSuccess: false,
    isGetSuccess: false,
    signup: (email, birth, userpw, userid) => {},
    login: (userpw, userid) => {},
    logout: () => {},
    getUser: () => {},
    changeMyInfo: (email, birth) => {},
    changePassword: (currentPw, newPw, newPasswordCheck) => {},
});

export const AuthContextProvider = (props) => {
    const tokenData = authAction.retrieveStoredToken();
    let initialToken;
    if (tokenData) {
        initialToken = tokenData.token;
    }
    const [token, setToken] = useState(initialToken);
    const [userObj, setUserObj] = useState({
        email: "",
        birth: "",
        userpw: "",
        userid: "",
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isGetSuccess, setIsGetSuccess] = useState(false);
    const userIsLoggedIn = !!token;

    const signupHandler = (email, birth, userpw, userid) => {
        setIsSuccess(false);
        const response = authAction.signupActionHandler(
            email,
            birth,
            userpw,
            userid
        );
        response.then((result) => {
            if (result !== null) {
                setIsSuccess(true);
            }
        });
    };
    const loginHandler = (userpw, userid) => {
        setIsSuccess(false);
        console.log(isSuccess);
        const data = authAction.loginActionHandler(userpw, userid);
        data.then((result) => {
            if (result !== null) {
                const loginData = result.data;

                setToken(loginData.accessToken);

                logoutTimer = setTimeout(
                    logoutHandler,
                    authAction.loginTokenHandler(
                        loginData.accessToken,
                        loginData.tokenExpiresIn
                    )
                );

                setIsSuccess(true);
                console.log(isSuccess);
            }
        });
    };
    const logoutHandler = useCallback(() => {
        setToken("");

        authAction.logoutActionHandler();

        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);
    const getUserHandler = () => {
        setIsGetSuccess(false);

        const data = authAction.getUserActionHandler(token);

        data.then((result) => {
            if (result !== null) {
                console.log("get user start!");

                const userData = result.data;

                setUserObj(userData);
                setIsGetSuccess(true);
            }
        });
    };
    const changeMyInfoHandler = (email, birth) => {
        setIsSuccess(false);
        const data = authAction.changeMyInfoActionHandler(email, birth, token);
        data.then((result) => {
            if (result !== null) {
                const userData = result.data;
                setUserObj(userData);
                setIsSuccess(true);
            }
        });
    };
    const changePaswordHandler = (currentPw, newPw, newPasswordCheck) => {
        setIsSuccess(false);
        if (newPw !== newPasswordCheck) {
            alert("비밀번호 확인에 입력한 값이 비밀번호와 다릅니다.");
        } else {
            const data = authAction.changePasswordActionHandler(
                currentPw,
                newPw,
                token
            );
            data.then((result) => {
                if (result !== null) {
                    setIsSuccess(true);
                    logoutHandler(); //비밀번호 변경 후 자동 로그아웃
                }
            });
        }
    };
    useEffect(() => {
        if (tokenData) {
            console.log(tokenData.duration);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);
    const contextValue = {
        token,
        userObj,
        isLoggedIn: userIsLoggedIn,
        isSuccess,
        isGetSuccess,
        signup: signupHandler,
        login: loginHandler,
        logout: logoutHandler,
        getUser: getUserHandler,
        changeMyInfo: changeMyInfoHandler,
        changePassword: changePaswordHandler,
    };
    return React.createElement(
        AuthContext.Provider,
        { value: contextValue },
        props.children
    );
};
export default AuthContext;
