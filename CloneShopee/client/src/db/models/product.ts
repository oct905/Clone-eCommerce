import { Collection, ObjectId } from "mongodb";
import { getShopeeCloneDB } from "../config";

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

const getProductCollection = async (): Promise<Collection<Product>> => {
  const db = await getShopeeCloneDB();
  return db.collection<Product>("Products");
};

export const getAllProducts = async (): Promise<Product[]> => {
  const productsCollection: Collection<Product> = await getProductCollection();
  const products: Product[] = await productsCollection
    .find()
    .limit(8)
    .toArray();
  return products;
};

export const getProductBySlug = async (slug: string): Promise<Product> => {
  const productsCollection: Collection<Product> = await getProductCollection();
  const product: Product = (await productsCollection.findOne({
    slug,
  })) as Product;
  return product;
};

export const paginationProducts = async (page: number): Promise<Product[]> => {
  const itemsPerPage = 8;
  const productsCollection: Collection<Product> = await getProductCollection();
  console.log(page, `ini di model`);

  const products: Product[] = await productsCollection
    .find()
    .skip((page - 1) * itemsPerPage)
    .limit(itemsPerPage)
    .toArray();

  return products;
};
