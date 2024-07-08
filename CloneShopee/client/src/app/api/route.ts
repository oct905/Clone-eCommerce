import { getAllProducts } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const data = await getAllProducts();
  return NextResponse.json(data);
};
