import logo from "@/assets/name2.png";
import search from "@/assets/search.svg";
import Image from "next/image";
import Link from "next/link";

export default function NavBar2() {
  return (
    <>
      <div className=" bg-white">
        <div className="flex justify-center">
          <div className="max-h-40 w-3/4">
            <div className=" p-2 flex flex-row justify-around items-center">
              <Link className=" flex w-3/4 items-center" href="/">
                <img alt="" className=" w-32 h-9 " src={logo.src} />
                <p className=" mt-3 ml-2 text-orange-600"> | Wishlist</p>
              </Link>
              <div className=" m-3 rounded-sm p-2 bg-white w-full flex justify-evenly">
                <input
                  className=" w-11/12 border-2 p-2 border-orange-600"
                  type="text"
                  placeholder="Diskon terus"
                />
                <div
                  className="p-1 rounded-md m-1"
                  style={{ backgroundColor: "#ee4d2d" }}>
                  <img alt="" className="" src={search.src} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
