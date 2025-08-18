"use client";

import { assets, blog_data } from "@/assets/assets";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const { id } = React.use(params);

  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(id) === blog_data[i].id) {
        setData(blog_data[i]);
        // console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [id]);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={180}
              alt="logo"
              className="w-[130px] sm:w-auto"
            />
          </Link>

          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000] cursor-pointer">
            Get Started <Image src={assets.arrow} alt="arrow" />
          </button>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold mx-w-[700px] mx-auto">
            {data.title}
          </h1>

          <Image
            src={data.author_img}
            alt="author Image"
            width={60}
            height={60}
            className="mx-auto mt-6 border border-white rounded-full"
          />

          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>

      <div className="max-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          alt=""
          width={1280}
          height={720}
          className="border-4 border-white"
        />

        <h1 className="my-8 text-[-26px] font-semibold">Introduction</h1>

        <p>{data.description}</p>

        <h3 className="my-5 text-[18px] font-semibold">
          step 1: Self-Reflection abd Goal Setting
        </h3>

        <p className="my-3">
          Before oyu can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflection on your
          values, aspirations, and long-term goals
        </p>

        <p className="my-3">
          Before oyu can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflection on your
          values, aspirations, and long-term goals
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          step 2: Self-Reflection abd Goal Setting
        </h3>

        <p className="my-3">
          Before oyu can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflection on your
          values, aspirations, and long-term goals
        </p>

        <p className="my-3">
          Before oyu can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflection on your
          values, aspirations, and long-term goals
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          step 3: Self-Reflection abd Goal Setting
        </h3>

        <p className="my-3">
          Before oyu can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflection on your
          values, aspirations, and long-term goals
        </p>

        <p className="my-3">
          Before oyu can manage your lifestyle, you must have a clear
          understanding of what you want to achieve. Start by reflection on your
          values, aspirations, and long-term goals
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Conclusion</h3>

        <p className="my-3">
          Managing your lifestyle is a journey that requires commitment and
          self-awayness. By following this step-by-step guid, you can take
          control of your life and makes meaningful changes that lead a more
          balanced fulfilling lifestyle
        </p>

        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>

          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="facebook" />
            <Image src={assets.twitter_icon} width={50} alt="facebook" />
            <Image src={assets.googleplus_icon} width={50} alt="facebook" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
