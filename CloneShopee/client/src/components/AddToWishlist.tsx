"use client";

import { addWishlist } from "@/app/product/[slug]/action";

export default function BtnAddWishlist(productId: any, userId: any) {
  const onClickHandler = async () => {
    await addWishlist(productId);
  };
  return (
    <button
      className="w-fit h-fit p-2 rounded-lg text-center"
      onClick={onClickHandler}
      style={{ backgroundColor: "#ffeee7" }}>
      Masukkan Keranjang
    </button>
  );
}
