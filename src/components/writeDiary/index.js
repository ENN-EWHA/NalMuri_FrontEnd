import React,{useState} from 'react'
import styled from "styled-components";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link as LinkR } from "react-router-dom";

import Header from '../Header';


const Write=()=>{
    const [value,setValue]=useState({writeDiary:''});
    const [date, setDate]=useState('');
    const [diary,setDiary]=useState({
        date:'new Date(date).getTime()',
        title:'',
        content:''

    })
    const getValue=e=>{
        const {name, value}=e.target;
        setDiary({
            ...diary,
            [name]:value
        })
        console.log(diary);
    }

   
    return(
       
        <Container>
            <Content>
                <InputText type="text" placeholder="제목" onChange={getValue} name='title'/>
                {/* <button name= "calendar">
                    <div className="calendar">
                        <Calendar value={date} onChange={setDate}/>

                    </div>
                </button> */}
                
                   </Content>
              
                <Editor>
                    <Editorr theme="snow" value={value} onChange={()=>{
                        const data = Editor.getValue();
                        console.log({Editor,data});
                        setDiary({
                            ...diary,
                            content:data
                        })
                        console.log(diary);
                    }} name='content'/>
                </Editor>
         
            <Menu>
              
                <TempSave type="submit" value="임시저장">
                    <BtnLink to="./WriteQuestion">
                        <BtnName>임시저장</BtnName>
                    </BtnLink>
                </TempSave>
             
                 <TempSave>
                 <BtnLink to="./WriteQuestion">
                    <BtnName>저장 후 질문카드 생성</BtnName>
                </BtnLink>
                </TempSave>
              
            </Menu>
        </Container>
    )
}

export default Write;



const Container=styled.div`
height: 2000px;
width: 100%;
margin:auto;
`;
const Content=styled.div`
width: 70%;
margin: auto;
`;
const Editor=styled.div`
height:600px;
overflow:scroll;
border:1px solid;
width:70%;
margin:auto;
`;
const InputText=styled.input`
position:relative;
height: 60px;
width:70%;
margin:auto;
margin-bottom:20px;
margin-top:20px;
border: transparent;
border-bottom: 2px solid black;
`;
const Editorr=styled(ReactQuill)`
height: 100%;

`;
const TempSave=styled.button`

display:flex;
justify-content:flex-end;
margin-top:20px;

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
const Menu=styled.div`
width:100%;
display:flex;
justify-content:flex-end;

`;
const Link=styled(LinkR)`

`;
