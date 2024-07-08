"use server";

import { Wishlist } from "@/db/models/wishlist";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const fetchWishlist = async (): Promise<Wishlist<unknown>[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/wishlist/api`,
    {
      headers: {
        Cookie: cookies().toString(),
      },
    }
  );
  const responseJson: Wishlist<unknown>[] = await response.json();
  if (!response.ok) {
    throw new Error("Error");
  }

  return responseJson as Wishlist<unknown>[];
};

export const deleteWishlist = async (id: ObjectId) => {
  const payload = { id };
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/wishlist/api`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  revalidatePath("/wishlist");
  redirect("/wishlist");
};
