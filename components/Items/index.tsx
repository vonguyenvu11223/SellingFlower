import Image from "next/image";
import image from "../../public/images.png";
import Item from "./item";
import styles from "./styles.module.scss";
const Items = () => {
  return (
    <>
      <Image
        src={image}
        alt="Image"
        width={70}
        height={60}
        className={styles.logo}
      />

      <fieldset className={styles.fieldset}>
        <div className={styles.items}>
          <Item />
        </div>
      </fieldset>
    </>
  );
};

export default Items;
