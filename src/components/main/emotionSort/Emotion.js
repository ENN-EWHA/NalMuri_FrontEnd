import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Emotion = () => {
    const colorList = useSelector((state) => state.color.colorList);

    let emoNum = 0;
    const [isClicked, setIsClicked] = useState(false);
    const [emocard, setEmocard] = useState("");
    const uid = useSelector((state) => state.auth.userData.userid);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        setUserId(uid);

        if (userId) {
            axios
                .get(`/board/question/${userId}/list/${emoNum}`)
                .then((res) => {
                    setEmocard(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [uid, userId, emoNum]);

    const render = () => {
        const result = [];
        if (isClicked) {
            try {
                result.push(
                    emocard.map((it) => {
                        return (
                            <Card
                                color={colorList[emoNum].lightColor}
                                data={it.cardquestion}
                                onMouseDown={() => {
                                    setIsClicked(false);
                                }}
                            />
                        );
                    })
                );
            } catch (err) {
                result.push();
            }
        } else {
            result.push(
                colorList.map((it) => {
                    return (
                        <Card
                            color={it.lightColor}
                            onMouseDown={(e) => {
                                e.preventDefault();
                            }}
                            onClick={() => {
                                emoNum = colorList.indexOf(it);
                                setIsClicked(true);
                            }}
                            data={it.emotion}
                        />
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
