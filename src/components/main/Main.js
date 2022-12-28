import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        <Container>
            <Canvas1>
                <Left>
                    <Title>당신을 위한</Title>
                    <Title>날무리</Title>
                    <Text>
                        일기장부터 무드 트래커까지, 날무리에서 만들어가요.
                    </Text>
                    <Text>당신의 감정을 알아보는 날무리를 경험해 보세요.</Text>
                </Left>
                <Right>
                    <Img></Img>
                </Right>
            </Canvas1>
            <Canvas2>
                <Left></Left>
                <Right>
                    <Title>하루를 마무리 하는</Title>
                    <Title>나만의 질문 카드</Title>
                    <Text>
                        당신만을 위한 질문, 날무리를 지금 만들어 보세요.
                    </Text>
                    <Button>
                        <Link
                            to={"/login"}
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            날무리 만들기
                        </Link>
                    </Button>
                </Right>
            </Canvas2>
            <Canvas3>
                <Left>
                    <Title>무드 트래커부터</Title>
                    <Title>워드 클라우드까지</Title>
                    <Text>무드 트래커를 찾고 있나요?</Text>
                    <Text>워드 클라우드와 함께 체크해보세요!</Text>
                </Left>
                <Right>
                    <Img></Img>
                </Right>
            </Canvas3>
        </Container>
    );
};

export default Main;

const Container = styled.div`
    width: 100%;
    justify-content: center;
`;
const Canvas1 = styled.div`
    height: 783px;
    width: 100%;
    background-color: #edf4ff;
    display: flex;
    justify-content: center;
`;
const Canvas2 = styled(Canvas1)`
    background-color: transparent;
`;
const Canvas3 = styled(Canvas1)`
    background-color: #a7d8ff;
`;
const Left = styled.div`
    width: 526.5px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Right = styled(Left)``;
const Img = styled.img`
    width: 526.5px;
    border-radius: 10px;
    height: 333px;
`;
const Title = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 48px;
    letter-spacing: 0.4000000059604645px;
    line-height: 62.400001525878906px;
`;
const Text = styled.div`
    text-align: left;
    vertical-align: top;
    font-size: 16px;
    letter-spacing: 0.30000001192092896px;
    line-height: 24px;
`;
const Button = styled.button`
    border: none;
    border-radius: 6px;
    height: 55px;
    width: 151px;
    background-color: #f1f3f5;
    margin-top: 10px;
`;
