import styled from "styled-components";
import DeleteButton from "./DeleteButton";
import Diary from "./Diary";
import QuestionAnswer from "./QuestionAnswer";
import QuestionCard from "./QuestionCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ViewDiary = (data) => {
    const uid = useSelector((state) => state.auth.userData.userid);
    const [userid, setUserid] = useState("");
    const [carddata, setCarddata] = useState("");
    let cardInfo = "";

    console.log(data.data);

    //question card 정보
    useEffect(() => {
        setUserid(uid);

        axios
            .get(`/board/question/${userid}`)
            .then((res) => {
                setCarddata(res.data);
            })
            .catch((error) => console.log(error));
    }, [uid, userid]);

    //현재 card 정보
    if (data.data.cardid != -1) {
        try {
            carddata.map((it) => {
                if (it.cardid == data.data.cardid) {
                    cardInfo = it;
                    return;
                }
            });
        } catch (err) {
            cardInfo = carddata;
        }
    }

    return (
        <Container>
            <Date>{data.data.writeDate}</Date>
            <Title>오늘의 일기</Title>
            <Contents>
                <Left>
                    <Diary diary={data.data.diary} />
                </Left>
                <Right>
                    <QuestionCard card={cardInfo.cardquestion} />
                    <QuestionAnswer answer={cardInfo.cardAnswer} />
                </Right>
            </Contents>
            <Buttons>
                <DeleteButton />
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
