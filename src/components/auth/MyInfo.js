import styled from "styled-components";
import Axios from "../../Axios";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const MyInfo = () => {
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const userInfo = useSelector((state) => state.auth.userData);
    const [email, setEmail] = useState("");
    const [birth, setBirth] = useState("");
    const [currentpw, setCurrentpw] = useState("");
    const [newpw, setNewpw] = useState("");
    const [newpwcheck, setNewpwcheck] = useState("");

    const [loading, setLoading] = useState("");
    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    }, [loading]);

    //event
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleBirth = (e) => {
        setBirth(e.target.value);
    };
    const handleCurrentpw = (e) => {
        setCurrentpw(e.target.value);
    };
    const handleNewpw = (e) => {
        setNewpw(e.target.value);
    };
    const handleNewpwcheck = (e) => {
        setNewpwcheck(e.target.value);
    };
    const onClickEdit1 = (e) => {
        e.preventDefault();

        if (email === "" || birth === "") {
            return alert("비어있는 항목이 있습니다.");
        }

        let body = {
            email: email,
            birth: birth,
        };

        Axios.put("/member/my/info", body)
            .then((res) => {
                alert("수정되었습니다.");
            })
            .catch((err) => {
                alert(err.response.data.message);
                console.log(err);
            });
    };
    const onClickEdit2 = (e) => {
        e.preventDefault();

        if (newpw !== newpwcheck) {
            return alert("새 비밀번호와 새 비밀번호 확인이 다릅니다.");
        }
        let body = {
            currentPw: currentpw,
            newPw: newpw,
            newPasswordCheck: newpwcheck,
        };
        Axios.put("/member/my/info/pw", body)
            .then((res) => {
                alert(res.data.message);
            })
            .catch((err) => {
                alert(err.response.data.message);
                console.log(err);
            });
    };

    return (
        <Container>
            <Title>내 정보</Title>
            <Content>
                <InputBox>
                    <Frame>
                        <Text>아이디</Text>
                        <Input value={userInfo.userid} />
                    </Frame>
                    <Frame>
                        <Text>이메일</Text>
                        <Input
                            placeholder={userInfo.email}
                            value={email}
                            onChange={handleEmail}
                        />
                    </Frame>
                    <Frame>
                        <Text>생년월일</Text>
                        <Input
                            ref={inputRef}
                            placeholder={userInfo.birth}
                            onFocus={() => (inputRef.current.type = "date")}
                            onBlur={() => (inputRef.current.type = "text")}
                            value={birth}
                            onChange={handleBirth}
                        />
                    </Frame>
                    <Button
                        type="submit"
                        disabled={loading}
                        onClick={onClickEdit1}
                        bgColor="#a7d8ff"
                    >
                        <Text>수정하기</Text>
                    </Button>
                </InputBox>
                <InputBox>
                    <Frame>
                        <Text>현재 비밀번호</Text>
                        <Input
                            type="password"
                            value={currentpw}
                            onChange={handleCurrentpw}
                        />
                    </Frame>
                    <Frame>
                        <Text>새 비밀번호</Text>
                        <Input
                            type="password"
                            value={newpw}
                            onChange={handleNewpw}
                        />
                    </Frame>
                    <Frame>
                        <Text>새 비밀번호 확인</Text>
                        <Input
                            type="password"
                            value={newpwcheck}
                            onChange={handleNewpwcheck}
                        />
                    </Frame>
                    <Button
                        type="submit"
                        disabled={loading}
                        onClick={onClickEdit2}
                        bgColor="#a7d8ff"
                    >
                        <Text>수정하기</Text>
                    </Button>
                    <Button
                        style={{ backgroundColor: "#rrrrrr" }}
                        onClick={() => {
                            navigate("/memdel");
                        }}
                        bgColor="#dfdfdf"
                    >
                        <Text>회원 탈퇴하기</Text>
                    </Button>
                </InputBox>
            </Content>
        </Container>
    );
};

export default MyInfo;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 52px;
`;
const Content = styled.div`
    display: flex;
    flex-direction: row;
    gap: 200px;
    margin: 100px auto;
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
const Button = styled.button`
    border: none;
    border-radius: 5px;
    height: 55px;
    width: 388px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: ${(props) => props.bgColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;
