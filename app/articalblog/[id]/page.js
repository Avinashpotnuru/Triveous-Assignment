"use client";

import { useParams, useRouter } from "next/navigation";

import React from "react";

import { useGetArticlesNewsQuery } from "@/store/api/restApis";

import { useSelector } from "react-redux";

import { BsArrowLeft } from "react-icons/bs";

const Blog = () => {
  const params = useParams();
  const router = useRouter();

  const searchInput = useSelector((state) => state.tabsSlice.searchInput);
  const { data, error, isLoading } = useGetArticlesNewsQuery({ searchInput });
  // console.log(data.articles);
  const articleData = data?.articles[params.id];
  console.log(articleData);

  return (
    <div className="h-screen flex flex-col justify-center items-center mt-20 sm:mt-24 p-5 ">
      <div className="space-y-3 flex flex-col justify-center items-center lg:w-[60%] py-5 ">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="self-start"
        >
          <BsArrowLeft size={40} />
        </div>
        <img className="rounded-t-lg" src={articleData?.urlToImage} alt="" />
        <div className="w-full sm:flex justify-around items-center ">
          <h1>
            Author :{" "}
            <span className="text-amber-900 font-bold">
              {articleData?.author}
            </span>
          </h1>
          <h1>
            published At :{" "}
            <span className="text-amber-900 font-bold">
              {articleData?.publishedAt}
            </span>
          </h1>
        </div>

        <h1 className="text-[25px] sm:text-[30px] font-bold">
          {articleData?.title}
        </h1>
        <h1 className="text-gray-500">{articleData?.description}</h1>
        <h1 className="text-[18px] sm:text-[20px] ">{articleData?.content}</h1>

        <a
          href={articleData?.url}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          For more details
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Blog;
