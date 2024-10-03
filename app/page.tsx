import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>My Image</h1>
      <Image src="/my-image.png" alt="My Image" width={500} height={500} />
    </div>
  );
}
