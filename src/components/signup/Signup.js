import styled from "styled-components";

const Signup = () => {
    return (
        <Container>
            <Title>회원가입</Title>
            <InputBox>
                <Frame>
                    <Text>이름</Text>
                    <Input />
                </Frame>
                <Frame>
                    <Text>사용할 별명</Text>
                    <Input />
                </Frame>
                <Frame>
                    <Text>이메일</Text>
                    <Input />
                </Frame>
                <Frame>
                    <Text>비밀번호</Text>
                    <Input type="password" />
                </Frame>
                <Frame>
                    <Text>비밀번호 확인</Text>
                    <Input type="password" />
                </Frame>
            </InputBox>
            <SignupButton>
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
`;
