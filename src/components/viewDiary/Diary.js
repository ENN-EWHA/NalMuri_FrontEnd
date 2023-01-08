import styled from "styled-components";

const Diary = ({ diary }) => {
    return (
        <Container>
            <Text>{diary}</Text>
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
    border-top: 1px solid #a7d8ff;
    border-bottom: 1px solid #a7d8ff;
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
