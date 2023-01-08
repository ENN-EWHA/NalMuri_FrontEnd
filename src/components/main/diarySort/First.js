import styled from "styled-components";
import { Link } from "react-router-dom";

const First = () => {
    return (
        <Container>
            <Text>일기를 작성하고 첫 날무리를 시작해 보세요</Text>
            <Link
                to={"/writediary"}
                style={{ color: "black", textDecoration: "none" }}
            >
                <Button>일기 작성하기</Button>
            </Link>
        </Container>
    );
};

export default First;

const Container = styled.div`
    padding: 100px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`;
const Text = styled.div`
    text-align: center;
    vertical-align: top;
    font-size: 30px;
    line-height: auto;
    color: #b1b0ae;
`;
const Button = styled.button`
    border: none;
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 160px;
    background-color: #edf4ff;

    cursor: pointer;
`;
