import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Emotion = () => {
    return (
        <Container>
            <Card color="#FFF9D9" />
            <Card color="#FFECDC" />
            <Card color="#E7F3EA" />
            <Card color="#ECECED" />
            <Card color="#DDEAF9" />
            <Card color="#FDD7DD" />
            <Card color="#EDE8F8" />
        </Container>
    );
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
