"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Rating } from "@mui/material";
import { ListItems } from "../../utils/ListItems";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Modals from "../Modal";
import { useState } from "react";

const Item = () => {
  const [show, setShow] = useState<boolean>(false);
  const [value, setValue] = useState<any>("");
  const handleClick = (item: any) => {
    setShow(true);
    setValue(item);
  };

  return (
    <>
      <Modals show={show} setShow={setShow} />
      {ListItems.map((item) => {
        return (
          <div className={styles.item} key={item?.id}>
            <Image src={item?.src} alt="Image" width={237} height={237} />
            <p className={styles.title}>{item?.title}</p>
            <p style={{ color: "red", margin: "0" }}>{item?.price}</p>
            <p>
              <Rating defaultValue={item?.rating} size="small" readOnly />
            </p>
            <div className={styles.button}>
              <button
                className={styles.detail}
                onClick={() => handleClick(item)}>
                Chi tiết
              </button>
              <button className={styles.cart}>
                <ShoppingCartOutlinedIcon />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Item;
