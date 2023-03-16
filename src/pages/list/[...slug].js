import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
    <>
      <ul>
        {!listDetail && <h1>Loading...</h1>}
        {listDetail?.map((list) => (
          <div key={list.rank}>
            <img src={list.book_image} />
            <h3>{list.title}</h3>
            <h4>{list.contributor.slice(2)}</h4>
            <a href={list.amazon_product_url} target='_blank'>
              <button>Buy now</button>
            </a>
          </div>
        ))}
      </ul>
    </>
  );
}
