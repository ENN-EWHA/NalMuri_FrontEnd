import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Emotion = () => {
    const colorList = useSelector((state) => state.color.colorList);

    const [emonum, setEmonum] = useState("");
    const [isClicked, setIsClicked] = useState(false);
    const [emocard, setEmocard] = useState("");
    const uid = useSelector((state) => state.auth.userData.userid);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        setUserId(uid);

        if (userId) {
            axios
                .get(`/board/question/${userId}/list/${emonum}`)
                .then((res) => {
                    setEmocard(res.data);
                })
                .catch((err) => {
                    console.log(err);
                    setEmocard(0);
                });
        }
    }, [uid, userId, emonum]);

    const render = () => {
        const result = [];
        if (isClicked) {
            if (emocard) {
                result.push(
                    emocard.map((it) => {
                        return (
                            <Button
                                onClick={() => {
                                    setIsClicked(false);
                                }}
                            >
                                <Card
                                    color={colorList[emonum].lightColor}
                                    data={it.cardquestion}
                                />
                            </Button>
                        );
                    })
                );
            } else {
                result.push();
                alert("해당 감정의 질문 카드가 없습니다.");
                setIsClicked(false);
            }
        } else {
            result.push(
                colorList.map((it) => {
                    return (
                        <Button
                            onClick={() => {
                                setEmonum(colorList.indexOf(it));
                                setIsClicked(true);
                            }}
                        >
                            <Card color={it.lightColor} data={it.emotion} />
                        </Button>
                    );
                })
            );
        }

        return result;
    };

    return <Container>{render()}</Container>;
};
export default Emotion;

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 20px;

    flex-wrap: wrap;
`;
const Button = styled.button`
    border: none;
    background-color: transparent;
`;
