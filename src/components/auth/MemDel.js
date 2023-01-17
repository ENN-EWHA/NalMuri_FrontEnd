import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../reducer/authSlice";

const MemDel = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [pw, setPw] = useState("");
    const handlePw = (e) => {
        setPw(e.target.value);
    };
    const onClickDelete = () => {
        axios
            .delete("/member", {
                data: {
                    checkPassword: pw,
                },
            })
            .then(() => {
                alert("정상적으로 회원 탈퇴 되었습니다.");
                dispatch(clearUser());
                window.localStorage.clear();
                delete axios.defaults.headers.common["Authorization"];
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                alert("비밀번호를 다시 입력해주세요.");
            });
    };

    //enter
    const enterkey = (e) => {
        if (e.key == "Enter") {
            onClickDelete(e);
        }
    };

    return (
        <Container>
            <Text>회원 탈퇴를 위해 비밀번호를 입력해 주세요</Text>
            <Input
                type="password"
                value={pw}
                onChange={handlePw}
                onKeyPress={enterkey}
            />
            <Button onClick={onClickDelete}>회원 탈퇴</Button>
        </Container>
    );
};

export default MemDel;

const Container = styled.div`
    padding: 100px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
`;
const Text = styled.div`
    text-align: center;
    vertical-align: top;
    font-size: 23px;
    line-height: auto;
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

    cursor: pointer;
`;
const Input = styled.input`
    border-radius: 5px;
    height: 55px;
    width: 388px;
    background-color: #ffffff;
    border: 1px solid #dee2e6;
`;
