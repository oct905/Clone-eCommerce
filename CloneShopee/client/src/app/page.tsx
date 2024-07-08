import NavBar from "@/components/NavBar";
import Carousel from "@/components/Carousel";
import side1 from "@/assets/side1.png";
import side2 from "@/assets/side2.png";
import Card from "@/components/Card";
import { fetchProducts } from "./action";
import Link from "next/link";
import Image from "next/image";

const Home = async () => {
  const data = await fetchProducts();

  return (
    <div className=" min-h-screen">
      <NavBar />
      <div className="py-5 bg-white flex justify-center">
        <div className="h-full w-3/4 gap-2 flex">
          <Carousel />
          <div className=" w-2/4 place-content-center gap-y-10">
            <img className="" src={side1.src} alt="" />
            <img className="" src={side2.src} alt="" />
          </div>
        </div>
      </div>
      <div className="h-fit w-screen bg-slate-100 flex flex-col justify-center items-center">
        <h1 className="place-content-center text-center border-b-4 border-orange-500 w-3/4 bg-white mt-5 h-10">
          REKOMENDASI
        </h1>
        <div className="flex justify-evenly w-3/4 mt-2 flex-wrap gap-1">
          {data.map((product, i) => {
            return (
              <div key={i}>
                <Card product={product} />
              </div>
            );
          })}
        </div>
        <Link className=" bg-zinc-300 m-5 p-2 rounded-xl" href={"product"}>
          See More
        </Link>
      </div>
    </div>
  );
};

export default Home;
