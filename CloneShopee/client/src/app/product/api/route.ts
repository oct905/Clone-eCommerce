import { paginationProducts, Product } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const pageHeader = req.headers.get("x-Page");
  const page = pageHeader ? parseInt(pageHeader) : 1;

  const data: Product[] = await paginationProducts(page);
  return NextResponse.json({ data });
};
