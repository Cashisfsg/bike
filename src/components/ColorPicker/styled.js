import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50%;
    width: 34px;
    height: 34px;
    border: 2px white solid;

    background: ${({ color }) => (color ? color : "#282828")};
    box-shadow: 0px 0px 0px 2px ${({ active }) => (active ? "#B5B5B5" : "#282828")};
`;