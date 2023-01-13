import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Emotion = () => {
    const colorList = useSelector((state) => state.color.colorList);

    const [emonum, setEmonum] = useState();
    const [isClicked, setIsClicked] = useState(false);
    const [emocard, setEmocard] = useState([]);
    const uid = useSelector((state) => state.auth.userData.userid);
    const [userId, setUserId] = useState(uid);
    const [result, setResult] = useState([]);

    useEffect(() => {
        setUserId(uid);
    }, [uid, userId]);
    useEffect(() => {
        if (userId) {
            axios
                .get(`./board/question/${userId}/list/${emonum}`)
                .then((res) => {
                    setEmocard(res.data);
                })
                .catch((err) => {
                    setEmocard([]);
                    console.log(err);
                });
        }
    }, [emonum]);
    useEffect(() => {
        if (isClicked) {
            if (emocard.length === 0) {
                alert("해당 감정의 질문 카드가 없습니다.");
                setIsClicked(false);
                setEmonum(-1);
            } else {
                setResult(
                    emocard.map((it) => {
                        return (
                            <Button
                                onClick={() => {
                                    setIsClicked(false);
                                    setEmonum(-1);
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
            }
        }
    }, [emocard]);
    useEffect(() => {
        if (!isClicked) {
            setResult(
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
    }, [isClicked]);

    return <Container>{result}</Container>;
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
