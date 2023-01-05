import Header from "../components/Header";
import ViewDiary from "../components/viewDiary/ViewDiary";
import styled from "styled-components";

const ViewDiaryPage = () => {
    return (
        <Container>
            <Header />
            <ViewDiary />
        </Container>
    );
};

export default ViewDiaryPage;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;