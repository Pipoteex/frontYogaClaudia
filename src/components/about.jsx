import image from "../images/claudia_martinez.jpeg";
import styled from "styled-components";

const StyledImage = styled.img`
    -webkit-box-shadow: 0px 10px 35px -15px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 35px -15px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 35px -15px rgba(0, 0, 0, 0.75);
    width: 100%;
    border-radius: 50px;
`;

export const About = (props) => {
    return (
        <div id="about" style={{ marginTop: "20px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <StyledImage
                            src={image}
                            className="img-responsive"
                            alt=""
                        />
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div
                            className="about-text"
                            style={{ marginTop: "20px" }}
                        >
                            <h2>Sobre mi...</h2>
                            <p>
                                {props.data
                                    ? props.data.paragraph
                                    : "loading..."}
                            </p>
                            <h3>Cualidades</h3>
                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        {props.data
                                            ? props.data.Why.map((d, i) => (
                                                  <li key={`${d}-${i}`}>{d}</li>
                                              ))
                                            : "loading"}
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                    <ul>
                                        {props.data
                                            ? props.data.Why2.map((d, i) => (
                                                  <li key={`${d}-${i}`}>
                                                      {" "}
                                                      {d}
                                                  </li>
                                              ))
                                            : "loading"}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
