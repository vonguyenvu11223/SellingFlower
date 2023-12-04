"use client";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./styles.module.scss";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "600px",
  overflow: "hidden",
};
const slideImages = [
  {
    url: "https://bizweb.dktcdn.net/thumb/2048x2048/100/232/638/themes/895086/assets/slider_2.jpg?1676348722870",
  },
  {
    url: "https://bizweb.dktcdn.net/thumb/2048x2048/100/232/638/themes/895086/assets/slider_2.jpg?1676348722870",
  },
  {
    url: "https://bizweb.dktcdn.net/thumb/2048x2048/100/232/638/themes/895086/assets/slider_2.jpg?1676348722870",
  },
];

const Slideshow = () => {
  return (
    <div className={styles.container}>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                objectFit: "contain",
              }}></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
