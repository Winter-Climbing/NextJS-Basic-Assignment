import Link from "next/Link";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <nav>
      <div className={styles.nav}>
        <Link href='/' legacyBehavior>
          <a className={styles.link}>Home</a>
        </Link>
        <Link href='/about' legacyBehavior>
          <a className={styles.link}>About</a>
        </Link>
      </div>
      <main>{children}</main>
    </nav>
  );
}
