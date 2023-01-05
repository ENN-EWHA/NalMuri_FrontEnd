import React,{useState, useEffect} from 'react'
import styled from "styled-components";
import axios from 'axios';
import { Link as LinkR } from "react-router-dom";
import Header from '../Header.js';
const WriteQuestion=()=>{
    const [answer,setAnswer]=useState({
        date:'new Date(date).getTime()',
        answer:''

    })
    const getValue=e=>{
        const {name, value}=e.target;
        setAnswer({
            ...answer,
            [name]:value
        })
        console.log(answer);
    }

    useEffect(() => {
        axios
        .get("/board/card",{// 질문카드 어케 받아와요
            userid:'',
            answer:''
        })
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error));
    }, []);

    return(
        <Container>
         
           <Answeringcontainer>
                <QuestionCont placeholder="당신이 기억하는 첫번째 크리스마스는 어떤 추억인가요?"> 


                </QuestionCont>
                <AnswerCont placeholder="질문에 답변을 남겨보세요" type="text" name="answer" onChange={getValue}>

                </AnswerCont>
            </Answeringcontainer>
            <ButtonDiv>
                <Button1>
                <BtnLink to="/">
                        <BtnName>저장하기</BtnName>
                </BtnLink>
                </Button1>
                
                <Button1>
                <BtnLink to="/EmotionCard">
                        <BtnName>공유하기</BtnName>
                </BtnLink>
                </Button1>
            </ButtonDiv>
 

        </Container>

    )
}
export default WriteQuestion;

const Container=styled.div`
margin:auto;

`;
const Answeringcontainer=styled.div`
height: 1000px;
margin:auto;
width:60%;
display: flex;
justify-content:space-between;


`;
const QuestionCont=styled.input`
height:70%;
width:500px;
align-item:wrap;
padding: 0 20px 0px 20px;
border: 1px solid black;
background-color:#DDEAF9;
`;
const AnswerCont=styled.input`
height: 70%;
width:500px;
padding: 0 20px 0px 20px;
border: 1px solid black;

`;

const BtnLink=styled(LinkR)`

background: lightgray;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: 1px;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover {
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
}
`;
const BtnName=styled.div`
font-size: 20px;
color: black;
text-align: center;
`;

const Button1=styled.button`
display:flex;
justify-content:flex-end;
margin-top:20px;

`;
const ButtonDiv=styled.div`
width:100%;
display:flex;
justify-content:flex-end;

`;

const Button2=styled.button`
display:flex;
justify-content:flex-end;
margin-top:20px;

`;
