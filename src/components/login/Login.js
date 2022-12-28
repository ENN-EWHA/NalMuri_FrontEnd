import styled from "styled-components";

const Login = () => {
    return (
        <Container>
            <Title>로그인</Title>
            <InputBox>
                <Frame>
                    <Text>아이디</Text>
                    <Input />
                </Frame>
                <Frame>
                    <Text>비밀번호</Text>
                    <Input type="password" />
                </Frame>
            </InputBox>
            <LoginButton>
                <Text>가입하기</Text>
            </LoginButton>
            <Text>아직 회원이 아니신가요?</Text>
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
`;
