import Banner from "@/components/home/Banner";

import Image from "next/image";
import Products from "./products/page";

export default function Home() {
  return (
    <div className="  bg-white items-center justify-center ">
      <section className=" ">
        <Banner></Banner>
      </section>
      <section className="md:py-7 ">
        <Products></Products>
      </section>
    </div>
  );
}
