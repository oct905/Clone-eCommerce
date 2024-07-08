import {
  addToWishlist,
  deleteWishlistbyId,
  getWishListByUserId,
  Wishlist,
} from "@/db/models/wishlist";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const addWishlistReq = z.object({
  productId: z.string().min(1),
  userId: z.string().min(1),
});

export const GET = async (req: NextRequest) => {
  const userId = new ObjectId(cookies().get("id")?.value);

  const wishlist = (await getWishListByUserId(userId)) as Wishlist<unknown>[];

  return NextResponse.json<Wishlist<unknown>[]>(wishlist);
};

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  const parsedData = addWishlistReq.safeParse(data);

  if (!parsedData.success) {
    return NextResponse.json({});
  }
  const userId = new ObjectId(parsedData.data.userId);
  const productId = new ObjectId(parsedData.data.productId);

  await addToWishlist({ userId, productId });

  return NextResponse.json({});
};

export const DELETE = async (req: NextRequest) => {
  const { id } = await req.json();
  const wishlistId = new ObjectId(id);
  const report = await deleteWishlistbyId(wishlistId);
  console.log(report);

  return NextResponse.json({});
};
