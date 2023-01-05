import styled from "styled-components";
import logo from "../assets/imgs/logo.png";

const Header = () => {
    return (
        <Container>
            <Left>
                <LogoImg src={logo} />
                <Logo>날무리</Logo>
            </Left>
            <Right>
                <Text>회원가입</Text>
                <Text>로그인</Text>
            </Right>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    width: 82.7vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 23px auto;
`;
const Left = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
`;
const LogoImg = styled.img`
    height: 30px;
    width: 30px;
`;
const Logo = styled.div`
    text-align: center;
    vertical-align: top;
    font-size: 25px;
    line-height: auto;
    color: #000000;
    font-weight: 700;
`;
const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 102px;
`;
const Text = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 18px;
    line-height: auto;
    color: #000000;
`;