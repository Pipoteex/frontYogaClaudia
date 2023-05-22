import styled from "styled-components";
import img1 from "../images/icons/1.svg";
import img2 from "../images/icons/2.svg";
import img3 from "../images/icons/3.svg";
import img4 from "../images/icons/4.svg";

const StyledIconService = styled.div`
    border-radius: 90px;
    display: flex;
    justify-content: center;
    img {
        background: white;
        width: 30%;
        border-radius: 30px;
    }
`;

const data = {
    0: img1,
    1: img2,
    2: img3,
    3: img4,
};
export const Services = (props) => {
    return (
        <div
            id="services"
            className="text-center"
            style={{ background: "white" }}
        >
            <div /* className="container" */>
                <div
                    /* className="section-title" */
                    style={{ margin: "30px 0px", background: "#eff3f3" }}
                >
                    <h2>WorkShop</h2>
                </div>
                <div className="row" style={{ padding: "0 30px" }}>
                    {props.data
                        ? props.data.map((d, i) => (
                              <div key={`${d.name}-${i}`} className="col-md-4">
                                  <StyledIconService>
                                      <img src={data[i]} alt="Servicios" />{" "}
                                  </StyledIconService>
                                  <div className="service-desc">
                                      <h3>{d.name}</h3>
                                      <p>{d.text}</p>
                                  </div>
                              </div>
                          ))
                        : "loading"}
                </div>
            </div>
        </div>
    );
};
