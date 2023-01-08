import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [birth, setBirth] = useState("");
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwcheck, setPwcheck] = useState("");

    const [loading, setLoading] = useState("");
    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    }, [loading]);

    const navigate = useNavigate();

    //event
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleBirth = (e) => {
        setBirth(e.target.value);
    };
    const handleId = (e) => {
        setId(e.target.value);
    };
    const handlePw = (e) => {
        setPw(e.target.value);
    };
    const handlePwcheck = (e) => {
        setPwcheck(e.target.value);
    };
    const onClickSignup = (e) => {
        e.preventDefault();

        if (pw !== pwcheck) {
            return alert("비밀번호와 비밀번호 확인이 다릅니다.");
        }

        let body = {
            email: email,
            birth: birth,
            userid: id,
            userpw: pw,
        };
        axios
            .post("/auth/signup", body)
            .then((res) => {
                console.log(res.data);
                if (res.data.email) {
                    navigate("/login");
                }
            })
            .catch((err) => {
                console.log(err);
                alert("회원가입에 실패하였습니다.");
            });
        setLoading(true);
    };

    //enter
    const enterkey = (e) => {
        if (e.key == "Enter") {
            onClickSignup(e);
        }
    };

    return (
        <Container>
            <Title>회원가입</Title>
            <InputBox>
                <Frame>
                    <Text>이메일</Text>
                    <Input value={email} onChange={handleEmail} />
                </Frame>
                <Frame>
                    <Text>생년월일</Text>
                    <Input type="date" value={birth} onChange={handleBirth} />
                </Frame>
                <Frame>
                    <Text>아이디</Text>
                    <Input value={id} onChange={handleId} />
                </Frame>
                <Frame>
                    <Text>비밀번호</Text>
                    <Input type="password" value={pw} onChange={handlePw} />
                </Frame>
                <Frame>
                    <Text>비밀번호 확인</Text>
                    <Input
                        type="password"
                        value={pwcheck}
                        onChange={handlePwcheck}
                        onKeyPress={enterkey}
                    />
                </Frame>
            </InputBox>
            <SignupButton
                type="submit"
                disabled={loading}
                onClick={onClickSignup}
            >
                <Text>가입하기</Text>
            </SignupButton>
        </Container>
    );
};

export default Signup;

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
const SignupButton = styled.button`
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
