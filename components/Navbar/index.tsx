import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Link from "next/link";
import { useAppSelector } from "../../store/store";
import { NavbarList } from "../../utils/NavbarList";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const quantity = useAppSelector((state) => state?.cart?.value);
  const currentPage = usePathname();
  return (
    <div className={styles.wrapper}>
      <div>
        <ul className={styles.ul}>
          {NavbarList.map((item: any, index: any) => {
            return (
              <Link
                href={item?.nav}
                key={index}
                className={styles.li}
                style={
                  item?.nav === currentPage.split("/")[1]
                    ? { color: "#ef6056" }
                    : { color: "" }
                }>
                {item?.name}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className={styles.cart}>
        <LocalMallOutlinedIcon className={styles.icon} />
        <p>
          Giỏ hàng <span style={{ color: "red" }}>({quantity})</span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
