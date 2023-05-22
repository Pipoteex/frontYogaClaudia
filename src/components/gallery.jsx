import Carousel from "./Carousel/Carousel";
import image1 from "../images/gallery/g1.jpeg";
import image2 from "../images/gallery/g2.jpeg";
import image3 from "../images/gallery/g3.jpeg";
import image4 from "../images/gallery/g4.jpeg";
import image5 from "../images/gallery/g5.jpeg";
import image6 from "../images/gallery/g6.jpeg";
import image7 from "../images/gallery/g7.jpeg";
import image8 from "../images/gallery/g8.jpeg";
import image9 from "../images/gallery/g9.jpeg";
import image10 from "../images/gallery/g10.jpeg";
import image11 from "../images/gallery/g11.jpeg";

const data = [
    {
        src: image1,
        title: "A nice view",
    },
    {
        src: image2,
        title: "Green Bamboo",
    },
    {
        src: image3,
        title: "dude on a laptop",
    },
    {
        src: image4,
        title: "Noice Hills m8",
    },
    {
        src: image5,
        title: "Sun shines bright",
    },
    {
        src: image6,
        title: "Sun shines bright",
    },
    {
        src: image7,
        title: "Sun shines bright",
    },
    {
        src: image8,
        title: "Sun shines bright",
    },
    {
        src: image9,
        title: "Sun shines bright",
    },
];

export const Gallery = (props) => {
    return (
        <>
            <div
                style={{
                    margin: "30px 0px",
                    textAlign: "center",
                    background: "#eff3f3",
                }}
                id="galeria"
            >
                <h2>Galeria</h2>
            </div>
            <Carousel images={data} />
        </>
    );
};
