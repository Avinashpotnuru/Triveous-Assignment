"use client";

import React, { useEffect, useState } from "react";

import NewsCard from "../NewsCard";

import { useDispatch } from "react-redux";

import { tabsHandler } from "@/store/slice/tabsSlice";

// import { MagnifyingGlass } from "react-loader-spinner";
// import { Audio } from "react-loader-spinner";

import { useGetTopHeadlinesQuery } from "@/store/api/restApis";

const HomePage = () => {
  const [tab, setTab] = useState("general");

  const dispatch = useDispatch();

  const tabs = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const { data, error, isLoading } = useGetTopHeadlinesQuery({ tab });
  // console.log(data.articles);
  const news = data?.articles;

  const handleDropdownChange = (event) => {
    setTab(event.target.value);
    dispatch(tabsHandler(event.target.value));
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-7 min-h-screen w-full  p-5">
      <h1 className="text-4xl font-extrabold mb-3 ">News</h1>
      <div className="space-x-3  hidden   sm:flex justify-around items-center  flex-wrap">
        {tabs.map((val, idx) => (
          <button
            onClick={() => {
              setTab(val);
              dispatch(tabsHandler(val));
            }}
            className={`bg-stone-500 my-3 p-2 hover:shadow-2xl ${
              tab === val ? "bg-red-500 shadow-red-500" : ""
            } `}
            key={idx}
          >
            {val}
          </button>
        ))}
      </div>
      <select
        className="border sm:hidden rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={tab}
        onChange={handleDropdownChange}
      >
        {tabs.map((e, idx) => (
          <option key={idx} value={e}>
            {e}
          </option>
        ))}
      </select>
      <div className="flex justify-center items-center w-full  ">
        {isLoading ? (
          <h1>loading ...</h1>
        ) : (
          <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full  md:gap-5 my-7">
            {news.map((val, idx) => (
              <NewsCard key={idx} id={idx} {...val} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
