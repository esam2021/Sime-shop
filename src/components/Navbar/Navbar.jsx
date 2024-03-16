import Link from "next/link";
import styles from "./Navbar.module.css";
import { links } from "./links";
import Logo from "@/app/elements/Logo/Logo";
import DarkMode from "../DarkMode/DarkMode";


const Navbar = () => {
  return (
    <div className="container">
          <div className={styles.page_container} style={{padding:"30px 0"}}>
      <Logo />
      <ul className={styles.links}>
        {links.map((item, key) => (
          <li key={key}>
            <Link href={item.url} className={styles.link}>
              {item.name}
            </Link>
          </li>
        ))}
        <DarkMode />
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
