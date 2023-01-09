import styled from "styled-components";
import { useSelector } from "react-redux";

const QuestionCard = ({ card }) => {
    const colorList = useSelector((state) => state.color.colorList);

    return (
        <Card color={colorList[card.emotion].lightColor}>
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
    border: 2px solid ${(props) => props.color};
`;

const Question = styled.div`
    filter: none;
`;
