import styled from "styled-components";

const Sort = () => {
    return (
        <Container>
            <Date>날짜 순으로 보기</Date>
            <Emotion>감정별 모아보기</Emotion>
            <QuestonCard>질문 카드 모아보기</QuestonCard>
        </Container>
    );
};

export default Sort;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 55px;
    margin: 30px 0;
`;
const Date = styled.div`
    width: 150px;
    border-bottom: 2px solid #212529;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    cursor: pointer;
`;
const Emotion = styled(Date)`
    border: none;
`;
const QuestonCard = styled(Date)`
    border: none;
`;
