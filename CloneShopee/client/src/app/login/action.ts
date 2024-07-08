"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LoginResponse } from "./api/route";

export const handleLogin = async (formData: FormData): Promise<void> => {
  const email = formData.get("email");
  const password = formData.get("password");
  const payload = {
    email,
    password,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/login/api`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  const responseJson: LoginResponse<unknown> = await response.json();
  const id = responseJson.id;
  const token = responseJson.token;
  if (!id) {
    redirect("/login");
  }
  if (token) {
    cookies().set("token", token);
    cookies().set("id", id);
  }
  redirect("/");
};
