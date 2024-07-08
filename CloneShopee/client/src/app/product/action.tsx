"use server";

import { Product } from "@/db/models/product";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export const fetchProduct = async (page: number): Promise<Product[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product/api`,
    {
      headers: {
        "x-Page": page.toString(),
      },
    }
  );
  if (!response.ok) {
    throw new Error("Fetch failed");
  }
  const responseJson = await response.json();
  const data: Product[] = responseJson.data;
  revalidatePath("/product");
  return data;
};
