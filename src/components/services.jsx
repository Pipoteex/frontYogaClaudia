
import icono1 from "../iconos/a.svg"
import icono2 from "../iconos/b.svg"
import icono3 from "../iconos/c.svg"
import icono4 from "../iconos/d.svg"
import icono5 from "../iconos/e.svg"
import icono6 from "../iconos/f.svg"
import icono7 from "../iconos/g.svg"
import icono8 from "../iconos/h.svg"

import styled from 'styled-components'

let newArray = [ icono1, icono2, icono3, icono4, icono5, icono6, icono7, icono8 ]

const StyledIconService = styled.div`
    /* background: white; */
    border-radius: 90px;
    height: 131px;
    display: flex;
    justify-content: center;
    img{
      background: white;
      padding: 20px;
      width: 50%;
      border-radius: 30px;
    }

`
export const Services = (props) => {

  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Nuestros servicios</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <StyledIconService > <img  src={ newArray[i] } alt="hola" /> </StyledIconService>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
