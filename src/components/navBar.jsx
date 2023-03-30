import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Bars } from "./icons/bars.svg";
import { ReactComponent as Across } from "./icons/across.svg";
import { Animated } from "react-animated-css";

const StyledNavBar = styled.div`
    position: fixed;
    width: 100%;
    height: 80px;
    z-index: 200;
    background-color: transparent;
    @media screen and (max-width: 450px) {
        & {
            height: 50px;
        }
    }
`;

const StyledNavBarHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #f9f8f3;
`;

const StyledLogo = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    margin-left: 20px;
    font-size: 3vw;
    color: white;
    @media screen and (max-width: 450px) {
        & {
            font-size: 19px;
        }
    }
`;

const StyledBarsIcon = styled.div`
    padding: 10px;
    cursor: pointer;
    margin-right: 20px;
    svg {
        width: 2.5vw;
        fill: white;
    }
`;

const StyledItemsContainer = styled.div`
    background-color: #fef3f1;
    display: flex;
    background: #f9f8f3;
`;

const StyledItem = styled.div`
    padding: 20px;
    cursor: pointer;
    font-family: "Raleway", sans-serif;
    color: black;
    font-size: 1.5vw;
    &:hover {
        text-decoration: underline;
    }
    @media screen and (max-width: 450px) {
        & {
            font-size: 18px;
        }
    }
`;

export const NavBar = (props) => {
    const [viewItems, setViewItems] = useState(false);

    const handleOnClick = (event) => {
        document
            .querySelector(`#${event.target.getAttribute("name")}`)
            .scrollIntoView({ behavior: "smooth" });
        setViewItems(false);
    };

    return (
        <StyledNavBar
            id="mainNavBar"
            className="animate__animated animate__fadeIn animate__delay-2s 5s"
        >
            <StyledNavBarHeader
                style={viewItems ? { borderBottom: "2px solid #fef3f1" } : {}}
            >
                <StyledItemsContainer>
                    <StyledItem name="about" onClick={handleOnClick}>
                        Biografía
                    </StyledItem>
                    <StyledItem name="services" onClick={handleOnClick}>
                        Yoga
                    </StyledItem>
                    <StyledItem name="galeria" onClick={handleOnClick}>
                        WorkShop
                    </StyledItem>
                    <StyledItem name="news" onClick={handleOnClick}>
                        Agenda
                    </StyledItem>
                    <StyledItem name="equipo" onClick={handleOnClick}>
                        Cangorosa
                    </StyledItem>
                    <StyledItem name="contact" onClick={handleOnClick}>
                        Contacto
                    </StyledItem>
                </StyledItemsContainer>
                {/* <StyledBarsIcon onClick={() => setViewItems(!viewItems)}>
                    {viewItems ? (
                        <Across
                            className="iconNavBar"
                            style={{ maxWidth: "30px" }}
                        ></Across>
                    ) : (
                        <Bars
                            className="iconNavBar"
                            style={{ maxWidth: "30px" }}
                        ></Bars>
                    )}
                </StyledBarsIcon> */}
            </StyledNavBarHeader>

            {viewItems ? (
                <Animated
                    animationIn="fadeInDown"
                    animationInDuration={400}
                    animationOutDuration={400}
                    isVisible={viewItems}
                >
                    <StyledItemsContainer>
                        <StyledItem name="about" onClick={handleOnClick}>
                            Sobre nosotros
                        </StyledItem>
                        <StyledItem name="services" onClick={handleOnClick}>
                            Servicios
                        </StyledItem>
                        <StyledItem name="galeria" onClick={handleOnClick}>
                            Galeria
                        </StyledItem>
                        <StyledItem name="news" onClick={handleOnClick}>
                            Novedades
                        </StyledItem>
                        <StyledItem name="equipo" onClick={handleOnClick}>
                            Equipo
                        </StyledItem>
                        <StyledItem name="contact" onClick={handleOnClick}>
                            Contacto
                        </StyledItem>
                        {/* <StyledItem name="comision" onClick={ () => navigation("/comision_yoga") } >
                            Comisión Misionera de Yoga
                        </StyledItem> */}
                    </StyledItemsContainer>
                </Animated>
            ) : (
                ""
            )}
        </StyledNavBar>
    );
};
