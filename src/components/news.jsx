import { Image } from "./image";

export const News = (props) => {
    return (
        <div
            id="news"
            className="text-center"
            style={{ background: "rgb(239, 243, 243)", margin: "20px 0px" }}
        >
            <div className="container">
                <div className="section-title" style={{ margin: "30px 0px" }}>
                    <h2>Novedades 2023</h2>
                    {/* <p>Algunas imagenes de nuestro dia a dia.</p> */}
                </div>
                <div className="row">
                    <div className="portfolio-items">
                        {props.data
                            ? props.data.map((d, i) => (
                                  <div
                                      key={`${d.title}-${i}`}
                                      className="col-sm-6 col-md-4 col-lg-4"
                                  >
                                      <Image
                                          title={d.title}
                                          largeImage={d.largeImage}
                                          smallImage={d.smallImage}
                                      />
                                  </div>
                              ))
                            : "Loading..."}
                    </div>
                </div>
            </div>
        </div>
    );
};
