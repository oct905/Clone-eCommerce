"use server";

import { Product } from "@/db/models/product";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const fetchProductsBySlug = async (slug: string): Promise<Product> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product/${slug}/api`
  );
  const responseJson = await response.json();
  const data = responseJson.data;

  return data;
};

export const addWishlist = async ({ productId }: { productId: string }) => {
  const userId = cookies().get("id")?.value;
  // console.log(userId, `ini product id`);
  const payload = {
    productId,
    userId,
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/wishlist/api`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  return;
};
