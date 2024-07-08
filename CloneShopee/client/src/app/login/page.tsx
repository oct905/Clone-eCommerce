"use server";
import logo from "@/assets/name2.png";
import Image from "next/image";
import banner from "@/assets/bannerLogin.png";
import Link from "next/link";
import { handleLogin } from "./action";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { LoginResponse } from "./api/route";

// export const handleLogin = async (formData: FormData): Promise<void> => {
//   const email = formData.get("email");
//   const password = formData.get("password");
//   const payload = {
//     email,
//     password,
//   };

//   const response = await fetch("http://localhost:3000/login/api", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(payload),
//   });
//   const responseJson: LoginResponse<unknown> = await response.json();
//   const id = responseJson.id;
//   const token = responseJson.token;
//   if (!id) {
//     redirect("/login");
//   }
//   if (token) {
//     cookies().set("token", token);
//     cookies().set("id", id);
//   }
//   redirect("/");
// };

const LoginForm = () => {
  return (
    <>
      <div className=" w-full flex justify-center p-5">
        <div className=" flex w-3/4">
          <Link href="/">
            <img alt="" className=" w-28 h-9 " src={logo.src} />
          </Link>
          <div className="h-full content-center ml-10">
            <p className=" text-xl font-semibold">Login</p>
          </div>
        </div>
      </div>
      <div
        className=" w-full flex justify-center"
        style={{ backgroundColor: "#ae000a" }}>
        <div className="flex justify-center items-center w-3/4">
          <img
            src={banner.src}
            height={1980}
            width={1080}
            className=" object-cover h-full w-4/6"
            alt="Banner"
          />
          <div>
            <form
              action={handleLogin}
              className="bg-white p-10 rounded-lg w-full min-w-max mr-20">
              <h2 className="text-3xl font-semibold mb-6">Log in</h2>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                Log in
              </button>
              <div className=" flex justify-center mt-4">
                <p className="text-center mr-1">Baru di Shopee?</p>
                <Link href="/signup" className=" text-orange-600">
                  Daftar
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
