import { Product, getProductBySlug } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export type LoginResponse<T> = {
  statusCode: number;
  data?: Product;
  error?: string[] | string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
): Promise<NextResponse> {
  const { slug } = params;

  const data = await getProductBySlug(slug);

  if (data) {
    return NextResponse.json<LoginResponse<unknown>>(
      {
        statusCode: 200,
        data,
      },
      {
        status: 200,
      }
    );
  }

  const error = "Product not found";
  return NextResponse.json<LoginResponse<unknown>>(
    {
      statusCode: 200,
      error,
    },
    {
      status: 200,
    }
  );
}
