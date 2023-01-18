import styled from "styled-components";

const Card = ({ color, data, length }) => {
    const cardDeck = (length) => {
        const result = [];
        if (length >= 2) {
            result.push(
                <CardNext
                    color={color.light2Color}
                    bottom={"-9px"}
                    z={-1}
                ></CardNext>
            );

            if (length >= 3) {
                result.push(
                    <CardNext
                        color={color.light3Color}
                        bottom={"-18px"}
                        z={-2}
                    ></CardNext>
                );
            }

            if (length >= 4) {
                result.push(
                    <CardNext
                        color={color.color}
                        bottom={"-24px"}
                        z={-3}
                    ></CardNext>
                );
            }
        }
        return result;
    };
    return (
        <Container>
            <CardTop color={color.lightColor}>
                {data}
                {cardDeck(length)}
            </CardTop>
        </Container>
    );
};

export default Card;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const CardTop = styled.div`
    width: 200px;
    height: 315px;
    background-color: ${(props) => props.color};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: 18px;
    position: relative;
`;
const CardNext = styled.div`
    height: 24px;
    width: 200px;
    background-color: ${(props) => props.color};
    border-radius: 0px 0px 10px 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    left: 0;
    bottom: ${(props) => props.bottom};
    z-index: ${(props) => props.z};
`;
