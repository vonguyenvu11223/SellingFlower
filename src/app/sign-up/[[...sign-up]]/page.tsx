import { SignUp } from "@clerk/nextjs";
import styles from "./styles.module.scss";

export default function Page() {
  return (
    <div className={styles.container}>
      <SignUp />
    </div>
  );
}
