import { Collection, ObjectId } from "mongodb";
import { getShopeeCloneDB } from "../config";
import { Product } from "./product";

export type Wishlist<T> = {
  _id?: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  product?: Product;
};

export type InputWishlist = Omit<Wishlist<unknown>, "_id">;

const getWishlistCollection = async (): Promise<
  Collection<Wishlist<unknown>>
> => {
  const db = await getShopeeCloneDB();
  return db.collection<Wishlist<unknown>>("Wishlists");
};

export const getAllWishlist = async (): Promise<Wishlist<unknown>[]> => {
  const wishlistCollection: Collection<Wishlist<unknown>> =
    await getWishlistCollection();
  const wishlist: Wishlist<unknown>[] = await wishlistCollection
    .find()
    .toArray();
  return wishlist;
};

export const addWishlistValidation = async ({
  userId,
  productId,
}: {
  userId: ObjectId;
  productId: ObjectId;
}) => {
  console.log(userId, productId);

  const wishlistCollection: Collection<Wishlist<unknown>> =
    await getWishlistCollection();
  const item = await wishlistCollection.findOne({
    userId: new ObjectId(userId),
    productId: new ObjectId(productId),
  });

  return item;
};

export const addToWishlist = async ({
  userId,
  productId,
}: {
  userId: ObjectId;
  productId: ObjectId;
}) => {
  if (await addWishlistValidation({ userId, productId })) {
    return "You already wishlist this item";
  }
  const wishlistCollection: Collection<Wishlist<unknown>> =
    await getWishlistCollection();
  const createdAt = new Date();
  const updatedAt = new Date();
  const wishlist = await wishlistCollection.insertOne({
    userId: new ObjectId(userId),
    productId: new ObjectId(productId),
    createdAt,
    updatedAt,
  });

  return wishlist;
};

export const getWishListByUserId = async (userId: ObjectId) => {
  const wishlistCollection: Collection<Wishlist<unknown>> =
    await getWishlistCollection();

  const agg = [
    {
      $match: {
        userId,
      },
    },
    {
      $lookup: {
        from: "Products",
        localField: "productId",
        foreignField: "_id",
        as: "product",
      },
    },
  ];

  const wishlist = await wishlistCollection.aggregate(agg).toArray();
  return wishlist;
};

export const deleteWishlistbyId = async (_id: ObjectId) => {
  const wishlistCollection: Collection<Wishlist<unknown>> =
    await getWishlistCollection();

  const report = await wishlistCollection.deleteOne({ _id });
  return report;
};
