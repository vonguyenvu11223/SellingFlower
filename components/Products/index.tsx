"use client";
import styles from "./styles.module.scss";
import { ListItems } from "../../utils/ListItems";
import Image from "next/image";
import { Rating } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSuccuss } from "../../store/features/cart";
import Modals from "../Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
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
      <div className={styles.container}>
        <div className={styles.allProducts}>
          <p>Tất cả sản phẩm</p>
        </div>
        <div className={styles.top}>
          <div className={styles.total}>
            Có tất cả {ListItems.length} sản phẩm
          </div>
          <div className={styles.filter}>
            <p>Sắp xếp:</p>
            <select name="option" id="">
              <option value="">Mặc định</option>
              <option value="">Giá tăng dần</option>
              <option value="">Giá giảm dần</option>
              <option value="">Mới đến cũ</option>
              <option value="">Cũ đến mới</option>
            </select>
          </div>
        </div>
        <div className={styles.products}>
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
        </div>
      </div>
    </>
  );
};

export default Products;
