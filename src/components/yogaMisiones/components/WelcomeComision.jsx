import React from 'react'
import styled from 'styled-components'
import {Animated} from "react-animated-css";

const StyledBox = styled.div`
    display: flex;


`

const StyledTitle = styled.div`
    width: 100%;
    font-family: "Raleway", sans-serif;
    font-size: 80px;
    text-align: center;
`

export const WelcomeComision = () => {



    return (
        <StyledBox>
            <StyledTitle>Comisión Misionera de Yoga</StyledTitle>
            
        </StyledBox>
    )
}
