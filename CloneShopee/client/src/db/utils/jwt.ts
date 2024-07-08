import { SignJWT, jwtVerify } from "jose";

const secretKey = "secretkey1234567890";
const encodedKey = new TextEncoder().encode(secretKey);

export async function signJWT(payload: Record<string, any>): Promise<string> {
  const jwt = new SignJWT(payload);
  jwt.setProtectedHeader({ alg: "HS256" });

  try {
    const token = await jwt.sign(encodedKey);
    // console.log("Signed JWT:", token);
    return token;
  } catch (error) {
    console.error("Error signing JWT:", error);
    throw new Error("JWT signing failed");
  }
}

export async function verifyJWT(token: string): Promise<any> {
  try {
    const { payload } = await jwtVerify(token, encodedKey);
    return payload;
  } catch (error) {
    console.error("JWT verification failed:", error);
    throw new Error("Invalid token");
  }
}
