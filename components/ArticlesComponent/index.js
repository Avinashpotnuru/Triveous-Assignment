"use client";

import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { searchHandler } from "@/store/slice/tabsSlice";

import { useGetArticlesNewsQuery } from "@/store/api/restApis";
import NewsCard from "../NewsCard";

const ArticlesComponent = () => {
  const dispatch = useDispatch();
  const [searchInput, setInput] = useState("tesla");

  const { data, error, isLoading } = useGetArticlesNewsQuery({ searchInput });
  console.log(data);
  const news = data?.articles;

  return (
    <div className="flex flex-col  justify-center items-center">
      <h1>Articles</h1>
      <div className="flex items-center border rounded-md p-2">
        <svg
          className="w-5 h-5 text-gray-400 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 12a8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 14l5 5m0 0l-5-5m5 5H3"
          />
        </svg>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
            dispatch(searchHandler(e.target.value));
          }}
          value={searchInput}
          className="outline-none focus:ring focus:border-blue-300 flex-grow"
          placeholder="Search..."
        />
      </div>
      <div className="flex justify-center items-center w-full  ">
        {isLoading ? (
          <h1>loading ...</h1>
        ) : (
          <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full  md:gap-5 my-7">
            {news.map((val, idx) => (
              <NewsCard name={"articles"} key={idx} id={idx} {...val} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesComponent;
