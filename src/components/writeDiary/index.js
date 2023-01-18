
import React, { useState, useRef,useEffect} from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import axios from "axios";

const Write=()=>{


    const getStringDate = (date) => {
        return date.toISOString().slice(0, 10);
      };

    const userid = useSelector((id) => id.auth.userData.userid);

    // const[userid,setUserid]=useState("");
    const[writeDate, setDate] = useState("");
    const[title, setTitle] = useState("");
    const[diary,setContent]=useState("");

    
        
    const[state,setState]=useState({
        
        // userid:data.props.id,
        writeDate:"",
        userid,
        diary:"",
    });

    const handleChangeState=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    };
 
    useEffect(() => {
        axios
            .get("./board/cu"
                
            )
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSubmit=(e)=>{
 
      
        // setUserid(uid);
      
        axios(
            {
                method: "POST",
                url: "http://34.64.209.5:5000/api",
                data: JSON.stringify({
                    sentence: state.diary,
                }),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            },
            { withCredentials: true }
        )
            .then((Response) => {
                console.log(Response.data);
            })
            .catch((Error) => {
                console.log(Error);
            });

            axios
            .post("./board",state)
            .then((res)=>{
                console.log(res);
            })
            .catch((error)=>{
                console.log(error);
            })
        
        console.log(state);
        alert("저장");
        
    };
  
    // useEffect(() => {
    //     axios(
    //         {
    //             method: "POST",
    //             url: "http://34.64.209.5:5000/api",
    //             data: JSON.stringify({
    //                 sentence: "너무신나",
    //             }),
    //             headers: {
    //                 "Content-Type": "application/json; charset=utf-8",
    //             },
    //         },
    //         { withCredentials: true }
    //     )
    //         .then((Response) => {
    //             console.log(Response.data);
    //         })
    //         .catch((Error) => {
    //             console.log(Error);
    //         });
    // });
    const titleInput=useRef();
    const contentInput=useRef();
 
 
    
    return(
        <Container>
            <Content>
                
     
                    <Datediv>
                        <Date
                        value={state.writeDate}
                        onChange={handleChangeState}
                        name="writeDate"
                        type="date"/>
                    </Datediv>
          
            
              
                    {/* <InputText
                    ref={titleInput}
                    value={state.userid}
                    onChange={handleChangeState}
                    name="userid"
                    placeholder="제목"
                    type="text"/>
         */}
                    <Editor
                        ref={contentInput}
                        value={state.diary}
                        onChange={handleChangeState}
                        name="diary"
                        placeholder="내용입력"
                        type="text"/>
                    

                    <Menu>
                    <BtnLink to="/writequestion">                   
                        <BtnName type="button" onClick={handleSubmit}>저장</BtnName>
                    </BtnLink>
                    </Menu>
                    
            
            </Content>
        </Container>
    )

  
}
export default Write;


const Container = styled.div`
    height: 2000px;
    width: 100%;
    margin: auto;
`;
const Content = styled.div`
    width: 70%;
    
    margin: auto;
`;
const Editor = styled.input`
    height: 600px;
    overflow: scroll;
    border: 1px solid;
    width:100%;
    margin: auto;
    align-item:center;
  
`;
const Date=styled.input`
border:1px solid;
border-radius:5px;
    
`;
const Datediv=styled.div`
padding-top:50px;
display:flex;
`;
const Dater=styled.input`

border: 1px solid white;
`;
const InputText = styled.input`
    position: relative;
    height: 60px;
    width: 70%;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    border: transparent;
    border-bottom: 2px solid #a7d8ff;
`;

const BtnLink = styled(LinkR)`
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
const BtnName = styled.div`
    font-size: 20px;
    color: black;
    text-align: center;
`;
const Menu = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top:20px;
`;
const Link = styled(LinkR)``;