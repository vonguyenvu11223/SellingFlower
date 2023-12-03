import { NavbarList } from "../../utils/NavbarList";
import styles from "./styles.module.scss";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <ul className={styles.ul}>
          {NavbarList.map((item: any, index: any) => {
            return (
              <li key={index} className={styles.li}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.cart}>
        <LocalMallOutlinedIcon className={styles.icon} />
        <p>
          Giỏ hàng <span style={{ color: "red" }}>(0)</span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
