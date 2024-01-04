import { SignIn } from "@clerk/nextjs";
import styles from "./styles.module.scss";

export default function Page() {
  return (
    <div className={styles.signInContainer}>
      <SignIn />
    </div>
  );
}
