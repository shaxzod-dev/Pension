import Image from "next/image";
import Banner from "~/components/banner";
import Comfort from "~/components/comfort";
import Header from "~/components/header";
import Offers from "~/components/offers";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Comfort />
        <Offers />
      </main>
    </>
  );
}
