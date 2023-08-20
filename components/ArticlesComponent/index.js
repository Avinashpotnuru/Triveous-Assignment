"use client";

import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { searchHandler } from "@/store/slice/tabsSlice";

import { useGetArticlesNewsQuery } from "@/store/api/restApis";
import NewsCard from "../NewsCard";
import { Discuss } from "react-loader-spinner";

const ArticlesComponent = () => {
  const dispatch = useDispatch();
  const [searchInput, setInput] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const submitHandler = () => {
    setSearchResult(searchInput);
  };
  const { data, error, isLoading } = useGetArticlesNewsQuery({ searchResult });
  // console.log(data);
  const news = data?.articles;

  return (
    <div className="flex flex-col  justify-center items-center">
      <h1 className="text-4xl font-extrabold mb-3 ">Articles</h1>

      <div className="flex items-center">
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
            dispatch(searchHandler(e.target.value));
          }}
          value={searchInput}
          class="py-2 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Search..."
        />
        <button
          onClick={submitHandler}
          className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {searchInput ? (
        <div className="flex justify-center items-center w-full  ">
          {isLoading ? (
            <Discuss
              visible={true}
              height="80"
              width="80"
              ariaLabel="comment-loading"
              wrapperStyle={{}}
              wrapperClass="comment-wrapper"
              color="#fff"
              backgroundColor="#F4442E"
            />
          ) : (
            <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full  md:gap-5 my-7">
              {news?.map((val, idx) => (
                <NewsCard name={"articles"} key={idx} id={idx} {...val} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <h1 className="text-red-600 mt-8 ">*Please Give input For Articles</h1>
      )}
    </div>
  );
};

export default ArticlesComponent;
