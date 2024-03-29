import styled from "styled-components";
import { Link } from "react-router-dom";
import Axios from "../../../Axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Diary = ({ data }) => {
    const colorList = useSelector((state) => state.color.colorList);
    const [carddata, setCarddata] = useState("");
    const [userId, setUserId] = useState("");
    const uid = useSelector((state) => state.auth.userData.userid);
    let currentCard = "";

    //question card 정보
    useEffect(() => {
        setUserId(uid);

        Axios.get(`/board/question/${uid}`)
            .then((res) => {
                setCarddata(res.data);
            })
            .catch((error) => console.log(error));
    }, [uid, userId]);

    //현재 card 정보
    if (data.cardid != -1) {
        try {
            carddata.map((it) => {
                if (it.cardid == data.cardid) {
                    currentCard = it;
                    return;
                }
            });
        } catch (err) {
            currentCard = carddata;
        }
    }

    return (
        <Link
            to="viewDiary"
            state={{ data: data, currentCard: currentCard }}
            style={{ color: "black", textDecoration: "none" }}
        >
            <Container>
                <Color
                    color={
                        currentCard.emotion + 1
                            ? colorList[currentCard.emotion].color
                            : "#EBEBEB"
                    }
                ></Color>
                <Contents>
                    <Date>{data.writeDate}</Date>
                    <Title>{data.diary}</Title>
                </Contents>
            </Container>
        </Link>
    );
};

export default Diary;
const Container = styled.div`
    border-radius: 10px;
    height: 226px;
    width: 249px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Color = styled.div`
    border-radius: 10px 10px 0px 0px;
    height: 105px;
    width: 100%;
    background-color: ${(props) => props.color};
    filter: blur(4px);
`;
const Contents = styled.div`
    padding: 10px;
`;
const Date = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 16px;
    padding-top: 10px;
`;
const Title = styled(Date)`
    font-size: 14px;
    padding-bottom: 10px;
`;
