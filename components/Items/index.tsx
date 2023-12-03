import Image from "next/image";
import styles from "./styles.module.scss";
import { Rating } from "@mui/material";
import image from "../../public/images.png";
const Items = () => {
  return (
    <>
      <Image
        src={image}
        alt="Image"
        width={70}
        height={60}
        className={styles.logo}
      />
      <fieldset className={styles.fieldset}>
        <legend>Hàng mới về</legend>
        <div className={styles.items}>
          <div className={styles.item}>
            <Image
              src={
                "https://bizweb.dktcdn.net/thumb/medium/100/232/638/products/11.jpg?v=1500085469247"
              }
              alt="Image"
              width={237}
              height={237}
            />
            <p>Special Love - hoa của tình yêu</p>
            <p style={{ color: "red" }}>130.000đ</p>
            <p>
              <Rating defaultValue={4} size="small" readOnly />
            </p>
          </div>
          <div className={styles.item}>
            <Image
              src={
                "https://bizweb.dktcdn.net/thumb/medium/100/232/638/products/11.jpg?v=1500085469247"
              }
              alt="Image"
              width={237}
              height={237}
            />
            <p>title</p>
            <p>Price</p>
            <p>Rating</p>
          </div>
          <div className={styles.item}>
            <Image
              src={
                "https://bizweb.dktcdn.net/thumb/medium/100/232/638/products/11.jpg?v=1500085469247"
              }
              alt="Image"
              width={237}
              height={237}
            />
            <p>title</p>
            <p>Price</p>
            <p>Rating</p>
          </div>
          <div className={styles.item}>
            <Image
              src={
                "https://bizweb.dktcdn.net/thumb/medium/100/232/638/products/11.jpg?v=1500085469247"
              }
              alt="Image"
              width={237}
              height={237}
            />
            <p>title</p>
            <p>Price</p>
            <p>Rating</p>
          </div>

          <div className={styles.item}>
            <Image
              src={
                "https://bizweb.dktcdn.net/thumb/medium/100/232/638/products/11.jpg?v=1500085469247"
              }
              alt="Image"
              width={237}
              height={237}
            />
            <p>title</p>
            <p>Price</p>
            <p>Rating</p>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default Items;
