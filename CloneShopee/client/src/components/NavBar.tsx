import logo from "@/assets/name.png";
import search from "@/assets/search.svg";
import cart from "@/assets/shopping-cart.svg";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div style={{ backgroundColor: "#fc5630" }}>
        <div className="flex justify-center">
          <div className="max-h-40 w-3/4">
            <div className=" p-2 flex flex-row justify-around items-center">
              <div className=" max-w-32">
                <Link href="/">
                  <img alt="" className="" src={logo.src} />
                </Link>
              </div>
              <div className=" m-3 w-full rounded-sm p-2 bg-white flex justify-evenly">
                <input
                  className=" w-11/12"
                  type="text"
                  placeholder="Diskon terus"
                />
                <div
                  className="p-1 rounded-md m--1"
                  style={{ backgroundColor: "#ee4d2d" }}>
                  <img alt="" className="" src={search.src} />
                </div>
              </div>
              <div className="w-10 flex justify-center">
                <Link href="/wishlist">
                  <img alt="" className="" src={cart.src} />
                </Link>
              </div>
              <div className="w-10 flex justify-center">
                <Link href="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
