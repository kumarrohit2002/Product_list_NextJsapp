import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Call API on Client component and Server Component</h1>
      <Link href="/productitems">featch data on server component</Link>
      <br/>
      <Link href="/productlist">featch data on client component</Link>


    </div>
  );
}
