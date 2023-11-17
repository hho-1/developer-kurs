import styled from "styled-components"

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 1rem auto;
    padding: 1rem;
    background-color: ${({bg}) => bg || "beige" };
`;

export default FlexDiv;