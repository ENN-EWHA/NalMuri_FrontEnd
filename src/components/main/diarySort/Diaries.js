import styled from "styled-components";
import Diary from "./Diary";
import First from "./First";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Axios from "../../../Axios";

const Diaries = () => {
    const [data, setData] = useState([]);

    const uid = useSelector((state) => state.auth.userData.userid);
    const [userid, setUserid] = useState("");

    //axios
    useEffect(() => {
        setUserid(uid);
        if (userid) {
            Axios.get(`/board/${userid}`)
                .then((res) => {
                    setData(res.data);
                })
                .catch((error) => console.log(error));
        }
    }, [uid, userid]);

    const renderDiary = (data) => {
        const result = [];
        if (data.length == 0) {
            result.push(<First />);
        } else {
            data.map((data) => result.push(<Diary data={data} />));
        }
        return result;
    };

    return <Container>{renderDiary(data)}</Container>;
};

export default Diaries;

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    padding-top: 20px;
    gap: 20px;
    flex-wrap: wrap;
`;
