import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Axios from "../../../Axios";

const Emotion = () => {
    const colorList = useSelector((state) => state.color.colorList);

    const [emonum, setEmonum] = useState();
    const [isClicked, setIsClicked] = useState(false);
    const uid = useSelector((state) => state.auth.userData.userid);
    const [userId, setUserId] = useState(uid);
    const [cardDeck, setCardDeck] = useState([]);
    const [emocard, setEmocard] = useState([]);
    const emocardArray = [];

    useEffect(() => {
        setUserId(uid);
        for (let i = 0; i < 7; i++) {
            if (userId) {
                Axios.get(`./board/question/${userId}/list/${i}`)
                    .then((res) => {
                        emocardArray[i] = res.data;
                        if (i === 6) {
                            setEmocard(emocardArray);
                        }
                    })
                    .catch((err) => {
                        emocardArray[i] = [];
                        if (i === 6) {
                            setEmocard(emocardArray);
                        }
                        console.log(err);
                    });
            }
        }
    }, [uid, userId]);
    useEffect(() => {
        if (emocard.length === 7) {
            const result = [];
            result.push(
                colorList.map((it) => {
                    const len = emocard[colorList.indexOf(it)].length;
                    if (len >= 1) {
                        return (
                            <Button
                                onClick={() => {
                                    setEmonum(colorList.indexOf(it));
                                    setIsClicked(true);
                                }}
                            >
                                <Card
                                    color={it}
                                    data={it.emotion}
                                    length={len}
                                />
                            </Button>
                        );
                    }
                })
            );
            setCardDeck(result);
        }
    }, [emocard]);
    const render = () => {
        const result = [];
        if (isClicked) {
            result.push(
                emocard[emonum].map((it) => {
                    return (
                        <Button
                            onClick={() => {
                                setIsClicked(false);
                            }}
                        >
                            <Card
                                color={colorList[emonum]}
                                data={it.cardquestion}
                            />
                        </Button>
                    );
                })
            );
        } else {
            return cardDeck;
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
