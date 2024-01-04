"use client";
import { SignInButton, UserButton, useAuth, useUser } from "@clerk/nextjs";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Navbar from "../Navbar";
import Icons from "./icons";
import styles from "./styles.module.scss";

const Header = () => {
  const { user } = useUser();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.icons}>
          <Icons href="" icons={<FaFacebook className={styles.facebook} />} />
          <Icons
            href="https://www.facebook.com"
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
          {user === null ? (
            <SignInButton />
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
