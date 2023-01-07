import { GET, POST } from "./fetchAuth";
const createTokenHeader = (token) => {
    return {
        headers: {
            Authorization: "Bearer " + token,
        },
    };
};
const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
};
export const loginTokenHandler = (token, expirationTime) => {
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", String(expirationTime));
    const remainingTime = calculateRemainingTime(expirationTime);
    return remainingTime;
};
export const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem("token");
    const storedExpirationDate = localStorage.getItem("expirationTime") || "0";
    const remaingTime = calculateRemainingTime(+storedExpirationDate);
    if (remaingTime <= 1000) {
        localStorage.removeItem("token");
        localStorage.removeItem("expirationTime");
        return null;
    }
    return {
        token: storedToken,
        duration: remaingTime,
    };
};
export const signupActionHandler = (email, birth, userpw, userid) => {
    const URL = "/auth/signup";
    const signupObject = { email, birth, userpw, userid };
    const response = POST(URL, signupObject, {});
    return response;
};
export const loginActionHandler = (userpw, userid) => {
    const URL = "/auth/login";
    const loginObject = { userpw, userid };
    const response = POST(URL, loginObject, {});
    return response;
};
export const logoutActionHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
};
export const getUserActionHandler = (token) => {
    const URL = "/member/my/info";
    const response = GET(URL, createTokenHeader(token));
    return response;
};
export const changeMyInfoActionHandler = (email, birth, token) => {
    const URL = "/member/my/info";
    const changeMyInfoObj = { email, birth };
    const response = POST(URL, changeMyInfoObj, createTokenHeader(token));
    return response;
};
export const changePasswordActionHandler = (currentPw, newPw, token) => {
    const URL = "/member/my/info/pw";
    const changePasswordObj = { currentPw, newPw };
    const response = POST(URL, changePasswordObj, createTokenHeader(token));
    return response;
};
