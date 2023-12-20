"use client";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addSuccuss } from "../../store/features/cart";
import { ListItems } from "../../utils/ListItems";
import Modals from "../Modal";
import styles from "./styles.module.scss";

const Item = () => {
  const [show, setShow] = useState<boolean>(false);
  const [value, setValue] = useState<any>("");
  const dispatch = useDispatch();
  const handleClick = (item: any) => {
    setShow(true);
    setValue(item);
  };

  const notify = () => {
    dispatch(addSuccuss());
    toast.success("Thêm giỏ hàng thành công", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <Modals show={show} setShow={setShow} value={value} />
      <ToastContainer />
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
              <button className={styles.cart} onClick={notify}>
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
