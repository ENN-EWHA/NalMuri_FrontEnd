import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const DeleteButton = ({ data }) => {
    const onClickDelete = () => {
        axios
            .delete("/board", {
                data: {
                    userid: data.userid,
                    writeDate: data.writeDate,
                },
            })
            .then(() => {
                console.log("삭제 성공");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
            <Button onClick={onClickDelete}>
                <Text>삭제하기</Text>
            </Button>
        </Link>
    );
};

export default DeleteButton;

const Button = styled.button`
    border: none;
    border-radius: 6px;
    height: 55px;
    width: 151px;
    background-color: #f1f3f5;
    margin-top: 10px;
    cursor: pointer;
`;
const Text = styled.div`
    text-align: center;
    vertical-align: middle;
    line-height: auto;
    color: #000000;
`;
