import styled from "styled-components";

const QuestionCard = ({ card }) => {
    return (
        <Card>
            <Question>{card.cardquestion}</Question>
            </Card>
       
    );
};

export default QuestionCard;

const Card = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #edf4ff;
`;

const Question = styled.div`
    filter: none;
`;
