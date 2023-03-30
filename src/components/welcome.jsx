import React from "react";
import styled from "styled-components";
import "react-animated-slider/build/horizontal.css";
import { useState } from "react";
import { Animated } from "react-animated-css";
import { useEffect } from "react";

const StyledMainWelcome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    background-image: white;
    transition: all 1s;
    width: 100vw;
    height: 100vh;
    background: #f9f8f3;
    /* img {
        width: 100%;
        transition: all 1s;
        opacity: 0;
    }
    &.algo {
        img {
            width: 100%;
            opacity: 1;
        }
    } */
`;

const StyledWelcomeMessage = styled(Animated)`
    font-size: 3vw;
    padding: 20px;
    color: white;
    text-align: center;
    font-family: "Raleway", sans-serif;
    border-radius: 10px;
    text-shadow: -2px 2px 18px rgba(255, 255, 255, 0.49);
`;

const imagesList = [
    {
        url: "img/logo/logoClaudia.jpeg",
        mensaje: "Claudia Martinez ",
        entrada: "fadeIn",
        style: {},
    },
];

export const Welcome = () => {
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        /* const intervalo = setInterval(() => {
            setFlag(false);
            setFlagMensaje(false);
            setTimeout(() => {
                setUrl((url) => (url + 1 === imagesList.length ? 0 : url + 1));
            }, 300);
        }, 7000);

        return () => {
            clearInterval(intervalo);
        }; */
    }, []);

    /* const aparecerMensaje = () => {
        setFlag(true);
        setTimeout(() => {
            setMensaje(imagesList[url].mensaje);
            setFlagMensaje(true);
        }, 1500);
    }; */

    return (
        <StyledMainWelcome className={flag ? "algo" : ""} id={"welcome"}>
            <img
                src={imagesList[0].url}
                alt="asas"
                className="animate__animated animate__fadeIn animate__delay-1s 2s"
                style={{ width: "800px" }}
            />
            {/* <StyledWelcomeMessage
                animationIn={imagesList[url].entrada}
                animationOut="fadeOut"
                isVisible={flagMensaje}
                style={imagesList[0].style}
            >
                {mensaje}
            </StyledWelcomeMessage> */}
        </StyledMainWelcome>
    );
};
