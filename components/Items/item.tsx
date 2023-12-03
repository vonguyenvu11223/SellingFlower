import styles from "./styles.module.scss";
import Image from "next/image";
import { Rating } from "@mui/material";
import { ListItems } from "../../utils/ListItems";

const Item = () => {
  return (
    <>
      {ListItems.map((item, index) => {
        return (
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
        );
      })}
    </>
  );
};

export default Item;
