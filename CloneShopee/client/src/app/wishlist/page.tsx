"use server";
import NavBar2 from "@/components/NavBar2";
import ListWishlist from "@/components/ListWishlist";
import { fetchWishlist } from "./action";
import { Wishlist } from "@/db/models/wishlist";

export default async function WishlistPage() {
  const wishlist = await fetchWishlist();
  return (
    <>
      <NavBar2 />
      <div className="bg-gray-300 min-h-screen flex justify-center py-5">
        <div className="w-3/4">
          <div className="relative overflow-x-auto">
            <ListWishlist wishlist={wishlist} />
          </div>
        </div>
      </div>
    </>
  );
}
