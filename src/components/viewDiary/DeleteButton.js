import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const DeleteButton = () => {
    const onClickDelete = () => {};
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
`;
const Text = styled.div`
    text-align: center;
    vertical-align: middle;
    line-height: auto;
    color: #000000;
`;
