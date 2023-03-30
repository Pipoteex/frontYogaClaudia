import styled from "styled-components";

const StyledIconService = styled.div`
    /* background: white; */
    border-radius: 90px;
    /* height: 131px; */
    display: flex;
    justify-content: center;
    img {
        background: white;
        width: 90%;
        border-radius: 30px;
        /* height: 90%; */
    }
`;
export const Services = (props) => {
    return (
        <div id="services" className="text-center">
            <div className="container">
                <div className="section-title" style={{ margin: "30px 0px" }}>
                    <h2>WorkShop</h2>
                </div>
                <div className="row">
                    {props.data
                        ? props.data.map((d, i) => (
                              <div key={`${d.name}-${i}`} className="col-md-4">
                                  <StyledIconService>
                                      <img src={d.icon} alt="hola" />{" "}
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
