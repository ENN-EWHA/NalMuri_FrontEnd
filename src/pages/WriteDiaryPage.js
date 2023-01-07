import Header from "../components/Header";
import Write from "../components/writeDiary";
import Footer from "../components/Footer";
import React, {useState} from 'react';
const WriteDiaryPage = () => {
    
    const[data,setData]=useState([]);
    const onCreate=(date,title,content)=>{
        const created_date=new Date().getTime();
        const newItem={
            
            title,
            content,
            date
            
        }
    }

    return (
        <>
            <Header />
            <Write onCreate={onCreate}/>
            <Footer />
        </>
    );
};

export default WriteDiaryPage;
