import React,{useState, useRef,useEffect} from 'react'
import styled from "styled-components";
import axios from 'axios';
import { Link as LinkR } from "react-router-dom";
import Header from '../Header.js';
import { useSelector } from 'react-redux';
const WriteQuestion=()=>{
    // const [answer,setAnswer]=useState({
    //     date:'new Date(date).getTime()',
    //     answer:''

    // })
    // const getValue=e=>{
    //     const {name, value}=e.target;
    //     setAnswer({
    //         ...answer,
    //         [name]:value
    //     })
    //     console.log(answer);
    // }

    // useEffect(() => {
    //     axios
    //     .get("/board/card",{// 질문카드 어케 받아와요
    //         userid:'',
    //         answer:''
    //     })
    //         .then((response) => console.log(response.data))
    //         .catch((error) => console.log(error));
    // }, []);


    const getStringDate=(date)=>{
        return date.toISOString().slice(0,10);
    };

    const[writeDate, setDate]=useState("");
    const[cardAnswer,setCardAnswer]=useState("");
    const userid = useSelector((id) => id.auth.userData.userid);
    const[cardquestion,setCardQuestion]=useState([]);
  
    
    useEffect(() => {
        axios
            .get("./board/card/request/4"
            )
            .then((response) => {
               
                setCardQuestion(response.data);
               
                
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

        
    // useEffect(() => {
    //     axios
    //         .get("./board/question/cu/list/5"
    //         )
    //         .then((response) => {
    //             console.log(response.data);
                
                
                
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    const[state,setState]=useState({
        userid,
        writeDate:"",
        cardAnswer:"",
        

    });

       const handleChangeState=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
      
    };
    const handleSubmit=(e)=>{
          
        axios
        .post("./board/card",state)
        .then((res)=>{
            console.log(res);
        })
        .catch((error)=>{
            console.log(error);
        })
        console.log(state);
        alert("저장");
    };

    const answerInput=useRef();

    return(
        <Container>
            <Datediv>
                    <Date
                        value={state.writeDate}
                        onChange={handleChangeState}
                        name="writeDate"
                        type="date"/>
                    </Datediv>
         
           <Answeringcontainer>
                <QuestionCont>
                    <div>{cardquestion.cardquestion}</div>
      
                   
                </QuestionCont>
                


                
                <AnswerCont
                ref={answerInput}
                 value={state.cardAnswer}
                        onChange={handleChangeState}
                        name="cardAnswer"
                        type="text"
                        placeholder="떠오르는 대답을 입력하세요"/>

            </Answeringcontainer>
            <ButtonDiv>
                <Button1>
                <BtnLink to="/writequestion">
                        <BtnName type="button" onClick={handleSubmit}>저장</BtnName>
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
margin-top:50px;
width:60%;
display: flex;
justify-content:space-between;
`;
const Date=styled.input`
border:1px solid;
border-radius:5px;
    
`;
const Datediv=styled.div`
padding-top:50px;
display:flex;
justify-content:center;
`;
const QuestionCont=styled.div`
height:70%;
width:500px;
display:flex;
flex-direction:column;
justify-content:center;
padding: 0 20px 0px 20px;
border: 1px solid black;
background:radial-gradient(circle, rgba(158,203,255,1) 11%, rgba(221,234,249,1) 35%, rgba(158,203,255,1) 100%);
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