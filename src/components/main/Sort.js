import React, { useState } from "react";
import styled from "styled-components";
import Emotion from "./emotionSort/Emotion";
import AddButton from "./dateSort/AddButton";
import Diaries from "./dateSort/Diaries";

const Sort = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const menuArray = [
        {
            name: "날짜 순으로 보기",
            content: (
                <>
                    <Diaries />
                    <AddButton />
                </>
            ),
        },
        { name: "감정별 모아보기", content: <Emotion /> },
    ];

    const MenuHandler = (index) => {
        setCurrentTab(index);
    };

    return (
        <>
            <Container>
                {menuArray.map((element, index) => {
                    return (
                        <Sortmenu
                            key={index}
                            border={
                                currentTab === index
                                    ? "2px solid #212529"
                                    : "none"
                            }
                            onClick={() => MenuHandler(index)}
                        >
                            {element.name}
                        </Sortmenu>
                    );
                })}
            </Container>
            <Content>{menuArray[currentTab].content}</Content>
        </>
    );
};

export default Sort;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 55px;
    margin: 30px 0;
`;
const Sortmenu = styled.div`
    width: 150px;
    border-bottom: ${(props) => props.border};
    display: flex;
    justify-content: center;
    padding: 10px 0;
    cursor: pointer;
`;

const Content = styled.div`
    height: 100%;
    width: 100%;
`;
