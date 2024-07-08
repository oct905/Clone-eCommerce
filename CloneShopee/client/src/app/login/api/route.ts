import { login } from "@/db/models/user";
import { signJWT } from "@/db/utils/jwt";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export type LoginResponse<T> = {
  statusCode: number;
  token?: string;
  id?: string;
  error?: string[] | string;
};

const loginField = z.object({
  email: z
    .string({ message: "Email Required" })
    .min(1, "Email Required")
    .email("Use correct email format"),
  password: z
    .string({ message: "Email Required" })
    .min(5, "Password must atleast have 5 characters"),
});

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const data = await request.json();

  const parsedData = loginField.safeParse(data);

  if (!parsedData.success) {
    const error = parsedData.error.issues[0].message;
    return NextResponse.json<LoginResponse<unknown>>(
      {
        statusCode: 409,
        error,
      },
      {
        status: 409,
      }
    );
  }

  const user = await login(parsedData.data);

  const token = await signJWT({
    _id: user._id,
    name: user.name,
    username: user.username,
    email: user.email,
  });
  console.log(token, `token`);

  return NextResponse.json<LoginResponse<unknown>>(
    {
      statusCode: 200,
      token,
      id: String(user._id),
    },
    {
      status: 200,
    }
  );
};
