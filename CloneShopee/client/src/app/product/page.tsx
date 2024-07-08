"use client";

import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import { fetchProduct } from "./action";
import { Product } from "@/db/models/product";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const getProduct = async (): Promise<void> => {
    console.log(page, `ini sebelum fetch`);
    const data = await fetchProduct(page);
    if (data.length === 0) {
      setHasMore(false);
    } else {
      setProducts((product) => [...product, ...data]);
      setPage((i) => i + 1);
    }
  };
  return (
    <div className=" min-h-screen">
      <NavBar />
      <div className="h-fit flex justify-center w-screen min-h-screen bg-slate-100 py-10">
        <InfiniteScroll
          dataLength={products?.length}
          next={getProduct}
          hasMore={hasMore}
          loader={<h4 className="w-full text-center my-10">Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className=" min-w-3/4 ">
          <div className="w-full flex justify-center">
            <div className="flex justify-evenly w-3/4 mt-2 flex-wrap gap-1">
              {products?.map((product, i) => {
                return (
                  <div key={i}>
                    <Card product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
