import styled from "styled-components";
import { Link } from "react-router-dom";

const Diary = (data) => {
    return (
        <Link
            to="viewDiary"
            state={{ data: data.props }}
            style={{ color: "black", textDecoration: "none" }}
        >
            <Container>
                <Color></Color>
                <Contents>
                    <Date>{data.props.writeDate}</Date>
                    <Title>{data.props.diary}</Title>
                    <Tag>기쁨</Tag>
                </Contents>
            </Container>
        </Link>
    );
};

export default Diary;
const Container = styled.div`
    border-radius: 10px;
    height: 226px;
    width: 249px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Color = styled.div`
    border-radius: 10px 10px 0px 0px;
    height: 105px;
    width: 100%;
    background-color: #ffe880;
    filter: blur(4px);
`;
const Contents = styled.div`
    padding: 10px;
`;
const Date = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 16px;
    padding-top: 10px;
`;
const Title = styled(Date)`
    font-size: 14px;
    padding-bottom: 10px;
`;
const Tag = styled.div`
    border-radius: 16px;
    height: 15px;
    width: 77px;
    background-color: #d7edff;

    text-align: center;
    vertical-align: middle;
    font-size: 12px;
`;
