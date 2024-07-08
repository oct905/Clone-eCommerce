"use server";

import { signup } from "@/db/models/user";
import { SignupResponse } from "./api/route";
import { redirect } from "next/navigation";

export const handleSignUp = async (formData: FormData): Promise<void> => {
  const name = formData.get("name");
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  const payload = { name, username, email, password };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/signup/api`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const responseJson: SignupResponse<unknown> = await response.json();
  if (responseJson.statusCode === 409) {
    const error = JSON.stringify(responseJson.error);
    redirect(`/signup?error=${error}`);
  }
  redirect(`/login`);
};
