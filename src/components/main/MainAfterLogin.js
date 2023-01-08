import styled from "styled-components";
import Slide from "./Slide";
import Sort from "./Sort";

const MainAfterLogin = () => {
    return (
        <Container>
            <Slide />
            <Sort />
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
