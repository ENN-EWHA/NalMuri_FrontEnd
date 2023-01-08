import styled from "styled-components";
import DeleteButton from "./DeleteButton";
import Diary from "./Diary";
import QuestionAnswer from "./QuestionAnswer";
import QuestionCard from "./QuestionCard";

const ViewDiary = ({ data, currentCard }) => {
    return (
        <Container>
            <Date>{data.writeDate}</Date>
            <Title>오늘의 일기</Title>
            <Contents>
                <Left>
                    <Diary diary={data.diary} />
                </Left>
                <Right>
                    <QuestionCard card={currentCard.cardquestion} />
                    <QuestionAnswer answer={currentCard.cardAnswer} />
                </Right>
            </Contents>
            <Buttons>
                <DeleteButton data={data} />
            </Buttons>
        </Container>
    );
};

export default ViewDiary;

const Container = styled.div`
    width: 995px;
    justify-content: center;
    margin-top: 50px;
`;
const Date = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 20px;
    padding: 10px 0;
`;
const Title = styled(Date)`
    padding-bottom: 15px;
    font-weight: bold;
    font-size: 30px;
`;
const Contents = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;
const Left = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Right = styled(Left)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;
