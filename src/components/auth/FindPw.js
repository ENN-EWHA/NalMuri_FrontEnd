import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";

const FindPw = () => {
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [msg, setMsg] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleId = (e) => {
        setId(e.target.value);
    };
    const onClickFindpw = (e) => {
        e.preventDefault();

        let body = {
            email: email,
            userid: id,
        };
        axios
            .post("/member/my/find/password", body)
            .then((res) => {
                setMsg(res.data.message);
            })
            .catch((err) => {
                console.log(err);
                alert("이메일 혹은 아이디를 다시 입력해 주세요.");
            });
    };

    //enter
    const enterkey = (e) => {
        if (e.key == "Enter") {
            onClickFindpw(e);
        }
    };
    const renderPw = () => {
        const result = [];
        result.push(
            <Title style={{ margin: "50px", color: "#428DFF" }}>{msg}</Title>
        );
        return result;
    };

    return (
        <Container>
            <Title>
                비밀번호를 찾기 위해 이메일과 생년월일을 입력해 주세요{" "}
            </Title>
            <Frame>
                <Text>이메일</Text>
                <Input value={email} onChange={handleEmail} />
            </Frame>
            <Frame>
                <Text>아이디</Text>
                <Input value={id} onChange={handleId} onKeyPress={enterkey} />
            </Frame>
            {msg ? (
                renderPw()
            ) : (
                <Button onClick={onClickFindpw}>비밀번호 찾기</Button>
            )}
        </Container>
    );
};

export default FindPw;

const Container = styled.div`
    padding: 100px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11px;
`;
const Title = styled.div`
    text-align: center;
    vertical-align: top;
    font-size: 23px;
    line-height: auto;
    margin-bottom: 40px;
`;
const Text = styled.div`
    text-align: center;
    vertical-align: middle;
    line-height: auto;
`;
const Frame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
`;
const Button = styled.button`
    border: none;
    border-radius: 5px;
    height: 55px;
    width: 388px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    background-color: #edf4ff;
    margin-top: 20px;
    cursor: pointer;
`;
const Input = styled.input`
    border-radius: 5px;
    height: 55px;
    width: 388px;
    background-color: #ffffff;
    border: 1px solid #dee2e6;
`;
