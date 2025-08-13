import { blog_data } from "@/assets/assets";
import React, { useState } from "react";
// import React, { useMemo } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  const categories = ["All", "Technology", "Startup", "Lifestyle"];

  function filteredBlogs() {
    if (menu === "All") {
      return blog_data;
    } else {
      return blog_data.filter((item) => {
        return item.category === menu;
      });
    }
  }

  //   const filteredBlogs = useMemo(() => {
  //     if (menu === "All") return blog_data;
  //     return blog_data.filter((item) => item.category === menu);
  //   }, [menu]);

  return (
    <div className="mx-12">
      {/* Categories Button */}
      <div className="flex justify-center gap-6 my-10">
        {categories.map((btn) => (
          <button
            key={btn}
            onClick={() => {
              return setMenu(btn);
            }}
            className={
              menu === btn
                ? "bg-black text-white py-1 px-4 rounded-sm cursor-pointer"
                : "cursor-pointer"
            }
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-around gap-1  mb-16 xl:mx-24">
        {filteredBlogs().map((item, index) => {
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

        {/* {filteredBlogs.map((item, index) => (
          <BlogItem
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
            key={index}
          />
        ))} */}
      </div>
    </div>
  );
};

export default BlogList;
