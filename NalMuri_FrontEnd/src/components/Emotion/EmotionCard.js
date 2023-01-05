import styled from 'styled-components';
import React from "react";
import {Tab} from '../Emotion/Tab';
import Header from '../Header';

const EmotionCard=()=>{
    return(
        <Container>
          
            <Wordcloud>
                <h1>워드클라우드 불러오기</h1>
            </Wordcloud>
            <Select>
                <Tab />
            </Select>

        </Container>
    )
}
export default EmotionCard;


const Container=styled.div`
background:white;
height:1000px;
width: 80%;
margin:auto;
`;
const Wordcloud=styled.div`
background: #A7D8FF;
height:30%;
width: 80%;
display:flex;
font-weight:bold;
justify-content: center;
border:1px solid black;
border-radius: 5px;
margin:auto;
`;
const Select=styled.div`
height: 1000px;
`;
