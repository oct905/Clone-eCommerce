import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "./db/utils/jwt";
import { User } from "@/db/models/user";

export const middleware = async (req: NextRequest) => {
  const url = req.url;

  if (url.includes("/wishlist")) {
    const ex: string[] = url.split("/");

    if (ex[ex.length - 1] === "api") {
      return NextResponse.next();
    }
    const token = cookies().get("token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      let user: User = await verifyJWT(token);

      const reqHeaders = new Headers(req.headers);
      reqHeaders.set("user-id", user._id.toString());
      reqHeaders.set("user-name", user.username);

      return NextResponse.next({
        headers: reqHeaders,
      });
    } catch (error) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
};
