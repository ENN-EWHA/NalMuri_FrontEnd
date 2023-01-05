import styled from "styled-components";
import githubIcon from "../assets/imgs/githubIcon.png";
import notionIcon from "../assets/imgs/notionIcon.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Container>
            <Right>
                <LogoImg src={githubIcon}>
                    <Link
                        to={"/signup"}
                        style={{ color: "black", textDecoration: "none" }}
                    ></Link>
                </LogoImg>
                <LogoImg src={notionIcon}>
                    <Link
                        to={"/login"}
                        style={{ color: "black", textDecoration: "none" }}
                    ></Link>
                </LogoImg>
            </Right>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    width: 82.7vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 23px auto;
`;

const LogoImg = styled.img`
    height: 25px;
    width: 25px;
`;

const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 102px;
`;
