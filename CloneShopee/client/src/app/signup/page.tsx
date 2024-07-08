// components/LoginForm.tsx
"use client";
import { useState } from "react";
import logo from "@/assets/name2.png";
import Image from "next/image";
import banner from "@/assets/bannerLogin.png";
import Link from "next/link";
import { handleSignUp } from "./action";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className=" w-full flex justify-center p-5">
        <div className=" flex w-3/4">
          <Link href="/">
            <img alt="" className=" w-28 h-9 " src={logo.src} />
          </Link>

          <div className="h-full content-center ml-10">
            <p className=" text-xl font-semibold">Daftar</p>
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
              action={handleSignUp}
              className="bg-white p-10 rounded-lg w-full min-w-max mr-20">
              <h2 className="text-3xl font-semibold mb-6">Daftar</h2>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="usernmae"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                Sign In
              </button>
              <div className=" flex justify-center mt-4">
                <p className="text-center mr-1">Punya akun?</p>
                <Link href="/login" className=" text-orange-600">
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
