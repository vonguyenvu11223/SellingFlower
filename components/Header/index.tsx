"use client";
import PhoneIcon from "@mui/icons-material/Phone";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Navbar from "../Navbar";
import Icons from "./icons";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.icons}>
          <Icons href="" icons={<FaFacebook className={styles.facebook} />} />
          <Icons
            href=""
            icons={<IoLogoInstagram className={styles.instagram} />}
          />
          <Icons
            href="https://www.facebook.com"
            icons={<PhoneIcon className={styles.phone} />}
          />
        </div>
        <Link href={"/"} className={styles.logo}>
          <Image
            src={
              "https://bizweb.dktcdn.net/100/232/638/themes/895086/assets/logo.png?1676348722870"
            }
            alt="Image"
            width={250}
            height={80}
          />
        </Link>
        <div className={styles.search}>
          <FaRegUser size={20} />
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
