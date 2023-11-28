import styles from "./Nav.module.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.nav__links}>
        <li className={styles.nav__items}>
          <Link className={styles.link} href="/">
            Home
          </Link>
        </li>
        <li className={styles.nav__links__item}>
          <Link className={styles.link} href="/work">
            Work
          </Link>
        </li>
        <li className={styles.nav__links__item}>
          <Link className={styles.link} href="/services">
            Services
          </Link>
        </li>
        <li className={styles.nav__links__item}>
          <Link className={styles.link} href="/talent">
            Talent
          </Link>
        </li>
        <li className={styles.nav__links__item}>
          <Link className={styles.link} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
