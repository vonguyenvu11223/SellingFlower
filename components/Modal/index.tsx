"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import styles from "./styles.module.scss";
import { BsCart2 } from "react-icons/bs";

interface Props {
  show: boolean;
  setShow: any;
  value: {
    id: number;
    price: string;
    rating: number;
    src: string;
    title: string;
  };
}

function Modals({ show, setShow, value }: Props) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className={styles.container}>
            <div className={styles.left}>
              <Image src={value?.src} alt="Image" width={300} height={300} />
            </div>
            <div className={styles.right}>
              <h3 className={styles.title}>{value?.title}</h3>
              <div className={styles.price}>{value?.price}</div>
              <div className={styles.desc}>
                Những cành hoa mỏng manh, nhẹ nhàng xen kẽ với từng cành green
                vicky tựa như một giấc mơ đằm thắm mà đầy những yêu thương, hi
                vọng. Cái sắc tím hồng ấy, cứ gợi lên mãi trong lòng người những
                khao khát nắm tay nhau cùng
              </div>
              <div className={styles.quantity}>
                <div className={styles.input}>
                  <input type="text" />
                </div>
                <div className={styles.minus}>
                  <button>-</button>
                </div>
                <div className={styles.plus}>
                  <button>+</button>
                </div>
              </div>
              <div className={styles.cart}>
                <div className={styles.cartIcon}>
                  <BsCart2 />
                </div>
                <button>Thêm vào giỏ hàng</button>
              </div>
              <div className={styles.hotline}>
                Gọi ngay: <span>18005974759</span>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modals;
