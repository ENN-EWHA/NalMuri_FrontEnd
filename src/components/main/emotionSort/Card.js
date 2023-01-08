import styled from "styled-components";

const Card = ({ color, data }) => {
    return <CardTemplate color={color}>{data}</CardTemplate>;
};

export default Card;

const CardTemplate = styled.div`
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
`;
