import { signup } from "@/db/models/user";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export type SignupResponse<T> = {
  statusCode: number;
  message?: string;
  error?: string[] | string;
};

const signupField = z.object({
  name: z.string().min(1, "Name Required"),
  username: z.string().min(1, "Username Required"),
  email: z.string().min(1, "Email Required").email("Use correct email format"),
  password: z.string().min(5, "Password must atleast have 5 characters"),
});

export const POST = async (request: NextRequest): Promise<Response> => {
  const data = await request.json();

  const parsedData = signupField.safeParse(data);

  if (!parsedData.success) {
    // const error = parsedData.error.issues.map((err) => err.message);
    // console.log(error, `ini api`);
    const error = parsedData.error.issues[0].message;
    return NextResponse.json<SignupResponse<unknown>>(
      {
        statusCode: 409,
        error,
      },
      {
        status: 409,
      }
    );
  }

  await signup(parsedData.data);

  return NextResponse.json<SignupResponse<unknown>>(
    {
      statusCode: 201,
      message: "Signup Success",
    },
    {
      status: 201,
    }
  );
};
