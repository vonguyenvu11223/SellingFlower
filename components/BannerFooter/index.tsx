import styles from "./styles.module.scss";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";

const BannerFooter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <div className={styles.logo}>
            <LocalShippingOutlinedIcon className={styles.icon} />
          </div>
          <h4 className={styles.title}>Giao hàng toàn quốc</h4>
          <p className={styles.desc}>
            Giao hàng trên toàn quốc với mức phí ưu đãi nhất
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.logo}>
            <HeadphonesOutlinedIcon className={styles.icon} />
          </div>
          <h4 className={styles.title}>Hỗ trợ khách hàng</h4>
          <p className={styles.desc}>
            Hỗ trợ khách hàng trực tuyến 24/7 Hãy gọi cho chúng tôi
          </p>
        </div>
        <div className={styles.item}>
          <div className={styles.logo}>
            <CardGiftcardOutlinedIcon className={styles.icon} />
          </div>
          <h4 className={styles.title}>Gói hoa miễn phí</h4>
          <p className={styles.desc}>
            Gói hoa miễn phí khi mua hoa tại cửa hàng nhanh nhất
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerFooter;
