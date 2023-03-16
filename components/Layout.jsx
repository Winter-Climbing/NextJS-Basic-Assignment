import Link from "next/Link";

export default function Layout({ children }) {
  return (
    <nav>
      <Link href='/' legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href='/about' legacyBehavior>
        <a>About</a>
      </Link>
      <main>{children}</main>
    </nav>
  );
}
