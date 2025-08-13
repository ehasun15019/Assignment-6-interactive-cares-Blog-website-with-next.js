import { blog_data } from "@/assets/assets";
import React, { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className="px-12">
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer"
              : "cursor-pointer"
          }
        >
          All
        </button>

        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer"
              : "cursor-pointer"
          }
        >
          Technology
        </button>

        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup"
              ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer"
              : "cursor-pointer"
          }
        >
          Startup
        </button>

        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer"
              : "cursor-pointer"
          }
        >
          Lifestyle
        </button>
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl-mx-24">
        {blog_data.map((item, index) => {
          return (
            <BlogItem
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
