"use client";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import styles from "./styles.module.scss";
import Icons from "./icons";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.icons}>
          <Icons
            href="https://www.facebook.com"
            icons={<FacebookOutlinedIcon className={styles.facebook} />}
          />
          <Icons
            href="https://www.facebook.com"
            icons={<InstagramIcon className={styles.instagram} />}
          />
          <Icons
            href="https://www.facebook.com"
            icons={<PhoneIcon className={styles.phone} />}
          />
        </div>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.search}>User</div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
