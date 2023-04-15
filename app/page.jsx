import Link from "next/link";

function createId(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export default async function Home() {
  const random = `shorts/${createId(14)}`;

  return (
    <div>
      <Link href={random}>Watch Shorts</Link>
    </div>
  );
}
