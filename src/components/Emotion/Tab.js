import React,{useState} from 'react';
import styled from 'styled-components';
import Test from './Test';


export function Tab(){
    const [currentTab,setCurrentTab] = useState(0)

    const menuArray=[
        {name:'날짜 순으로 보기', content: <Test />},
        {name:'감정별 모아보기', content:<Test />},
        {name:'질문 카드 모아보기',content:'질문카드 모두 모아보기'},
        //{name:'친구 관리',content: '친구관리'}
    ];
    
    const MenuHandler = (index)=>{
        setCurrentTab(index)
    };
    return(
        <>
        <div>
        <TabMenu>
        {menuArray.map((element,index)=>{
            return(
                <li key={index}
                className = {currentTab===index ? 'submenu focused':'submenu'}
                onClick = {()=>MenuHandler(index)}>
                {element.name}
                </li>
            );
        })}
        </TabMenu>
        <Desc>
        
            <Content>{menuArray[currentTab].content}</Content>
        </Desc>
        </div>
        </>
    );
};

const TabMenu = styled.ul`
  background-color: transparent;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  width: 50%;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 10px;
  .submenu {
    width: 100%;
    padding: 15px 10px;
    cursor: pointer;
  }
  .focused {
    background-color: white;
    color: black;
    transition: 0.3s;
  }
  & div.desc {
    text-align: center;
  }
`;

// Styled-Component로 Desc 컴포넌트의 CSS 구현
const Desc = styled.div`
  text-align: center;
  height: 1000px;
  background:whitesmoke;

`;

const Content=styled.div`
height:100%;
width:100%;
`;