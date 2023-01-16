import styled from "styled-components";
import logo from "../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../reducer/authSlice";
import axios from "axios";

const Header = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.auth.isLogin);

    const renderRight = () => {
        const result = [];

        if (isLogin != true) {
            result.push(
                <Right>
                    <Text>
                        <Link
                            to={"/signup"}
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            회원가입
                        </Link>
                    </Text>
                    <Text>
                        <Link
                            to={"/login"}
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            로그인
                        </Link>
                    </Text>
                </Right>
            );
        } else {
            result.push(
                <Right>
                    <Text
                        onClick={() => {
                            dispatch(clearUser());
                            window.localStorage.clear();
                            delete axios.defaults.headers.common[
                                "Authorization"
                            ];
                        }}
                    >
                        <Link
                            to={"/"}
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            로그아웃
                        </Link>
                    </Text>
                    <Text>
                        <Link
                            to={"/memdel"}
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            회원 탈퇴
                        </Link>
                    </Text>
                </Right>
            );
        }

        return result;
    };
    return (
        <Container>
            <Left>
                <LogoImg src={logo} />
                <Logo>
                    <Link
                        to={"/"}
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        날무리
                    </Link>
                </Logo>
            </Left>
            {renderRight()}
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
    cursor: pointer;
`;
