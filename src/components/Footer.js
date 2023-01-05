import styled from "styled-components";
import githubIcon from "../assets/imgs/githubIcon.png";
import notionIcon from "../assets/imgs/notionIcon.png";

const Footer = () => {
    return (
        <Container>
            <Right>
                <a href="https://github.com/orgs/ENN-EWHA/repositories">
                    <LogoImg src={githubIcon} />
                </a>

                <a href="https://simple-cartoon-617.notion.site/b1f1cd83629a4c89bfa2c16267c8421c">
                    <LogoImg src={notionIcon} />
                </a>
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
    padding: 50px 0;
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
