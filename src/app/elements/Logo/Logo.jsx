import styles from "./Logo.module.css";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className={`${styles.logo}`}>
      ALSAMARA SHOP
    </Link>
  );
};

export default Logo;
