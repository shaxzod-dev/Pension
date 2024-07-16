import Image from "next/image";
import Banner from "~/components/banner";
import Comfort from "~/components/comfort";
import Header from "~/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Comfort />
      </main>
    </>
  );
}
