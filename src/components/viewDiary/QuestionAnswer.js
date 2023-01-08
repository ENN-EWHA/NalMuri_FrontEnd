import styled from "styled-components";

const QuestionAnswer = ({ answer }) => {
    return (
        <Answer>
            <Text>{answer != "null" ? answer : ""}</Text>
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
