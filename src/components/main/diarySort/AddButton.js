import styled from "styled-components";
import plusIcon from "../../../assets/imgs/plusIcon.png";
import { Link } from "react-router-dom";

const AddButton = () => {
    return (
        <Link
            to={"/writediary"}
            style={{ color: "black", textDecoration: "none" }}
        >
            <Button>
                <PlusIcon src={plusIcon}></PlusIcon>
            </Button>
        </Link>
    );
};

const Button = styled.button`
    position: sticky;
    left: 1313px;
    bottom: 80px;

    border: 4px solid #a7d8ff;
    border-radius: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;

    height: 70px;
    width: 70px;

    cursor: pointer;
`;

const PlusIcon = styled.img`
    height: 50px;
    widght: 50px;
`;

export default AddButton;
