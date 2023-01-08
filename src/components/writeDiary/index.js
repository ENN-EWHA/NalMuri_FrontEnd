// import React, { useState } from "react";
// import styled from "styled-components";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { Link as LinkR } from "react-router-dom";

// import Header from "../Header";

// const getStringDate = (date) => {
//     return date.toISOString().slice(0, 10);
//   };

// const Write = () => {
//     const [value, setValue] = useState('');
//     const [date, setDate] = useState(getStringDate(new window.Date()));
//     const [diary, setDiary] = useState({
//         date: "",
//         title: "",
//         content: "",
//     });

// console.log(date)
// console.log(diary)
//     const getDate=(e)=>{
//         const{name, value}=e.target;
//         setDate({
//             ...date,
//             [name]:value,
//         });
//         console.log(date);
//     }
//     const getValue = (e) => {
//         const { name, value } = e.target;
//         setDiary({
//             ...diary,
//             [name]: value,
//         });
//         console.log(diary);
//     };
 
// console.log(diary)
//     return (
//         <Container>
            
//             <Content>
//             <Date>
//                 <Dater type="text" value={date} onChange={getDate}/>
//             </Date>
                
//                 <InputText
//                     type="text"
//                     placeholder="제목"
//                     onChange={getValue}
//                     name="title"
//                 />
//                 {/* <button name= "calendar">
//                     <div className="calendar">
//                         <Calendar value={date} onChange={setDate}/>

//                     </div>
//                 </button> */}
                
//                    </Content>
              
//                 <Editor>
//                     <Editorr theme="snow" value={value} onChange={()=>{
//                         const data = Editor.getValue();
//                         console.log({ Editor, data });
//                         setDiary({
//                             ...diary,
//                             content: data,
//                         });
//                         console.log(diary);
//                     }}
//                     name="content"
//                 />
//             </Editor>

//             <Menu>
//                 <TempSave>
//                     <BtnLink to="./WriteQuestion">
//                         <BtnName type="submit">저장 후 질문카드 생성</BtnName>
//                     </BtnLink>
//                 </TempSave>
//             </Menu>
//         </Container>
//     );
// };

// export default Write;
 



import React, { useState, useRef,useEffect} from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link as LinkR } from "react-router-dom";
import axios from "axios";

const Write=(data)=>{


    const getStringDate = (date) => {
        return date.toISOString().slice(0, 10);
      };

    const[writeDate, setDate] = useState("");
    const[userid, setTitle] = useState("");
    const[diary,setContent]=useState("");

    
        
    const[state,setState]=useState({
        // userid:data.props.id,
        writeDate:"",
        userid:"",
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
            .get("./board/hi"
                
            )
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSubmit=(e)=>{
    
        console.log(state);
        alert("저장");
        
        axios
        .post("./board",state)
        .then((res)=>{
            console.log(res);
        })
        .catch((error)=>{
            console.log(error);
        })
    };
  
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
          
            
              
                    <InputText
                    ref={titleInput}
                    value={state.userid}
                    onChange={handleChangeState}
                    name="userid"
                    placeholder="제목"
                    type="text"/>
        
                    <Editor
                        ref={contentInput}
                        value={state.diary}
                        onChange={handleChangeState}
                        name="diary"
                        placeholder="내용입력"
                        type="text"/>
                    

                    <Menu>
                    <BtnLink to="/WriteQuestion">                   
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