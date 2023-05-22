import styled from "styled-components";
import img1 from "../images/logo/logoClaudia.jpeg";
import { ReactComponent as InstagramLogo } from "../images/icons/instagram.svg";
import { ReactComponent as FacebookLogo } from "../images/icons/facebook.svg";

const StyledImg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    img {
        width: 60%;
        border-radius: 50%;
    }
`;

const StyledBoxContact = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    @media screen and (max-width: 800px) {
        grid-template-columns: auto;
    }
`;

const StyledFooter = styled.div`
    text-align: center;
    font-size: 20px;
    color: black;
    background-color: #f9f8f3;
    margin-top: 15px;
`;

const StyledInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    min-height: 300px;
    font-size: 20px;
    @media screen and (max-width: 800px) {
        align-items: center;
        font-size: 16px;
    }
`;

export const Contact = (props) => {
    return (
        <div>
            <div
                style={{
                    margin: "30px 0px",
                    textAlign: "center",
                    background: "#eff3f3",
                }}
                id="galeria"
            >
                <h2>Contacto</h2>
            </div>
            <StyledBoxContact>
                <StyledImg>
                    <img src={img1} alt="yoga" />
                </StyledImg>

                <StyledInformation>
                    <div>
                        <div
                            style={{
                                fontSize: "26px",
                                fontWeight: "500",
                                marginBottom: "10px",
                            }}
                        >
                            Información de contacto:
                        </div>
                        <div>
                            <b>- Dirección:</b> Corrientes
                        </div>
                        <div>
                            <b>- Teléfono:</b> 3764673216
                        </div>
                        <div
                            style={{
                                marginTop: "20px",
                            }}
                        >
                            <InstagramLogo
                                style={{ cursor: "pointer", margin: "10px" }}
                            />

                            <FacebookLogo
                                style={{ cursor: "pointer", margin: "10px" }}
                            />
                        </div>
                    </div>
                </StyledInformation>
            </StyledBoxContact>

            <StyledFooter>2023 Claudia Martinez :)</StyledFooter>
        </div>
    );
};
