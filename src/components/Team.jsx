export const Team = (props) => {
    return (
        <div id="equipo" /* className="text-center" */>
            <div className="container">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="img/cangorosa/cangorosa1.jpeg"
                        style={{ width: "50%" }}
                        alt=""
                        srcset=""
                    />
                    <img
                        src="img/cangorosa/cangorosa2.jpeg"
                        alt=""
                        srcset=""
                        style={{ width: "50%" }}
                    />
                </div>
                <div
                    style={{
                        fontSize: "30px",
                        marginBottom: "40px",
                        textAlign: "center",
                    }}
                >
                    Establecimiento o lugar en el que se preparan medicamentos
                    de forma artesanal y se venden. "a través de la biblioteca
                    se pueden conocer los experimentos que los monjes jerónimos
                    realizaban en la botica del monasterio"
                </div>
            </div>
        </div>
    );
};
