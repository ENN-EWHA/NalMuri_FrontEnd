import Header from "../components/Header";
import ViewDiary from "../components/viewDiary/ViewDiary";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const ViewDiaryPage = () => {
    let location = useLocation();
    const data = location.state.data;
    const currentCard = location.state.currentCard;

    return (
        <Container>
            <Header />
            <ViewDiary data={data} currentCard={currentCard} />
            <Footer />
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
