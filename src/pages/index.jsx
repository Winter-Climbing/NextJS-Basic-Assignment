import { useEffect, useState } from "react";
import Link from "next/link";

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
    <>
      <h1>Hello</h1>
      <ul>
        {!bestSellersList && <h3>Loading...</h3>}
        {bestSellersList?.map((list) => (
          <li key={list.list_name}>
            <Link href={`list/${list.list_name_encoded}`}>
              {list.list_name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
