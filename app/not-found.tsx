import Link from "next/link";

export default function Error() {
  return (
    <div>
      <h2>404 - Not found</h2>
      <Link href="/">Zur Startseite</Link>
    </div>
  );
}
