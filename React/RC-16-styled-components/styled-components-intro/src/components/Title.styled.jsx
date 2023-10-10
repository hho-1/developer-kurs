import styled from "styled-components"

export const Title = styled.h1`
    color: ${({renk}) => renk || "black"};
    background-color: ${({bgRenk}) => bgRenk || "black"};
`