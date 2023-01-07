import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser, userInfo } from "../../reducer/authSlice";

const Login = () => {
    const dispatch = useDispatch();

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const [loading, setLoading] = useState(""); //loading 중에는 login 버튼을 클릭할 수 없음

    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    }, [loading]);

    //input data가 변화할 때마다 value 변경
    const handleId = (e) => {
        setId(e.target.value);
    };
    const handlePw = (e) => {
        setPw(e.target.value);
    };

    //login 클릭 시
    const onClickLogin = (e) => {
        e.preventDefault();

        let body = {
            userid: id,
            userpw: pw,
        };
        axios
            .post("/auth/login", body)
            .then((res) => {
                dispatch(loginUser(res.data.accessToken));
                if (res.data.accessToken) {
                    localStorage.setItem("loginToken", res.data.accessToken);

                    //token 정보를 사용하여 user 정보를 불러온 뒤 저장
                    axios.defaults.headers.common[
                        "Authorization"
                    ] = `Bearer ${res.data.accessToken}`;
                    axios
                        .get("/member/my/info")
                        .then((res) => {
                            dispatch(userInfo(res.data));
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }

                navigate("/mainAfterLogin");
            })
            .catch((error) => {
                console.log(error);
                alert("ID 혹은 비밀번호가 틀렸습니다.");
            });
        setLoading(true);
    };

    //enter
    const enterkey = (e) => {
        if (e.key == "Enter") {
            onClickLogin(e);
        }
    };

    return (
        <Container>
            <Title>로그인</Title>
            <InputBox>
                <Frame>
                    <Text>아이디</Text>
                    <Input value={id} onChange={handleId} />
                </Frame>
                <Frame>
                    <Text>비밀번호</Text>
                    <Input
                        type="password"
                        value={pw}
                        onChange={handlePw}
                        onKeyPress={enterkey}
                    />
                </Frame>
            </InputBox>
            <LoginButton
                type="submit"
                disabled={loading}
                onClick={onClickLogin}
            >
                <Text>로그인 하기</Text>
            </LoginButton>
            <Text>
                <Link
                    to={"/signup"}
                    style={{ color: "black", textDecoration: "none" }}
                >
                    아직 회원이 아니신가요?
                </Link>
            </Text>
            <Text>(아이디/비밀번호 찾기)</Text>
        </Container>
    );
};

export default Login;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 52px;
`;
const Text = styled.div`
    text-align: center;
    vertical-align: middle;
    line-height: auto;
    color: #000000;
`;
const Title = styled(Text)`
    font-size: 30px;
`;
const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 11px;
`;
const Frame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
`;
const Input = styled.input`
    border-radius: 5px;
    height: 55px;
    width: 388px;
    background-color: #ffffff;
    border: 1px solid #dee2e6;
`;
const LoginButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 55px;
    width: 388px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #a7d8ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;
