import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";

export default function Home() {
  const [bestSellersList, setBestSellersList] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch("https://books-api.nomadcoders.workers.dev/lists")
      ).json();
      setBestSellersList(results);
    })();
  }, []);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>The New York Times Best Seller Explorer</h1>
      <ul className={styles.unlist}>
        {!bestSellersList && <h3>Loading...</h3>}
        {bestSellersList?.map((list) => (
          <li key={list.list_name} className={styles.list}>
            <Link href={`list/${list.list_name_encoded}`} legacyBehavior>
              <a>{list.list_name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
