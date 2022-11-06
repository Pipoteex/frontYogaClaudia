import React from 'react'
import styled from 'styled-components'
import 'react-animated-slider/build/horizontal.css';
import { useState } from 'react';
import {Animated} from "react-animated-css";
import { useEffect } from 'react';

const StyledMainWelcome = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: #000;
    background-image: linear-gradient(62deg, #f5f4f3 0%, #f9d797 99%);
    transition: all 1s;
    img{
      width: 100vw;
      transition: all 1s;
      opacity: 0;
      max-height: 100vh;
    }
    &.algo{
      img{
        width: 100vw;
        opacity: 1;
      }
    }

`

const StyledWelcomeMessage = styled(Animated)`
    /* width: 50%; */
    font-size: 4vw;
    padding: 20px;
    position: absolute;
    color: white;
    text-align: center;
    font-family: "Raleway", sans-serif;
    border-radius: 10px;
    left: 260;
    top: 0;
    text-shadow: -2px 2px 18px rgba(255,255,255,0.49);
`

const StyledLogoImage = styled.div`
    width: 100%;
    img{
        width: 100%;
    }
`

const imagesList = [
    {
        url: "img/12.jpeg",
        mensaje: "FUERZA",
        entrada: "bounceInLeft",
        style: { top:"100", right: "0" }
    },
    {
        url: "img/23.jpeg",
        mensaje: "ESPIRITU",
        entrada: "bounceInRight",
        style: { top:"150", right: "40" }
    },
    {
        url: "img/3.jpeg",
        mensaje: "VITALIDAD",
        entrada: "fadeIn",
        style: { top:"40", right: "20" }
    }
]

export const Welcome = () => {

    const [url, setUrl] = useState(0)
    const [flag, setFlag] = useState( false )
    const [mensaje, setMensaje] = useState(imagesList[0].mensaje)
    const [flagMensaje, setFlagMensaje] = useState( false )
    
    useEffect(() => {
      
      const intervalo = setInterval( ()=> {

          setFlag( false )
          setFlagMensaje( false )
          setTimeout( ()=>{
            setUrl( url => url+1 === imagesList.length ? 0 : ( url + 1 )  )
          }, 300 )
          
      }, 7000)

      return () => {
        clearInterval( intervalo )
      }
    }, [])
    
    const aparecerMensaje = () =>{
      setFlag( true )
      setTimeout( ()=>{
        setMensaje( imagesList[url].mensaje  )
        setFlagMensaje( true )
        
      }, 1500 )
    }

    return (
            
        <StyledMainWelcome className={ flag ? "algo": "" }>
          <img src={ imagesList[url].url } alt="asas" onLoad={ () => aparecerMensaje() } />
          <StyledWelcomeMessage 
              animationIn={ imagesList[url].entrada } 
              animationOut="fadeOut" 
              isVisible={flagMensaje}
              style={ imagesList[url].style }
          >
            {mensaje}
          </StyledWelcomeMessage>
        </StyledMainWelcome>
     
    )
}


