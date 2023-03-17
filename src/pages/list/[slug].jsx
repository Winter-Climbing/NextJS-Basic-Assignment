import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./slug.module.css";

export default function DetailPage() {
  const router = useRouter();

  const [listDetail, setListDetail] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        results: { books },
      } = await (
        await fetch(
          `https://books-api.nomadcoders.workers.dev/list?name=${router.asPath
            .slice(6)
            .trim()}`
        )
      ).json();
      setListDetail(books);
    })();
  }, []);

  return (
    <section className={styles.section}>
      <ul className={styles.unlist}>
        {!listDetail && <h1>Loading...</h1>}
        {listDetail?.map((list) => (
          <div key={list.rank} className={styles.list}>
            <img src={list.book_image} className={styles.img} />
            <h3 className={styles.title}>{list.title}</h3>
            <h4 className={styles.contributor}>{list.contributor.slice(2)}</h4>
            <a href={list.amazon_product_url} target='_blank'>
              <button className={styles.buyBtn}>Buy now</button>
            </a>
          </div>
        ))}
      </ul>
    </section>
  );
}
