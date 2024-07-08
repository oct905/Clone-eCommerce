"use server";

import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export type Product = {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
};

export const fetchProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api`);
  const responseJson: Product[] = await response.json();

  if (!response.ok) {
    console.log(`masuk error`);

    throw new Error("Error");
  }
  revalidatePath("/");

  return responseJson;
};
