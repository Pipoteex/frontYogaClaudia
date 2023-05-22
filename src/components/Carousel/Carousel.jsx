import { useRef, useState } from "react";
import "./carousel.css";
import atras from "../../images/icons/atras.svg";
import adelante from "../../images/icons/adelante.svg";

const Carousel = ({ images }) => {
    const carousel = useRef();
    const [count, setCount] = useState(0);

    const incrementCarousel = (delta) => {
        if (!carousel.current) return;

        const width = carousel.current.offsetWidth;

        if (count + delta > images.length - 1) {
            setCount(0);
            carousel.current.scrollTo(0, 0);
            return;
        } else if (count + delta < 0) {
            setCount(images.length - 1);
            console.log(width, carousel.current.scrollLeft);
            carousel.current.scrollTo(width * images.length - 1, 0);
            return;
        }

        carousel.current.scrollTo(
            carousel.current.scrollLeft + width * delta,
            0
        );
        setCount((c) => c + delta);
    };

    return (
        <div className="carousel-container" id="galeria">
            <div className="carousel-v2" ref={carousel}>
                {images.map((img, idx) => (
                    <div
                        key={`${idx}-${img.title}`}
                        className={
                            idx === count
                                ? "carousel-item-v2"
                                : "carousel-item-v3"
                        }
                    >
                        <img src={img.src} alt="imagen" />
                    </div>
                ))}
            </div>

            <div className="box-button-carousel">
                <img
                    /* className="carousel-btn left-btn" */
                    onClick={() => incrementCarousel(-1)}
                    src={atras}
                    alt="atras"
                />
                <img
                    /* className="carousel-btn right-btn" */
                    onClick={() => incrementCarousel(1)}
                    src={adelante}
                    alt="adelante"
                />
            </div>
        </div>
    );
};

export default Carousel;
