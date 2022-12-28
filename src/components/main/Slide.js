import styled from "styled-components";

const Slide = () => {
    return (
        <Container>
            <Title>오늘 나의 감정은?</Title>
            <Text>나만의 날무리를 만들어 보세요</Text>
        </Container>
    );
};

export default Slide;

const Container = styled.div`
    border-radius: 15px;
    height: 243px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3px;
    margin: 20px 0;
    padding: 20px;
`;
const Title = styled.div`
    text-align: left;
    font-size: 40px;
    font-weight: bold;
`;
const Text = styled.div`
    text-align: left;
    font-size: 20px;
    line-height: 24px;
`;
