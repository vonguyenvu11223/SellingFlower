import Image from "next/image";
import styles from "./styles.module.scss";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.list1}>
          <div className={styles.image}>
            <Image
              src={
                "https://bizweb.dktcdn.net/100/232/638/themes/895086/assets/logo_footer.png?1676348722870"
              }
              alt="Image"
              width={212}
              height={80}
            />
          </div>
          <div>
            <p>
              Được thành lập vào ngày 20/08/2008 với niềm đam mê và khát vọng
              thành công trong lĩnh vực TMĐT
            </p>
          </div>
          <div className={styles.contact}>
            <span>
              <PlaceIcon />
              152/2/1 Nguyễn Văn Khối, Phường 8, Gò Vấp, TP.HCM
            </span>
            <span>
              <CallIcon />
              123456789
            </span>
            <span>
              <EmailIcon />
              vonguyenvu25032003@gmail.com
            </span>
          </div>
        </div>
        <div className={styles.list2}>
          <h1>Chính Sách</h1>
          <p>&gt; Sản phẩm</p>
          <p>&gt; Hoa tươi</p>
          <p>&gt; Tin tức</p>
          <p>&gt; Liên hệ</p>
        </div>
        <div className={styles.list3}>
          <h1>Tin tức nổi bật</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
