import { Product } from "@/app/action";
import p1 from "@/assets/p1.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Card({ product }: { product: Product }) {
  return (
    <>
      <Link href={`product/${product.slug}`}>
        <div className="w-60 h-80 bg-white border-2 border-slate-500 ">
          <div className="w-full flex justify-center">
            <img className="mt-5 max-h-36" src={product.thumbnail} alt="" />
          </div>
          <div className="p-1">
            <p>{product.name}</p>
            <p>{product.excerpt}</p>
            <p className=" text-orange-500">Rp.{product.price}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
