import styled from 'styled-components';
import React from "react";
import {Tab} from '../Emotion/Tab';


const EmotionCard=()=>{
    return(
        <Container>
         
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

margin:auto;
`;

const Select=styled.div`
height: 1000px;

`;
