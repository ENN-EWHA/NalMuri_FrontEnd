import styled from "styled-components";
import First from "./First";
import Slide from "./Slide";
import Sort from "./Sort";
import Diary from "./Diary";

const MainAfterLogin = () => {
    return (
        <Container>
            <Slide />
            <Sort />
            <First />
            <Diary />
        </Container>
    );
};

export default MainAfterLogin;

const Container = styled.div`
    width: 1119px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
