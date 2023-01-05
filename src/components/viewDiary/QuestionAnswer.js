import styled from "styled-components";

const QuestionAnswer = () => {
    return (
        <Answer>
            <Text>질문 카드 대답</Text>
        </Answer>
    );
};

export default QuestionAnswer;

const Answer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    background-color: #edf4ff;
`;
const Text = styled.div`
    width: 100%;
    height: 100%;
    text-align: left;
    vertical-align: top;
    font-size: 18px;
    padding: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    white-space: normal;
`;