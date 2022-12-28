import styled from "styled-components";

const Diary = () => {
    return (
        <Container>
            <Line></Line>
            <Text>일기 내용</Text>
            <Line></Line>
        </Container>
    );
};

export default Diary;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const Line = styled.div`
    height: 1px;
    width: 100%;
    background-color: #a7d8ff;
`;
const Text = styled.div`
    width: 100%;
    height: 448px;
    text-align: left;
    vertical-align: top;
    font-size: 18px;
    padding: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    white-space: normal;
`;
