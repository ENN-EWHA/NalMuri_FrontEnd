import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";

const FindId = () => {
    const [email, setEmail] = useState("");
    const [birth, setBirth] = useState("");
    const [id, setId] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleBirth = (e) => {
        setBirth(e.target.value);
    };
    const onClickFindid = (e) => {
        e.preventDefault();

        axios
            .get("/member/my/find/id", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json; charset=UTF-8",
                },
                data: {
                    email: email,
                    birth: birth,
                },
            })
            .then((res) => {
                console.log(res.data);
                setId(res.data);
                renderId();
            })
            .catch((err) => {
                console.log(err);
                alert("이메일 혹은 생년월일을 다시 입력해 주세요.");
            });
    };

    //enter
    const enterkey = (e) => {
        if (e.key == "Enter") {
            onClickFindid(e);
        }
    };
    const renderId = () => {
        const result = [];
        result.push(<Title>{`아이디 : ${id}`}</Title>);
        return result;
    };

    return (
        <Container>
            <Title>아이디를 찾기 위해 이메일과 생년월일을 입력해 주세요 </Title>
            <Frame>
                <Text>이메일</Text>
                <Input value={email} onChange={handleEmail} />
            </Frame>
            <Frame>
                <Text>생년월일</Text>
                <Input
                    type="date"
                    value={birth}
                    onChange={handleBirth}
                    onKeyPress={enterkey}
                />
            </Frame>
            <Button onClick={onClickFindid}>아이디 찾기</Button>
        </Container>
    );
};

export default FindId;

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
    padding: 16px 160px;
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
