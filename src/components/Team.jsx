import styled from "styled-components";
import img1 from "../images/cangorosa/cangorosa1.jpeg";
import img2 from "../images/cangorosa/cangorosa2.jpeg";

const StyledDescription = styled.div`
    margin-bottom: "40px";
    text-align: center;
    font-size: 29px;
    margin-bottom: 20px;
    @media screen and (max-width: 800px) {
        font-size: 19px;
    }
`;

export const Team = (props) => {
    return (
        <div id="equipo">
            <div className="container">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img src={img1} style={{ width: "50%" }} alt="" srcset="" />
                    <img src={img2} alt="" srcset="" style={{ width: "50%" }} />
                </div>
                <StyledDescription>
                    Establecimiento o lugar en el que se preparan medicamentos
                    de forma artesanal y se venden. "a través de la biblioteca
                    se pueden conocer los experimentos que los monjes jerónimos
                    realizaban en la botica del monasterio"
                </StyledDescription>
            </div>
        </div>
    );
};
