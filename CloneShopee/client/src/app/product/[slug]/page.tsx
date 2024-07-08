"use server";

import { NextRequest } from "next/server";
import BtnAddWishlist from "@/components/AddToWishlist";
import { fetchProductsBySlug } from "./action";
import NavBar from "@/components/NavBar";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const data = await fetchProductsBySlug(slug);

  return (
    <>
      <NavBar />
      <div className=" bg-gray-200 w-3.4 h-screen py-5">
        <div className=" flex justify-center">
          <div className=" w-3/4 bg-white p-5 flex gap-10">
            <img className="w-1/4" src={data.images[0]} alt="" />
            <div>
              <p className=" font-semibold text-xl">{data.name}</p>
              <p>{data.description}</p>
              <p className="mt-5">Tags: </p>
              <div className="flex gap-2">
                {data.tags.map((tag: string, i: number) => (
                  <div key={i} className=" bg-zinc-200 p-1 rounded-lg">
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
              <p className=" font-bold text-2xl text-orange-600 mr-1">
                Rp.85.000
              </p>
              <BtnAddWishlist productId={data._id} />
              <button className="w-44 h-10 rounded-lg text-center ml-1 bg-orange-600">
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
