import styled from "styled-components";

const QuestionCard = () => {
    return (
        <Card>
            <Question>질문?</Question>
        </Card>
    );
};

export default QuestionCard;

const Card = styled.div`
    width: 100%;
    height: 259px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Question = styled.div``;
