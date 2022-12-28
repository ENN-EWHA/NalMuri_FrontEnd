import Header from "../components/Header";
import MainAfterLogin from "../components/main/MainAfterLogin";
import styled from "styled-components";
import AddButton from "../components/main/AddButton";

const MainAfterLoginPage = () => {
    return (
        <Container>
            <Header></Header>
            <MainAfterLogin></MainAfterLogin>
            <AddButton></AddButton>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default MainAfterLoginPage;
