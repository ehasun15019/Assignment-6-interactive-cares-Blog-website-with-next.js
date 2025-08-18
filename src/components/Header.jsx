import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import UserAuth from "./UserAuth";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={assets.logo}
            width={180}
            alt="logo"
            className="w-[130px] sm:w-auto"
          />
        </Link>

        <div className="flex gap-5 items-center">
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black cursor-pointer shadow-[-7px_7px_0px_#000000]">
            Get Started
            <Image src={assets.arrow} alt="arrow" />
          </button>

          <UserAuth />
        </div>
      </div>

      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blog</h1>

        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Stay updated with our freshest stories, tips, and insights from the
          world of <br /> creativity and technology.
        </p>

        <form
          action=""
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="border-l cursor-pointer border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
