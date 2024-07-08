"use client";

import { deleteWishlist } from "@/app/wishlist/action";
import { Product } from "@/db/models/product";
import { Wishlist } from "@/db/models/wishlist";
import { ObjectId } from "mongodb";
import { useState } from "react";

const ListWishlist = ({ wishlist }: { wishlist: Wishlist<unknown>[] }) => {
  const [product, setProduct] = useState<Product>();
  async function handleDelete(id: ObjectId) {
    console.log(id);
    await deleteWishlist(id);
    return;
  }
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 w-28">
              Produk
            </th>
            <th scope="col" className="px-6 py-3">
              Nama
            </th>
            <th scope="col" className="px-6 py-3">
              Detail
            </th>
            <th scope="col" className="px-6 py-3 max-w-20">
              Harga Satuan
            </th>
            <th scope="col" className="px-6 py-3 max-w-20">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((el, i) => {
            if (el && el.product) {
              setProduct(el.product);
            }
            if (product) {
              return (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center dark:text-white">
                    <img className="max-w-40" src={product.thumbnail} alt="" />
                  </th>
                  <td className="px-6 py-4">
                    <p className=" w-full h-full flex items-center">
                      {product.name}
                    </p>
                  </td>
                  <td className="px-6 py-4">{product.excerpt}</td>
                  <td className="px-6 py-4 w-40">{product.price}</td>
                  <td className="px-6 py-4 w-40">
                    <button
                      onClick={() => {
                        if (el._id) {
                          handleDelete(el._id);
                        }
                      }}
                      className="text-blue-600">
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListWishlist;
