import styled from "styled-components"

export const Button = styled.button`
    /* background-color: darksalmon;
    color: darkblue; */
    background-color: ${(props) => (props.primary ? "teal" : "white")};
    color: ${({primary}) => (primary ? "white" : "teal")};
    width: 8rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 2px solid teal;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.1rem;
    margin: 0 1rem;
    &:hover{
        transform: scale(0.95);
        cursor: pointer;
    }
`;


export const DarkButton = styled(Button)`
    background-color: darkblue;
    color: aliceblue;
    border: none;
`